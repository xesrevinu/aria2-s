import { handleActions } from 'redux-actions';
import {
  SHOW_NEW_CONNECTION_MODAL,
  HIDE_NEW_CONNECTION_MODAL,
  SHOW_URLS_MODAL,
  HIDE_URLS_MODAL,
  SHOW_TORRENTS_MODAL,
  HIDE_TORRENTS_MODAL,
  SHOW_METALINKS_MODAL,
  HIDE_METALINKS_MODAL
} from '../constants/global';

const initialState = {
  showNewConnectionModal: false,
  showUrlsModal: false,
  showTorrentsModal: false,
  showMetaLinksModal: false
};

export default handleActions({
  [SHOW_NEW_CONNECTION_MODAL]: state => {
    return {
      ...state,
      showNewConnectionModal: true 
    };
  },
  [HIDE_NEW_CONNECTION_MODAL]: state => {
    return {
      ...state,
      showNewConnectionModal: false 
    };
  },
  [SHOW_URLS_MODAL]: state => {
    return {
      ...state,
      showUrlsModal: true 
    };
  },
  [HIDE_URLS_MODAL]: state => {
    return {
      ...state,
      showUrlsModal: false 
    };
  },
  [SHOW_TORRENTS_MODAL]: state => {
    return {
      ...state,
      showTorrentsModal: true 
    };
  },
  [HIDE_TORRENTS_MODAL]: state => {
    return {
      ...state,
      showTorrentsModal: false 
    };
  },
  [SHOW_METALINKS_MODAL]: state => {
    return {
      ...state,
      showMetaLinksModal: true 
    };
  },
  [HIDE_METALINKS_MODAL]:state => {
    return {
      ...state,
      showMetaLinksModal: false 
    };
  }
}, initialState);
