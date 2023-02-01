import React, { useContext } from "react";
import { PlayContext, PlayContext2 } from "../App";


export const Details = (props) => {
  
let {change} = useContext(PlayContext)
let {next} = useContext(PlayContext2)

  return (
    <>
      { next ?     <div className='details'>
      <div className='details__img'>
        { change ?  <img className='img' src={props.song.img_src} alt="img" />
        : <img src={props.song.img_src} alt="img" /> 
        }
      </div>
      <h3 className='details__title'>{props.song.title}</h3>
      <h3 className='details__artist'>{props.song.artist}</h3>
  </div> 

    : <div className='details'>
    <div className='details__img'>
      { change ?  <img className='img2' src={props.song.img_src} alt="img" />
      : <img src={props.song.img_src} alt="img" /> 
      }
    </div>
    <h3 className='details__title'>{props.song.title}</h3>
    <h3 className='details__artist'>{props.song.artist}</h3>
</div>
  }
    </>
  )
}
