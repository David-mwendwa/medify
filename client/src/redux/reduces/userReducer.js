import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_APPLY_DOCTOR_FAIL,
  USER_APPLY_DOCTOR_REQUEST,
  USER_APPLY_DOCTOR_SUCCESS,
  CLEAR_ERRORS,
  USER_RESET,
} from '../constants/userConstants.js';

export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST:
    case USER_PROFILE_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        authenticated: true,
      };

    case USER_PROFILE_SUCCESS:
      return { loading: false, user: action.payload };

    case USER_LOGOUT_SUCCESS:
      return { loggedout: true };

    case USER_LOGIN_FAIL:
    case USER_REGISTER_FAIL:
    case USER_LOGOUT_FAIL:
    case USER_PROFILE_FAIL:
      return { loading: false, error: action.payload };

    case CLEAR_ERRORS:
      return { ...state, error: null };

    // causes inconsistency!!!
    case USER_RESET:
      return { authenticated: false };

    default:
      return state;
  }
};

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_APPLY_DOCTOR_REQUEST:
      return { loading: true };
    case USER_APPLY_DOCTOR_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case USER_APPLY_DOCTOR_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
