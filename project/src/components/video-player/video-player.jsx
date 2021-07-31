import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

function VideoPlayer({src}) {

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.muted = true;
    videoRef.current.play();
  });

  return (
    <video src={src} ref={videoRef} className="player__video" poster="img/player-poster.jpg"></video>
  );
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default VideoPlayer;
