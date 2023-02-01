import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Control } from "./control";
import { Details } from "./details";



export const Player = (props) => {

  
  const audioEl = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const skipSong = (fowards = true) => {
    if (fowards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;
        if(temp === props.songs.length){
          temp = 0
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };
  return (
    <div className="player">
      <div className="anime">
      </div>
      <div className="box">
      <h4>My Playlist<FontAwesomeIcon className="icon1" icon = { faHeadphones}/> </h4>
      <Details song={props.songs[props.currentSongIndex]} skipSong={skipSong} />
      <Control
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
      <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
        controls
      ></audio>
      <p className="nextPlay">
        Next Up: <span>{props.songs[props.nextSongIndex].artist} - { }{props.songs[props.nextSongIndex].title}</span>
        
      </p>
      </div>
    </div>
  );
};








// const skipSong = (fowards = true) => {
//   if (fowards) {
//     props.setCurrentSongIndex(() => {
//       let temp = props.currentSongIndex;
//       temp++;
//       if(temp === props.songs.length){
//         temp = 0
//       }

//       return temp;
//     });
//   } else {
//     props.setCurrentSongIndex(() => {
//       let temp = props.currentSongIndex;
//       temp--;
//       if (temp < 0) {
//         temp = props.songs.length - 1;
//       }
//       return temp;
//     });
//   }
// };