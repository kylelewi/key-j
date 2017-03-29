import React from 'react';
import Header from './header';
import TempoContainer from './tempo/tempo_container';
import DrumIndexContainer from './drum_index_container';
import GuitarIndexContainer from './guitar_index_container';
import { vocals, keys } from '../util/vocals';

let audio;

class App extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  handleKeydown() {
    if (audio) {
      audio.pause();
    }
    for (var i = 0; i < keys.length; i++) {
      if (event.key === keys[i]) {
        audio = vocals[i];
        audio.stop().rate(window.tempo / 117).play();
      }
    }
  }


  render() {
    return (
      <div>
        <Header />
        <main className="content">
          <p>Select a drum beat, select a guitar, adjust the tempo, press play, press keyboard keys</p>
          <TempoContainer />
          <DrumIndexContainer />
          <GuitarIndexContainer />
        </main>
      </div>
    );
  }
}

export default App;
