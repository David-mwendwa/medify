import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './reduces/userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const initialState = {
  auth: {
    currentUser: localStorage.getItem('authUser')
      ? JSON.parse(localStorage.getItem('authUser'))
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
