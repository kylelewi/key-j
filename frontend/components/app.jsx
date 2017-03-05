import React from 'react';
import Header from './header';
import TempoContainer from './tempo/tempo_container';
import BeatsIndexContainer from './beats_index_container';
import RecordTrack from './record_track';
import HarmoniesIndex from './harmonies_index';

const App = ({ children }) => (
  <div>
    <Header />
    <TempoContainer />
    <BeatsIndexContainer />
    <RecordTrack />
    <HarmoniesIndex />

  </div>
);

export default App;
