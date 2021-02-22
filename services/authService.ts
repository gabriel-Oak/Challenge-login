import { UserData } from "../interfaces/user";

const APP_KEY = 'challenge-login';

export const getUser: () => UserData = ()=> {
  const user = localStorage.getItem(`${APP_KEY}/user`);
  if (!user) return null;
  return JSON.parse(user);
}

export const storeUser = (user: UserData) => localStorage.setItem(
  `${APP_KEY}/user`, JSON.stringify(user),
);

export const clearUser = () => localStorage.removeItem(`${APP_KEY}/user`);