import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromUser from "./user-reducer";

export interface rootReducerState {
    user: fromUser.UserReducerState
}

export const rootReducer: ActionReducerMap<rootReducerState> = {
    user: fromUser.userReducer
}

export const getUserState = (state: rootReducerState) => state.user;

export const getuserLoaded = createSelector(getUserState, fromUser.getLoaded)

export const getuserLoading = createSelector(getUserState, fromUser.getLoading)

export const getuserUsers = createSelector(getUserState, fromUser.getusers)

