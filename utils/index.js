/**
 * @format
 * @flow
 */

import * as UrlUtils from './UrlUtils';
export {UrlUtils};

export * from './CacheUtils';
export * from './RAMUtils';

import {Alert} from 'react-native';

export const handleError = err => {
  console.log(err);
  console.log(err.response);
  let message = 'Internal Server Error';
  if (err.response) {
    message = err.response.data.message;
  }
  Alert.alert(message);
};
