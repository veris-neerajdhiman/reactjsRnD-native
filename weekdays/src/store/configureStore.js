import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import {loggerMiddleware} from '../logging/logger';

export default function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(thunkMiddleware,
            loggerMiddleware,
        ),
    );

    return createStore(
        rootReducer,
        initialState,
        enhancer
    );
}