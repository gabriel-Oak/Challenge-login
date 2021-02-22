import { CombinedState, Store } from "redux";
import { Task } from "redux-saga";
import { ActionType } from "./redux";
import { UserData } from "./user";

export type StoreState = CombinedState<{
  timer: {
    lastUpdate: any;
    light: boolean;
  };
  login: {
    user: UserData;
    loading: boolean;
  };
}>;

export type StoreData = Store<StoreState, ActionType>;

export interface StoreType extends StoreData {
  sagaTask?: Task;
}