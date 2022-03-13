import { combineReducers, createStore } from "redux";
import { snackReducer } from "./snackReducer";

// export const rootReducer = combineReducers({ snackReducer });
export const rootReducer = snackReducer
export type RootState = ReturnType<typeof rootReducer>
