import createlogger from 'redux-logger';

export const loggerMiddleware = createlogger({predicate: (getState, action) => __DEV__});
