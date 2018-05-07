import allArtists from '../data/artists.json';
import allSongs from '../data/media.json';

var newObj = {};
var allData = []

for(let i = 0;i< allArtists.artists.length;i++) {
    newObj = {...allArtists.artists[i], music: allSongs.songs[i]}
    allData.push(newObj) 
}

export default function() {
    return allData;
}