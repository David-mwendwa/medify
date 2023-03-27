import axios from 'axios';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_APPLY_DOCTOR_FAIL,
  USER_APPLY_DOCTOR_REQUEST,
  USER_APPLY_DOCTOR_SUCCESS,
  CLEAR_NOTIFICATIONS_FAIL,
  CLEAR_NOTIFICATIONS_REQUEST,
  CLEAR_NOTIFICATIONS_SUCCESS,
  MARK_ALL_NOTIFICATIONS_AS_SEEN_FAIL,
  MARK_ALL_NOTIFICATIONS_AS_SEEN_REQUEST,
  MARK_ALL_NOTIFICATIONS_AS_SEEN_SUCCESS,
  USER_RESET,
  CLEAR_ERRORS,
} from '../constants/userConstants';

export const register = (user) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });

  try {
    const { data } = await axios.post('/api/v1/user/register', user);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data.user });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
    localStorage.setItem('user', JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (user) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  try {
    const { data } = await axios.post('/api/v1/user/login', user);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
    localStorage.setItem('user', JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const applyDoctor = (details) => async (dispatch) => {
  dispatch({ type: USER_APPLY_DOCTOR_REQUEST });

  try {
    const { data } = await axios.post('/api/v1/user/apply-doctor', details);
    dispatch({ type: USER_APPLY_DOCTOR_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: USER_APPLY_DOCTOR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const clearNotifications = (userId) => async (dispatch) => {
  dispatch({ type: CLEAR_NOTIFICATIONS_REQUEST });

  try {
    const { data } = await axios.post('/api/v1/user/delete-all-notifications', {
      userId,
    });
    dispatch({ type: CLEAR_NOTIFICATIONS_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: CLEAR_NOTIFICATIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const markAsSeen = (userId) => async (dispatch) => {
  dispatch({ type: MARK_ALL_NOTIFICATIONS_AS_SEEN_REQUEST });

  try {
    const { data } = await axios.post(
      '/api/v1/user/mark-all-notifications-as-seen',
      {
        userId,
      }
    );
    dispatch({
      type: MARK_ALL_NOTIFICATIONS_AS_SEEN_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: MARK_ALL_NOTIFICATIONS_AS_SEEN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get('/api/v1/user/logout');
    localStorage.removeItem('user');
    dispatch({ type: USER_LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetUser = () => async (dispatch) => {
  dispatch({ type: USER_RESET });
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
