import React, { useEffect } from "react";
import { Player } from "./components/player";
import {
  music1,
  music2,
  music3,
  music4,
  // music5,
  music6,
  music7,
  music8,
  img1,
  img2,
  img3,
  img4,
  // img5,
  img6,
  img7,
  img8,
} from "./data";

export const PlayContext = React.createContext(null);
export const PlayContext2 = React.createContext(null);
function App() {
  const [change, setChange] = React.useState(false);
  const [next, setNext] = React.useState(false);

  const [songs] = React.useState([
    {
      title: "Darkside",
      artist: "Alan Walker",
      img_src: img1,
      src: music1,
    },

    {
      title: "Fly Away",
      artist: "Zight",
      img_src: img2,
      src: music2,
    },
    {
      title: "Everybody Keep Running",
      artist: "Zight",
      img_src: img3,
      src: music3,
    },
    {
      title: "Instrumental",
      artist: "By Khusravanna",
      img_src: img4,
      src: music4,
    },

    // {
    //   title: "Sad Song",
    //   artist: "We The Kings",
    //   img_src: img5,
    //   src:music5,
    // },

    {
      title: "Someone You Loved",
      artist: "Brittany Maggs",
      img_src: img6,
      src: music6,
    },
    {
      title: "Destiny",
      artist: "NEFFEX",
      img_src: img7,
      src: music7,
    },
    {
      title: "Cry",
      artist: "Ömer Bükülmezoğlu",
      img_src: img8,
      src: music8,
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = React.useState(0);
  const [nextSongIndex, setNextSongIndex] = React.useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);
  return (
    <div className="App">
      <PlayContext.Provider value={{ change, setChange }}>
        <PlayContext2.Provider value={{ next, setNext }}>
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
          />
        </PlayContext2.Provider>
      </PlayContext.Provider>
    </div>
  );
}

export default App;
