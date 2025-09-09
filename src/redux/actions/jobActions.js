
import API from "../../utils/axiosConfig";
import {  JOB_LOAD_FAIL, JOB_LOAD_REQUEST, JOB_LOAD_SUCCESS,  } from "../constants/jobConstants";
import { JOB_LOAD_SINGLE_FAIL, JOB_LOAD_SINGLE_REQUEST, JOB_LOAD_SINGLE_SUCCESS } from "../constants/jobConstants";


export const jobLoadAction = (pageNumber, keyword ='', cat ='', location ='') =>async(dispatch) =>{
     dispatch({type: JOB_LOAD_REQUEST });
     try {
        const { data } = await API.get(
            `/api/jobs/show?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`,
            {
              headers: {
                'Cache-Control': 'no-cache',
              },
            }
          );          
         dispatch({
             type: JOB_LOAD_SUCCESS,
             payload: data
            });
     } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.response.data.error
           });
     }

}

//single job action
export const jobLoadSingleAction = (id) =>async(dispatch) =>{
  dispatch({type: JOB_LOAD_SINGLE_REQUEST });
  try {
     const { data } = await API.get(
         `/api/job/${id}`,
         {
           headers: {
             'Cache-Control': 'no-cache',
           },
         }
       );          
      dispatch({
          type: JOB_LOAD_SINGLE_SUCCESS,
          payload: data
         });
  } catch (error) {
     dispatch({
         type: JOB_LOAD_SINGLE_FAIL,
         payload: error.response.data.error
        });
  }

}
