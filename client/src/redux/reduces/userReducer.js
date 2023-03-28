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
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_FAIL,
  CLEAR_ERRORS,
  USER_RESET,
  DOCTOR_UPDATE_REQUEST,
  DOCTOR_UPDATE_SUCCESS,
  DOCTOR_UPDATE_FAIL,
  DOCTOR_DELETE_REQUEST,
  DOCTOR_DELETE_SUCCESS,
  DOCTOR_DELETE_FAIL,
  DOCTOR_DETAILS_REQUEST,
  DOCTOR_DETAILS_SUCCESS,
  DOCTOR_DETAILS_FAIL,
  DOCTORS_REQUEST,
  DOCTORS_SUCCESS,
  DOCTORS_FAIL,
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
    case USER_DETAILS_REQUEST:
    case USER_UPDATE_REQUEST:
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_APPLY_DOCTOR_SUCCESS:
    case USER_DETAILS_SUCCESS:
    case USER_UPDATE_SUCCESS:
    case USER_DELETE_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case USER_APPLY_DOCTOR_FAIL:
    case USER_DETAILS_FAIL:
    case USER_UPDATE_FAIL:
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const usersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USERS_REQUEST:
      return { loading: true };
    case USERS_SUCCESS:
      return { loading: false, success: true, users: action.payload };
    case USERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const doctorReducer = (state = { doctor: {} }, action) => {
  switch (action.type) {
    case DOCTOR_DETAILS_REQUEST:
    case DOCTOR_UPDATE_REQUEST:
    case DOCTOR_DELETE_REQUEST:
      return { loading: true };
    case DOCTOR_DETAILS_SUCCESS:
    case DOCTOR_UPDATE_SUCCESS:
    case DOCTOR_DELETE_SUCCESS:
      return { loading: false, success: true, doctor: action.payload };
    case DOCTOR_DETAILS_FAIL:
    case DOCTOR_UPDATE_FAIL:
    case DOCTOR_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const doctorsReducer = (state = { doctors: [] }, action) => {
  switch (action.type) {
    case DOCTORS_REQUEST:
      return { loading: true };
    case DOCTORS_SUCCESS:
      return { loading: false, success: true, doctors: action.payload };
    case DOCTORS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
