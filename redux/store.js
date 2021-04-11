import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};

export { store, persistor };

// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './rootReducers';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// export default store;
