import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas';
import reducers from 'reducers';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, {}, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

window.store = store;
export default store;
