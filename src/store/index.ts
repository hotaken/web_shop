import { createStore, compose, combineReducers } from 'redux';
import { throttle } from 'lodash';

import ingredientsReducer from './ingredients';
import ordersReducer from './orders';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

const LOCAL_STORAGE_REDUX_NAME = 'REDUX_INGREDIENTS';
const LOCAL_STORAGE_THROTTLE_TIME = 2000;

const composeEnhansers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    orders: ordersReducer,
});

const store = createStore(
    rootReducer,
    // берем данные из локального хранилища
    loadFromLocalStorage<StoreType>(LOCAL_STORAGE_REDUX_NAME),
    composeEnhansers(),
);

store.subscribe(
    throttle(() => {
        // подписали REDUX на запись в локальное хранилище при изменении данных.
        saveToLocalStorage({ ingredients: store.getState().ingredients }, LOCAL_STORAGE_REDUX_NAME);
    }, LOCAL_STORAGE_THROTTLE_TIME),
);

export type StoreType = ReturnType<typeof rootReducer>;
export type StoreDispatchType = typeof store.dispatch;

export default store;
