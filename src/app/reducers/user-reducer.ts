import { State } from "@ngrx/store";
import { User } from "../actions/user";
import { USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../actions/user-action";
import { Action } from '../actions'

export interface UserReducerState {
    loading: boolean;
    loaded: boolean;
    users: User[]
}

const initialState: UserReducerState = {
    loading: false,
    loaded: false,
    users: []
}

export function userReducer(state = initialState, action: Action): UserReducerState {
    
    switch (action.type) {
        case USER_LIST_REQUEST: {
           
            return { ...state, loading: true }
        }
        case USER_LIST_SUCCESS: {
           
            const updatedUsers = state.users.concat(action.payload.data)
            console.log({ ...state, loading: false, loaded: true, users: updatedUsers })
            return { ...state, loading: false, loaded: true, users: updatedUsers }
        }
        default: {
            return state
        }
    }
}

export const getLoading = (state: UserReducerState) => state.loading
export const getLoaded = (state: UserReducerState) => state.loaded
export const getusers = (state: UserReducerState) => state.users
