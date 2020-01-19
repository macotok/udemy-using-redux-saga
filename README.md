# udemy-using-redux-saga

- dummyのAPIで使用「[REM REST API]」(https://rem-rest-api.herokuapp.com/)
- takeEveryはwhile(true)と同じ動作。passするまでloop処理
- rootsagaからfork指定した処理をおこなう。各forkは切り離されている
     - fork1はget
     - fork2はdelete
     - fork3はcreate

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
