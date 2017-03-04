import React from 'react';
import HarmoniesIndexItem from './harmonies_index_item';
import {Howl, Howler} from 'howler';

const harmonies = {
  a: {
    name: "harp-1",
    audio: new Howl({
      src: ['harmonies/harp_1.wav'],
      preload: true
    })
  },
  b: {
    name: "harp-2",
    audio: new Howl({
      src: ['harmonies/harp_2.m4a'],
      preload: true
    })
  },
  c: {
    name: "harp-3",
    audio: new Howl({
      src: ['harmonies/harp_3.m4a'],
      preloaded: true
    })
  }
};

class HarmoniesIndex extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="harmonies-index">
        <div className="harmonies-row">
          {
            Object.keys(harmonies).map(id => harmonies[id]).map(harmony => (
              <HarmoniesIndexItem
                key={harmony.name}
                harmony={harmony} />
            ))
          }
        </div>
      </section>
    );
  }
}

export default HarmoniesIndex;
