import React, { useState, useRef} from 'react';
import './Music.css';
import DisplayTrack from './DisplayTrack';
import MusicControls from './MusicControls';
import ProgressBar from './ProgressBar';
import tracks from '../../../../app/api/musicData/tracks';


function Music() {
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);

   const [timeProgress, setTimeProgress] = useState(0);
   const [duration, setDuration] = useState(0);


   const audioRef = useRef();
   const progressBarRef = useRef();
   
   const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
        setTrackIndex(0);
        setCurrentTrack(tracks[0]);
    }else {
        setTrackIndex((prev) => prev +1);
        setCurrentTrack(tracks[trackIndex + 1]);
    }
   }
    
    return(
        <>
    <div className="top__bar">
    <p>MUSIC!</p>
    </div>
    <div className='audioplayer'>
    <div className='inside-content'>
    <DisplayTrack 
    {...{ currentTrack, audioRef, setDuration, progressBarRef, handleNext}} />
    <MusicControls 
    {...{
        audioRef, 
        progressBarRef, 
        duration, 
        setTimeProgress,
        tracks,
        trackIndex,
        setTrackIndex,
        setCurrentTrack,
        handleNext,
    }}
     />
    <ProgressBar 
    {...{ progressBarRef, audioRef, timeProgress, duration }} />
    </div>
    </div>
    </>
    );
}

export default Music;