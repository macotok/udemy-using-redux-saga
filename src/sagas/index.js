import { all } from 'redux-saga';
import usersSagas from './users';

export default function* rootSaga() {
  yield all([
    ...usersSagas,
  ]);
};
