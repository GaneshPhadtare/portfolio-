import { User } from "./user";
export const USER_LIST_REQUEST = 'User List Request';
export const USER_LIST_SUCCESS = 'User List Success';
export const USER_LIST_FAILD = 'User List Faild';
export class UserListRequestAction {
    readonly type = USER_LIST_REQUEST
}
export class UserListSuccessAction {
    readonly type = USER_LIST_SUCCESS
    constructor(public payload?: { data: User[] }) {
    }
}
