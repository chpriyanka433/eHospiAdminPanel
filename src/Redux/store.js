import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../redux/Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
  login: { loginUser: loginFromStorage },
};

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
