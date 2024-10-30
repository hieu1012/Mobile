import { call, put, takeEvery } from 'redux-saga/effects';

const API = 'https://67055186031fd46a830f85a3.mockapi.io/hgv/ToDoList';

function* fetchTodos() {
  try {
    const response = yield call(fetch, API);
    const data = yield response.json();
    yield put({ type: 'FETCH_TODOS_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_TODOS_FAILURE', error });
  }
}

function* addTodoSaga(action) {
  try {
    const response = yield call(fetch, API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });
    const data = yield response.json();
    yield put({ type: 'ADD_TODO_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'ADD_TODO_FAILURE', error });
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_TODOS_REQUEST', fetchTodos);
  yield takeEvery('ADD_TODO_REQUEST', addTodoSaga);
}

export default rootSaga;