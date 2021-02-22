import { ActionType } from "../../interfaces/redux";
import { UserData } from "../../interfaces/user";
import types from "./types";

export const setUser: (user: UserData) => ActionType = (user: UserData) => ({
  type: types.SET_USER,
  payload: user,
});

export const logOut: () => ActionType = () => ({
  type: types.CLEAR_USER,
});