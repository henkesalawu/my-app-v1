import React from 'react';
import {BsMusicNoteBeamed} from 'react-icons/bs';

function DisplayTrack({currentTrack, audioRef, setDuration, progressBarRef, handleNext}) {
  const onLoadedMetaData = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };
  console.log(currentTrack.thumbnail);

  return (
    <div>
      <audio 
      src={currentTrack.src} 
      ref={audioRef}
      onLoadedMetadata={onLoadedMetaData}
      onEnded={handleNext} />
      <div className='audio-info'>
        <div className='audio-image'>
          {currentTrack.thumbnail ? (
            <img src={currentTrack.thumbnail} alt='audio avatar' />
          ) : (
            <div className='icon-wrapper'>
            <span className='audio-icon'>
              <BsMusicNoteBeamed />
            </span>
            </div>
          )}
        </div>
        <div className='audio-text'>
          <p className='audio-title'>{currentTrack.title}</p>
          <p>{currentTrack.author}</p>
        </div>
      </div>
    </div>
  )
}

export default DisplayTrack;
