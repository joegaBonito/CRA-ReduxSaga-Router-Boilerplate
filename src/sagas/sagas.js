import { delay } from 'redux-saga'
import { put, take, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

function* helloSaga() {
  console.log('Hello Sagas!');
}
//Updates Reducers
function* increment() {
  yield put({type: 'INCREMENT'});
}
//Listens Actions
function* incrementCall() {
  yield take('INCREMENT', increment);
}
//Updates Reducers
function* decrement() {
  yield put({type: 'DECREMENT'});
}
//Listens Actions
function* decrementCall() {
  yield take('DECREMENT', decrement);
}

// Our worker Saga: will perform the async increment task
function* syncrhonizeCount() {
  yield call(delay, 1000);
  yield put({type: 'SYNCHRONIZE' });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* syncrhonizeCountCall() {
  yield take('SYNCHRONIZE', syncrhonizeCount);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    syncrhonizeCountCall(),
    incrementCall(),
    decrementCall()
  ])
}