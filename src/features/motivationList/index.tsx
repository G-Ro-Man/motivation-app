import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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

const keyExtractor = (item: object, index: number) => index.toString();

export const MotivationListScreen = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const ref: RefObject<FlatList> = useRef(null);

  useEffect(() => {
    async function fetchUsers() {
      const response = await getUsers(20, page);
      setUsers(response);
    }
    fetchUsers();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    const newUsers = await getUsers(20, 2);
    setUsers(newUsers);
    setPage(2);
    setRefreshing(false);
  };

  const renderItem = useCallback(
    ({ item }: ListItemProps) => (
      <ListItem name={item.name} picture={item.picture} />
    ),
    []
  );

  const emptyList = () => (
    <View style={styles.emptyView}>
      <Text> There are no users</Text>
    </View>
  );

  const onEndReached = async () => {
    const newUsers: [] = await getUsers(20, page + 1);
    const showMoreUsers = () => {
      setUsers(users.concat(newUsers));
    };
    showMoreUsers();
    setPage(page + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={ref}
        data={users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        initialNumToRender={10}
        windowSize={5}
        ListEmptyComponent={emptyList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  emptyView: {
    paddingTop: 15,
    alignItems: 'center',
  },
});
