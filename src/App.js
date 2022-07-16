import './App.scss';
import { useState,useEffect } from 'react';

function App() {

  const [drumDisplay , setDrumDisplay] = useState("Display Here")

  //function for tracking user input key 
  useEffect( () => {
    document.addEventListener('keydown' , (event) => {
      playSound(event.key.toUpperCase())
    })
  },[])

  //Drum machine array
  const drumArr = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

  // function for playing sound take (audio element id as augument)
  const playSound = (audioKeyTrigger) => {
    const audio = document.getElementById(audioKeyTrigger)
    audio.play()
    setDrumDisplay(drumArr.map((object) => { 
      if(object.keyTrigger === audioKeyTrigger){
        return object.id
      }
    })
    )
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div id="drum-machine">
        Drum Machine
        <div id="display">
            {drumDisplay}
        </div>
        <div className='key-pad'>
          {drumArr.map((element) => {
            return <button className='drum-pad' id={element.id} onClick={() => {
              playSound(element.keyTrigger)
            }}>
              {element.keyTrigger}
              <audio className='clip' id={element.keyTrigger} src={element.src}></audio>
            </button>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
