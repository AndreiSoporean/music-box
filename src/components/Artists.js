import React from 'react';
import toolbarPlay from '../icons/toolbar-play.svg';
import toolbarStop from '../icons/toolbar-stop.svg';
import toolbarPause from '../icons/toolbar-pause.svg';
import playCircle from '../icons/play-circle.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playSong, stopSong } from '../actions';
import Visualizer from './Visualizer';

let playingSong = '';
let audio = new Audio();
class Artists extends React.Component {

    displayArtists() {
       return this.props.artists.map((artist) => {
           return (
               <div className='box' key={artist._id}>
                    <img className='img' onClick={() => this.playMedia(artist)} src={artist.url} alt=''></img>
                    <div className='info-wrapper'>
                        <h5>{artist.name}</h5>
                        <p>{artist.music.name}</p>
                        <img className="play-circle" src={playCircle} alt='' onClick={() => this.playMedia(artist)}></img>
                    </div>
                </div>
           )
       }) 
    }
    playMedia(artist){

        playingSong = artist.music.url;    
        audio.src = playingSong;
        this.props.playSong(artist);
        if(!this.props.songIsPlaying) {
            audio.play();
        }else {
            if(this.props.currentSongUrl === playingSong) {
                this.stopMedia();
            }else {
                audio.play();
            }
        } 
       
    }

    stopMedia() {
        this.props.stopSong()
        audio.pause();
    }
    render() {
        return(
            <div>
                <div className='toolbar'>
                    {
                        !this.props.song ? <h3 className='current-info'>Select a song...</h3> : 
                        <h4 className='current-info'>Now Playing: { this.props.song} by {this.props.artist}</h4>
                    }
                    {
                        this.props.song && <img className="stop" src={toolbarStop} alt='' onClick={() => this.stopMedia()}></img>
                    }
                    {
                        this.props.song && !this.props.songIsPlaying && <img className="play" src={toolbarPlay} alt='' onClick={() => this.playMedia(this.props.artistAllData)}></img>
                    }
                    {
                        this.props.songIsPlaying && <img className="play" src={toolbarPause} alt='' onClick={() => this.stopMedia()}></img>
                    }

                 <Visualizer audio={audio}/>
                </div>
                <div className='boxes'>
                    {this.displayArtists()}
                </div>
            </div>
            
        )
    }
}

function mapStateToProps(state) {

    return {
       artists: state.artists,
       currentSongUrl: state.currentArtist.current,
       songIsPlaying : state.currentArtist.isPlaying,
       song: state.currentArtist.trackName,
       artist: state.currentArtist.artistName,
       artistAllData: state.currentArtist.artistData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({playSong, stopSong}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Artists);