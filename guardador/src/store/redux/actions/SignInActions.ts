import {
    LOGIN_USER,
} from './types';

export const loginUser = (email: string, password: string) => {
    return (dispatch: Function) => {
        dispatch({ type: LOGIN_USER });
    };
};
