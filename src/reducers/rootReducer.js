import { combineReducers } from "redux";
import playlistReducer from "./playlistReducer";
import sessionReducer from "./sessionReducer";
import tracksReducer from "./tracksReducer";
import userReducer from './userReducer';

const rootReducer = combineReducers({ user: userReducer, playlists: playlistReducer, tracks: tracksReducer, session: sessionReducer });

export default rootReducer;