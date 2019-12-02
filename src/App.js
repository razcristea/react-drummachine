import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    
    this.handleClick = this.handleClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
  }
  
  handleClick(event, sound) {  
    document.getElementById("display").innerText = event.target.id;
    const soundClip = document.getElementById(event.target.innerText);
    soundClip.currentTime = 0;
    soundClip.play(); 
  }
  
  componentDidMount(){
    document.addEventListener("keydown", (e)=>{
      const letters = ['q','w','e','a','s','d','z','x','c']
      let keyPressed = e.key.toLowerCase()
      let nameOfKey = drumm[letters.indexOf(keyPressed)]['name']
      if (letters.includes(keyPressed)) {
        document.getElementById("display").innerText = nameOfKey
        document.getElementById(nameOfKey).classList.add("pressed")
        const soundClip = document.getElementById(keyPressed.toUpperCase())
        soundClip.currentTime = 0;
        soundClip.play();
      }
    })
    // Later edit: added 'pressed' class on keydown & added keyup to remove it
    document.addEventListener("keyup", (e)=>{
      const letters = ['q','w','e','a','s','d','z','x','c']
      let keyPressed = e.key.toLowerCase()
      let nameOfKey = drumm[letters.indexOf(keyPressed)]['name']
      if (letters.includes(keyPressed)) {
        document.getElementById(nameOfKey).classList.remove('pressed')
      }
    })
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown")
    document.removeEventListener("keyup")
  }
  
  
//had to implement it like that because drumm.map() just wouldn't work :( 
  render() {
    return (
      <div id="drum-machine">
        <div id="display" />
        <div className="drum-pad" onClick={this.handleClick} id={drumm[0]["name"]}>
          <audio className="clip" src={drumm[0]["url"]} id={drumm[0]["id"]} />
          {drumm[0]["id"]}
        </div>
        <div className="drum-pad" onClick={this.handleClick} id={drumm[1]["name"]}>
          <audio className="clip" src={drumm[1]["url"]} id={drumm[1]["id"]} />
          {drumm[1]["id"]}
        </div>
        <div className="drum-pad" onClick={this.handleClick} id={drumm[2]["name"]}>
          <audio className="clip" src={drumm[2]["url"]} id={drumm[2]["id"]} />
          {drumm[2]["id"]}
        </div>
        <div className="drum-pad" onClick={this.handleClick} id={drumm[3]["name"]}>
          <audio className="clip" src={drumm[3]["url"]} id={drumm[3]["id"]} />
          {drumm[3]["id"]}
        </div>
        <div className="drum-pad" onClick={this.handleClick} id={drumm[4]["name"]}>
          <audio className="clip" src={drumm[4]["url"]} id={drumm[4]["id"]} />
          {drumm[4]["id"]}
        </div>
        <div className="drum-pad" onClick={this.handleClick} id={drumm[5]["name"]}>
          <audio className="clip" src={drumm[5]["url"]} id={drumm[5]["id"]} />
          {drumm[5]["id"]}
        </div>
        <div className="drum-pad" onClick={this.handleClick} id={drumm[6]["name"]}>
          <audio className="clip" src={drumm[6]["url"]} id={drumm[6]["id"]} />
          {drumm[6]["id"]}
        </div>
        <div className="drum-pad" onClick={this.handleClick} id={drumm[7]["name"]}>
          <audio className="clip" src={drumm[7]["url"]} id={drumm[7]["id"]} />
          {drumm[7]["id"]}
        </div>
        <div className="drum-pad" onClick={this.handleClick} id={drumm[8]["name"]}>
          <audio className="clip" src={drumm[8]["url"]} id={drumm[8]["id"]} />
          {drumm[8]["id"]}
        </div>
      </div>
    );
  }
}

    const drumm = [
      {
        id: "Q",
        name: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      },
      {
        id: "W",
        name: "Chord",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
      },
      {
        id: "E",
        name: "Shaker",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
      },
      {
        id: "A",
        name: "Snare",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
      },
      {
        id: "S",
        name: "Side-Stick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
      },
      {
        id: "D",
        name: "Heater",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      },
      {
        id: "Z",
        name: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      },
      {
        id: "X",
        name: "Kick'n'Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      },
      {
        id: "C",
        name: "Punchy Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
      }
    ];



export default App;
