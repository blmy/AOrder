import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
  FB_LOGIN_SUCCESS,
  FB_LOGIN_FAIL
} from './types';

//How to use AsyncStorage:
//AsyncStorage.setItem('fb_token', token);
//AsyncStorage.getItem('fb_token');
//What it does:
//Storing a data into the device.
//Async will return a promise.

//Aysnchronous Action Creator.
//Async await with redux-thunk function syntax.
//Verifying if token exist.
export const fbLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  if (token) {
    //dispatch an action saying FB login is done
    dispatch({ type: FB_LOGIN_SUCCESS, payload: token });
  }
  else {
    //start up FB login process
    doFBLogin(dispatch);
  }
};

//Not an Action Creator, do not require export.
//A helper function called within fbLogin.
//Assign the return token to result.
//The result will contain 2 properties; type and token.
//Type reflect the status of the login.
//To read up on expo Facebook.
const doFBLogin = async dispatch => {
  let result = await Facebook.logInWithReadPermissionsAsync('1430652093687071', {
    permission: ['public_profile']
  });

  if (result.type === 'cancel') {
    return dispatch({ type: FB_LOGIN_FAIL });
  }

  await AsyncStorage.setItem('fb_token', result.token);
  dispatch({ type: FB_LOGIN_SUCCESS, payload: result.token });
};
