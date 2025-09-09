
import API from "../../utils/axiosConfig";
import { toast } from "react-toastify";
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL } from "../constants/userConstants";
import { USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS,USER_LOGOUT_FAIL } from '../constants/userConstants'
import { USER_LOAD_REQUEST, USER_LOAD_SUCCESS,USER_LOAD_FAIL } from '../constants/userConstants'
import { USER_APPLY_JOB_REQUEST, USER_APPLY_JOB_SUCCESS,USER_APPLY_JOB_FAIL } from '../constants/userConstants'
import { ALL_USER_LOAD_REQUEST, ALL_USER_LOAD_SUCCESS, ALL_USER_LOAD_FAIL } from '../constants/userConstants'

export const userSignInAction = (user) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST });
  try {
      const { data } = await API.post("/api/signin", user);
      localStorage.setItem('userInfo', JSON.stringify(data));
      dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: data
      });
      toast.success("Login Successfully!");
  } catch (error) {
      dispatch({
          type: USER_SIGNIN_FAIL,
          payload: error.response.data.error
      });
      toast.error(error.response.data.error);
  }
}

//log out action
export const userLogoutAction = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT_REQUEST });
  try {
      const { data } = await API.get("/api/logout");
      localStorage.removeItem('userInfo');
      dispatch({
          type: USER_LOGOUT_SUCCESS,
          payload: data
      });
      toast.success("Log out successfully!");
  } catch (error) {
      dispatch({
          type: USER_LOGOUT_FAIL,
          payload: error.response.data.error
      });
      toast.error(error.response.data.error);
  }
}

//user profile action
export const userProfileAction = () => async (dispatch) => {
  dispatch({ type: USER_LOAD_REQUEST });
  try {
      const { data } = await API.get("/api/me");
      dispatch({
          type: USER_LOAD_SUCCESS,
          payload: data
      });

  } catch (error) {
      dispatch({
          type: USER_LOAD_FAIL,
          payload: error.response.data.error
      });
  }
}

  //user job apply action
  export const userApplyJobAction = (job) => async (dispatch, getState) => {
    dispatch({ type: USER_APPLY_JOB_REQUEST });
    try {
      const {
        signIn: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await API.post("/api/users/jobhistory", job, config);
  
      dispatch({
        type: USER_APPLY_JOB_SUCCESS,
        payload: data,
      });
      toast.success("Applied Successfully for this Job!");
    } catch (error) {
      dispatch({
        type: USER_APPLY_JOB_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      });
      toast.error(
        error.response && error.response.data.error
          ? error.response.data.error
          : "Authorization failed"
      );
    }
  };

  
//all user action
export const allUserAction = () => async (dispatch) => {
  dispatch({ type: ALL_USER_LOAD_REQUEST });
  try {
      const { data } = await API.get("/api/allusers");
      dispatch({
          type: ALL_USER_LOAD_SUCCESS,
          payload: data
      });

  } catch (error) {
      dispatch({
          type: ALL_USER_LOAD_FAIL,
          payload: error.response.data.error
      });
  }
}

  