import { PLAY_TRACK, STOP_TRACK } from '../constants';

export const playSong = (artist) => {
    return {
        type: PLAY_TRACK,
        payload: artist
    }
}

export const stopSong = () => {
    
    return {
        type: STOP_TRACK
    }
}