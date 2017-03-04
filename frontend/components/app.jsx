import React from 'react';
import Header from './header';
import BeatsIndex from './beats_index';
import RecordTrack from './record_track';
import HarmoniesIndex from './harmonies_index';

const App = ({ children }) => (
  <div>
    <Header />
    <RecordTrack />
    <HarmoniesIndex />
    <BeatsIndex />

  </div>
);

export default App;
