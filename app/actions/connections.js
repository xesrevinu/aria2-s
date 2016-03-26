import { createAction } from 'redux-actions';
import {
  ADD_CONNECTION
} from '../constants/connections';

export const addConnection = createAction(ADD_CONNECTION, config => ({ config }));
