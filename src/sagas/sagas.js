import { put, select, takeEvery } from 'redux-saga/effects'
import * as types from '../actions/actionTypes';
import { get } from './../helpers/http';
import { updatePlaylistsAction, updateTracksAction } from '../actions/playlistActions';
import { updateLoadingAction } from '../actions/sessionActions';

const baseApi = 'https://api.spotify.com/v1';
const selectToken = state => state.user.accessToken;

export function* watchGetUserPlaylists() {
  yield takeEvery(types.GET_USER_PLAYLISTS, getUserPlaylists);
}

export function* watchGetTrackForPlaylist() {
  yield takeEvery(types.GET_TRACKS_FOR_PLAYLIST, getTracksForPlaylist);
}

export function* getUserPlaylists(action) {
  const token = yield select(selectToken);
  const headers = { Authorization: 'Bearer ' + token }
  const response = yield get(baseApi + '/me/playlists?limit=50', headers);
  yield put(updatePlaylistsAction(response.data.items));
  yield put(updateLoadingAction(false));
}

export function* getTracksForPlaylist(action) {
  const token = yield select(selectToken);
  const headers = { Authorization: 'Bearer ' + token }

  let tracks = []

  let response = yield get(action.playlist.tracks.href, headers);
  tracks = tracks.concat(response.data.items);

  while (response.data.next) {
    response = yield get(response.data.next, headers);
    tracks = tracks.concat(response.data.items);
  }

  yield put(updateTracksAction(tracks))
  yield put(updateLoadingAction(false));
}


export function* getGenresForPlaylist(action) {

  const token = yield select(selectToken);
}