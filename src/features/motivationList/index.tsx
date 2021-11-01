import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { getUsers } from '../../utils/random-user';
import { ListItem } from './ListItem';

interface ListItemProps {
  item: {
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    name: {
      title: string;
      first: string;
      last: string;
    };
  };
}

const _keyExtractor = (item: object, index: number) => index.toString();

export const MotivationListScreen = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const ref: RefObject<FlatList> = useRef(null);

  useEffect(() => {
    getUsers(20, 1, setUsers);
  }, []);

  const _onRefresh = async () => {
    setRefreshing(true);
    await getUsers(20, 2, setUsers);
    setPage(2);
    setRefreshing(false);
  };

  const _renderItem = useCallback(
    ({ item }: ListItemProps) => (
      <ListItem name={item.name} picture={item.picture} />
    ),
    []
  );

  const _onEndReached = () => {
    const getNewUsers = (newUsers: any) => {
      setUsers(users.concat(newUsers));
    };
    getUsers(20, page + 1, getNewUsers);
    setPage(page + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={ref}
        data={users}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        refreshing={refreshing}
        onRefresh={_onRefresh}
        onEndReached={_onEndReached}
        initialNumToRender={10}
        windowSize={5}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
