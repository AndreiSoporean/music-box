import { PLAY_TRACK, STOP_TRACK } from '../constants';

const state = (state = [], action) => {
    
    switch(action.type) {
        case PLAY_TRACK:
            let trackName = action.payload.music.name;
            let artistName = action.payload.name;
            let trackUrl = action.payload.music.url;
            let artistData = action.payload;
            state = {...state, artistData: artistData, artistName: artistName, trackName: trackName, current:trackUrl, isPlaying: true};
            return state;
        
        case STOP_TRACK:
            state = {...state, isPlaying: false};
            return state;
        default:
            return state;
    }
}
export default state;