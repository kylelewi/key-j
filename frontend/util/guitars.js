import {Howl, Howler} from 'howler';


const Guitars = {
  "1": {
    name: "Crystal Ball",
    audio: new Howl({
      src: ['../../guitars/crystal_ball.m4a'],
      loop: true
    }),
    bpm: 117
  },
  "2": {
    name: "Disco Flash",
    audio: new Howl({
      src: ['../../guitars/disco_flash.m4a'],
      loop: true
    }),
    bpm: 117
  },
  "3": {
    name: "Inferno Disco",
    audio: new Howl({
      src: ['../../guitars/inferno_disco.m4a'],
      loop: true
    }),
    bpm: 117
  },
  "4": {
    name: "Northern Hills",
    audio: new Howl({
      src: ['../../guitars/northern_hills.m4a'],
      loop: true
    }),
    bpm: 117
  },
  "5": {
    name: "Ready To Go",
    audio: new Howl({
      src: ['../../guitars/ready_to_go.m4a'],
      loop: true
    }),
    bpm: 117
  },
  "6": {
    name: "Right Angle",
    audio: new Howl({
      src: ['../../guitars/right_angle.m4a'],
      loop: true
    }),
    bpm: 117
  },
  "7": {
    name: "Transporter",
    audio: new Howl({
      src: ['../../guitars/transporter.m4a'],
      loop: true
    }),
    bpm: 117
  },
  "8": {
    name: "Windmill",
    audio: new Howl({
      src: ['../../guitars/windmill.m4a'],
      loop: true
    }),
    bpm: 117
  }
};

export default Guitars;
