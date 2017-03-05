import {Howl, Howler} from 'howler';


const Guitars = {
  "1": {
    name: "Crystal Ball",
    audio: new Howl({
      src: ['../../guitars/crystal_ball.wav'],
      loop: true
    }),
    bpm: 117
  },
  "2": {
    name: "Disco Flash",
    audio: new Howl({
      src: ['../../guitars/disco_flash.wav'],
      loop: true
    }),
    bpm: 117
  },
  "3": {
    name: "Inferno Disco",
    audio: new Howl({
      src: ['../../guitars/inferno_disco.wav'],
      loop: true
    }),
    bpm: 117
  },
  "4": {
    name: "Northern Hills",
    audio: new Howl({
      src: ['../../guitars/northern_hills.wav'],
      loop: true
    }),
    bpm: 117
  },
  "5": {
    name: "Ready To Go",
    audio: new Howl({
      src: ['../../guitars/ready_to_go.wav'],
      loop: true
    }),
    bpm: 117
  },
  "6": {
    name: "Right Angle",
    audio: new Howl({
      src: ['../../guitars/right_angle.wav'],
      loop: true
    }),
    bpm: 117
  },
  "7": {
    name: "Transporter",
    audio: new Howl({
      src: ['../../guitars/transporter.wav'],
      loop: true
    }),
    bpm: 117
  },
  "8": {
    name: "Windmill",
    audio: new Howl({
      src: ['../../guitars/windmill.wav'],
      loop: true
    }),
    bpm: 117
  }
};

export default Guitars;
