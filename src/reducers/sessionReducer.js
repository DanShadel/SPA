import * as types from "../actions/actionTypes"
const initialState = { playlistName: '', activeGraph: 'mural', loading: true }

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_ACTIVE_PLAYLIST:
            return { ...state, playlistName: action.playlistName }
        case types.UPDATE_LOADING:
            return { ...state, loading: action.loading }
        case types.UPDATE_ACTIVE_GRAPH:
            return { ...state, activeGraph: action.activeGraph }
        default:
            return state;
    }
}

export default sessionReducer;