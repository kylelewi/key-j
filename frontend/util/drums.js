import {Howl, Howler} from 'howler';


const Drums = {
  "1": {
    name: "80s Back Beat",
    audio: new Howl({
      src: ['../../drums/80s_back_beat_100.wav'],
      loop: true
    }),
    bpm: 100
  },
  "2": {
    name: "Alive and Kicking Beat",
    audio: new Howl({
      src: ['../../drums/alive_and_kicking_120.wav'],
      loop: true
    }),
    bpm: 120
  },
  "3": {
    name: "Aurora Beat",
    audio: new Howl({
      src: ['../../drums/aurora_beat_90.wav'],
      loop: true
    }),
    bpm: 90
  },
  "4": {
    name: "Big Drop Beat",
    audio: new Howl({
      src: ['../../drums/big_drop_beat_125.wav'],
      loop: true
    }),
    bpm: 125
  },
  "5": {
    name: "Bit Divisoin Beat",
    audio: new Howl({
      src: ['../../drums/bit_division_100.wav'],
      loop: true
    }),
    bpm: 100
  },
  "6": {
    name: "Boiling Point Beat",
    audio: new Howl({
      src: ['../../drums/boiling_point_110.wav'],
      loop: true
    }),
    bpm: 110
  },
  "7": {
    name: "Bongo Classic Beat",
    audio: new Howl({
      src: ['../../drums/bongo_classic_110.wav'],
      loop: true
    }),
    bpm: 110
  },
  "8": {
    name: "Bottled Up Beat",
    audio: new Howl({
      src: ['../../drums/bottled_up_115.wav'],
      loop: true
    }),
    bpm: 115
  },
  "9": {
    name: "Bounce Break Beat",
    audio: new Howl({
      src: ['../../drums/bounce_break_92.wav'],
      loop: true
    }),
    bpm: 92
  },
  "10": {
    name: "Brawler Tech Beat",
    audio: new Howl({
      src: ['../../drums/brawler_tech_100.wav'],
      loop: true
    }),
    bpm: 100
  },
  "11": {
    name: "City Nights",
    audio: new Howl({
      src: ['../../drums/city_nights_97.wav'],
      loop: true
    }),
    bpm: 97
  },
  "12": {
    name: "Disco Guitar",
    audio: new Howl({
      src: ['../../harmonies/guitar/disco_guitar_115.m4a'],
      loop: true
    }),
    bpm: 115
  }
};

export default Drums;
