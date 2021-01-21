import { all } from 'redux-saga/effects';
import contactSagas from '@iso/redux/contacts/saga';
import notesSagas from '@iso/redux/notes/saga';
import cardsSagas from '@iso/redux/card/saga';
import articles from '@iso/redux/articles/sagas';

import profileSaga from '@iso/redux/profile/saga';
import placeSaga from './place/sagas';
import timeseriesSaga from './timeseries/sagas';

export default function* rootSaga(getState) {
  yield all([
    contactSagas(),
    notesSagas(),
    cardsSagas(),
    articles(),
    profileSaga(),
    placeSaga(),
    timeseriesSaga(),
  ]);
}
