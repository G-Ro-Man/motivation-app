const baseUrl = 'https://randomuser.me/api/?seed=motivation&inc=picture,name';

export const getUsers = async (
  count: number = 20,
  page: number = 1,
  callback: (users: any) => void
) => {
  const users = await fetch(`${baseUrl}&page=${page}&results=${count}`);
  const parsedUsers = await users.json();
  callback(parsedUsers.results);
};
