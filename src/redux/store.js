import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import { composeWithDevTools } from '@redux-devtools/extension';
import { loadJobReducers,  loadJobSingleReducers } from './reducers/jobReducers';
import { loadJobTypeReducers } from './reducers/jobTypeReducer';
import { userReducerSignIn,userReducerSignUp, userReducerLogout, userReducerProfile, userApplyJobReducer, allUserReducer } from './reducers/userReducer'



//combine reducers 
const reducer = combineReducers({
    loadJobs: loadJobReducers,
    JobTypeAll: loadJobTypeReducers,
    signIn: userReducerSignIn,
    signUp: userReducerSignUp,
    logOut: userReducerLogout,
    userProfile: userReducerProfile,
    singleJob: loadJobSingleReducers,
    userJobApplication: userApplyJobReducer,
    allUsers: allUserReducer  
})


//initial state
let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;