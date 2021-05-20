import { createStore, compose, combineReducers } from 'redux';
import ingredientsReducer from './ingredients';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

const LOCAL_STORAGE_REDUX_NAME = 'REDUX_INGREDIENTS';

const composeEnhansers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
});

const store = createStore(
    rootReducer,
    // берем данные из локального хранилища
    loadFromLocalStorage<StoreType>(LOCAL_STORAGE_REDUX_NAME),
    composeEnhansers(),
);

store.subscribe(() => {
    // подписали REDUX на запись в локальное хранилище при изменении данных.
    saveToLocalStorage(store.getState(), LOCAL_STORAGE_REDUX_NAME);
});

export type StoreType = ReturnType<typeof rootReducer>;
export type StoreDispatchType = typeof store.dispatch;

export default store;
