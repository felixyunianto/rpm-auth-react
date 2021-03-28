import actionAuth from "../actions/actionAuth";

const initialState = {
  user: null,
  isAuthenticated: false,
  msgInvalid: "",
  status: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionAuth.authSignIn + "_PENDING":
      return {
        ...state,
        isPending: true,
      };
    case actionAuth.authSignIn + "_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        msgInvalid: payload.response.data.message.msg,
      };
    case actionAuth.authSignIn + "_FULFILLED":
      if (payload.data.success === false) {
        return {
          ...state,
          user: null,
          msgInvalid: payload.response.data.message.msg,
          isAuthenticated: false,
        };
      } else {
        return {
          ...state,
          user: payload.data.data,
          msgInvalid: "",
          isAuthenticated: true,
          isPending: false,
          isRejected: false,
          isFulfilled: true,
        };
      }
    case actionAuth.authSignUp + "_PENDING":
      return {
        ...state,
        isPending: true,
      };
    case actionAuth.authSignUp + "_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
      };
    case actionAuth.authSignUp + "_FULFILLED":
      return {
        ...state,
        isPending: false,
        isRejected: false,
        user: payload.data.data,
        msgInvalid: "",
        isAuthenticated: true,
        isFulfilled: true,
      };
    case actionAuth.authSignOut:
      return {
        user: null,
        isAuthenticated: false,
        msgInvalid: "",
        status: {},
        isPending: false,
        isFulfilled: false,
        isRejected: false,
      };
    default:
      return state;
  }
};

export default auth;
