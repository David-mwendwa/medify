import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './reduces/userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const initialState = {
  auth: {
    user: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : {},
  },
};

const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
