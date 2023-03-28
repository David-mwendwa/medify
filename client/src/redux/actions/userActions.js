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

/******************( ADMIN ACTIONS )******************/

/**
 * Get many users
 * @param {*} null
 * @returns request user documents - one or more
 */
export const getUsers = () => async (dispatch) => {
  dispatch({ type: USERS_REQUEST });

  try {
    const { data } = await axios.get('/api/v1/admin/users');
    dispatch({ type: USERS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: USERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

/**
 * Get single user
 * @param {*} id id of the user request
 * @returns reuested user document - object
 */
export const getUser = (id) => async (dispatch) => {
  dispatch({ type: USER_DETAILS_REQUEST });

  try {
    const { data } = await axios.get(`/api/v1/admin/users/${id}`);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

/**
 * Update user
 * @param {*} id id of the user to update
 * @param {*} newDetails new user details object
 * @returns update status
 */
export const updateUser = (id, newDetails) => async (dispatch) => {
  dispatch({ type: USER_UPDATE_REQUEST });

  try {
    await axios.patch(`/api/v1/admin/users/${id}`, newDetails);
    dispatch({ type: USER_UPDATE_SUCCESS });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

/**
 * Delete user
 * @param {*} id id of the user to delete
 * @returns delete status
 */
export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: USER_DELETE_REQUEST });

  try {
    await axios.delete(`/api/v1/admin/users/${id}`);
    dispatch({ type: USER_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload: error.response.data.message,
    });
  }
};

/******* DOCTOR ACTIONS **************/
export const getDoctors = () => async (dispatch) => {
  dispatch({ type: DOCTORS_REQUEST });

  try {
    const { data } = await axios.get('/api/v1/admin/doctors');
    dispatch({ type: DOCTORS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: DOCTORS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getDoctor = (id) => async (dispatch) => {
  dispatch({ type: DOCTOR_DETAILS_REQUEST });

  try {
    const { data } = await axios.get(`/api/v1/admin/doctors/${id}`);
    dispatch({ type: DOCTOR_DETAILS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: DOCTOR_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateDoctor = (id, newDetails) => async (dispatch) => {
  dispatch({ type: DOCTOR_UPDATE_REQUEST });

  try {
    await axios.patch(`/api/v1/admin/doctors/${id}`, newDetails);
    dispatch({ type: DOCTOR_UPDATE_SUCCESS });
  } catch (error) {
    dispatch({
      type: DOCTOR_UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteDoctor = (id) => async (dispatch) => {
  dispatch({ type: DOCTOR_DELETE_REQUEST });

  try {
    await axios.delete(`/api/v1/admin/doctors/${id}`);
    dispatch({ type: DOCTOR_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: DOCTOR_DELETE_FAIL,
      payload: error.response.data.message,
    });
  }
};
