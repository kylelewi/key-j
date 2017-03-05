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
    <TempoContainer />
    <DrumIndexContainer />
    <GuitarIndexContainer />
    <RecordTrack />
    <HarmoniesIndex />

  </div>
);

export default App;
