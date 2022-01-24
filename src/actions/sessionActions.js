import * as types from './actionTypes';

export const updateActivePlaylistAction = (playlistName) => {
    return {
        type: types.UPDATE_ACTIVE_PLAYLIST,
        playlistName
    };
};

export const updateLoadingAction = (loading) => {
    return {
        type: types.UPDATE_LOADING,
        loading
    }
}

export const updateActiveGraphAction = (activeGraph) => {
    return {
        type: types.UPDATE_ACTIVE_GRAPH,
        activeGraph
    }
}
