# udemy-using-redux-saga

- dummyのAPIで使用「[REM REST API]」(https://rem-rest-api.herokuapp.com/)
- takeEveryはwhile(true)と同じ動作。passするまでloop処理
- crud処理をforkで指定する
     - fork1はget
     - fork2はdelete
     - fork3はcreate
- rootSagaでsagaの処理をallで配列で管理する。allはpromiseAllと同様の処理。全ての処理が終わるのを待つ

```javascript
function* testing() {
  yield 1;
  yield 2;
  yield 3;
}

const itelator = testing()l
itelator.next();
itelator.next();
itelator.next();
itelator.next();
```

## setup

```javascript
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
```
