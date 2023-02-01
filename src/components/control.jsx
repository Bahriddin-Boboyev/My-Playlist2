import { faBackward, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { PlayContext } from '../App'
import { PlayContext2 } from '../App'


export const Control = (props) => {
  const {setChange} = React.useContext(PlayContext)
  const {setNext} = React.useContext(PlayContext2)


    const [check, setCheck] = React.useState(false);
    const [nextButton, setNextButton] = React.useState(false)

  React.useEffect(()=> {
    if(check){
      setChange(check)
    } else{
      setChange(check)
    }
  },[check])

  React.useEffect(()=> {
    if(check){
     setNext(nextButton)
    } else{
      setNext(nextButton)
    }
  },[nextButton])

  return (
    <div className='control'>
      <button className='control__skip-button' onClick={()=> (props.skipSong(false), setNextButton(!nextButton))}>
        <FontAwesomeIcon icon = {faBackward } />
      </button>
      <button className='control__play-button' onClick={()=> (props.setIsPlaying(!props.isPlaying), setCheck(!check))}>
      <FontAwesomeIcon icon = {props.isPlaying ? faPause : faPlay } />
      </button>
      <button className='control__skip-button' onClick={()=>  (props.skipSong(), setNextButton(!nextButton))}>
      <FontAwesomeIcon icon = {faForward } />
      </button>

    </div>
  )
}
