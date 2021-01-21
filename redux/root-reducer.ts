import { combineReducers } from 'redux';

import place from './place/reducer';
import timeseries from './timeseries/reducer';
import excel from './excel/reducer';

export default combineReducers({
  place,
  timeseries,
  excel,
});
