import { handleActions } from 'redux-actions';
import {
  ADD_CONNECTION,
  USE_CONNECTION
} from '../constants/connections'

const connection = {
  host: 'localhost',
  port: 6800,
  secure: false,
  secret: '',
  path: '/jsonrpc',
  connection: null,
  error: null,
};

const initialState = {
  connections: JSON.parse(localStorage.getItem('connections') || '[]') || '',
  useConnection: 0
};

export default handleActions({
  [ADD_CONNECTION]: (state, { payload }) => {
    const newConnections = [...state.connections, payload.config]
    localStorage.setItem('connections', JSON.stringify(newConnections));
    return {
      ...state,
      connections: newConnections
    }; 
  },
  [USE_CONNECTION]: (state, { payload }) => {
    localStorage.setItem('useConnection', payload.index);
    return {
      ...state,
      useConnection: payload.index
    };
  }
}, initialState);
