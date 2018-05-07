import { combineReducers } from 'redux';
import MediaReducer from './media-reducer';
import CurrentArtist from './current-artist-reducer';

const allReducers = combineReducers({
    artists: MediaReducer,
    currentArtist: CurrentArtist
    
});

export default allReducers;