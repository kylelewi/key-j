import React from 'react';
import Header from './header';
import TempoContainer from './tempo/tempo_container';
import DrumIndexContainer from './drum_index_container';
import GuitarIndexContainer from './guitar_index_container';
import RecordTrack from './record_track';
import HarmoniesIndex from './harmonies_index';

const App = ({ children }) => (
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

export default App;
