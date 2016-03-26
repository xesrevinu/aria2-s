import { createAction } from 'redux-actions';
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

export const showNewConnectionModal = createAction(SHOW_NEW_CONNECTION_MODAL);
export const hideNewConnectionModal = createAction(HIDE_NEW_CONNECTION_MODAL);

export const showUrlsModal = createAction(SHOW_URLS_MODAL);
export const hideUrlsModal = createAction(HIDE_URLS_MODAL);

export const showTorrentsModal = createAction(SHOW_TORRENTS_MODAL);
export const hideTorrentsModal = createAction(HIDE_TORRENTS_MODAL);

export const showMetaLinksModal = createAction(SHOW_METALINKS_MODAL);
export const hideMetaLinksModal = createAction(HIDE_METALINKS_MODAL);
