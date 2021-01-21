import { combineReducers } from 'redux';
import App from '@iso/redux/app/reducer';
import Calendar from '@iso/redux/calendar/reducer';
import Box from '@iso/redux/box/reducer';
import Notes from '@iso/redux/notes/reducer';
import Contacts from '@iso/redux/contacts/reducer';
import Cards from '@iso/redux/card/reducer';
import DynamicChartComponent from '@iso/redux/dynamicEchart/reducer';
import LanguageSwitcher from '@iso/redux/languageSwitcher/reducer';
import Articles from '@iso/redux/articles/reducers';
import modal from '@iso/redux/modal/reducer';
import profile from '@iso/redux/profile/reducer';
import place from './place/reducer';
import timeseries from './timeseries/reducer';
import excel from './excel/reducer';

export default combineReducers({
  App,
  LanguageSwitcher,
  Calendar,
  Box,
  Notes,
  Contacts,
  Cards,
  DynamicChartComponent,
  Articles,
  modal,
  profile,
  place,
  timeseries,
  excel,
});
