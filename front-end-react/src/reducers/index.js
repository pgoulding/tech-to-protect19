import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import { throwErrorReducer } from './throwErrorReducer';
import { isLoadingReducer } from './isLoadingReducer';


const rootReducer = combineReducers({
  user: userReducer,
  isLoading: isLoadingReducer,
  throwError: throwErrorReducer,
});

export default rootReducer;