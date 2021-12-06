import React from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { getFilms } from '../../store/selectors';

function Player() {
  const films = useSelector(getFilms);
  const { id } = useParams();
  const film = films.find((item) => item.id === parseInt(id, 10));
  const [isActive, setIsActive] = React.useState(true);
  const [timer, setTimer] = React.useState(0);
  const videoRef = useRef();
  const history = useHistory();
  const duration = film.runTime * 60;

  const time = Math.round(duration - timer);
  const second = time % 60;
  const min = Math.floor(time / 60);
  const minute = min > 60 ? min % 60 : min;
  const hour = Math.floor(min / 60);
  const timeString = `-${hour}:${minute}:${second}`;

  useEffect(() => {
    videoRef.current.muted = true;
  });

  const fullScreen = function (element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.webkitrequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.mozRequestFullscreen) {
      element.mozRequestFullScreen();
    }
  };

  return (
    <div className="player">
      <video src={film.videoLink} ref={videoRef} className="player__video" poster={film.previewImage}
        onTimeUpdate={ () => {
          setTimer(videoRef.current.currentTime);
        }}
      >
      </video>

      <button type="button" className="player__exit"
        onClick={() => {
          if (isActive === true) {videoRef.current.pause();}
          setIsActive(!isActive);
          history.goBack();
        }}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>

          <div className="player__time-value">{timeString}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play"
            onClick={() => {
              isActive === true ? videoRef.current.play() : videoRef.current.pause();
              setIsActive(!isActive);
            }}
          >
            {
              isActive ?
                <div>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </div> :
                <div>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </div>
            }
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen"
            onClick={() => {
              fullScreen(document.querySelector('.player__video'));
            }}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
