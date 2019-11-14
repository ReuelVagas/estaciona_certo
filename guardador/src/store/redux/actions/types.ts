// #region
export const BEGIN_API_CALL = 'BEGIN_API_CALL';
export const API_CALL_ERROR = 'API_CALL_ERROR';
// #endregion

// #region SignInActions
export const LOGIN_USER = 'LOGIN_USER';
// export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
// export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

interface SendMessageAction {
    type: typeof LOGIN_USER
}

export type ChatActionTypesSign = SendMessageAction;
// #endregion