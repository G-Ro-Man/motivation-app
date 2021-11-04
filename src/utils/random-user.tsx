import { showErrorAlert } from '../components/alert';

const baseUrl = 'https://randomuser.me/api/?seed=motivation&inc=picture,name';

export const getUsers = async (count: number = 20, page: number = 1) => {
  try {
    const users = await fetch(`${baseUrl}&page=${page}&results=${count}`);
    const parsedUsers = await users.json();
    return parsedUsers.results;
  } catch (error) {
    showErrorAlert('Try it later.\n' + error);
    return [];
  }
};
