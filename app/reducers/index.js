import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import GlobalConfig from './globalConfig';
import Connections from './connections';

const rootReducer = combineReducers({
  GlobalConfig,
  Connections,
  routing
});

export default rootReducer;
