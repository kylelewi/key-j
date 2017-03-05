const vocals = [
  new Howl({src: ['melodies/billie_1.wav']}),
  new Howl({src: ['melodies/billie_2.wav']}),
  new Howl({src: ['melodies/billie_3.wav']}),
  new Howl({src: ['melodies/billie_4.wav']}),
  new Howl({src: ['melodies/billie_5.wav']}),
  new Howl({src: ['melodies/billie_6.wav']}),
  new Howl({src: ['melodies/billie_7.wav']}),
  new Howl({src: ['melodies/billie_8.wav']}),
  new Howl({src: ['melodies/billie_9.wav']}),
  new Howl({src: ['melodies/billie_10.wav']}),
  new Howl({src: ['melodies/rock_1.wav']}),
  new Howl({src: ['melodies/rock_2.wav']}),
  new Howl({src: ['melodies/rock_3.wav']}),
  new Howl({src: ['melodies/rock_4.wav']}),
  new Howl({src: ['melodies/rock_5.wav']}),
  new Howl({src: ['melodies/rock_6.wav']}),
  new Howl({src: ['melodies/rock_7.wav']}),
  new Howl({src: ['melodies/rock_8.wav']}),
  new Howl({src: ['melodies/rock_9.wav']}),
  new Howl({src: ['melodies/rock_10.wav']}),
  new Howl({src: ['melodies/rock_11.wav']}),
  new Howl({src: ['melodies/rock_12.wav']}),
  new Howl({src: ['melodies/rock_13.wav']}),
  new Howl({src: ['melodies/rock_14.wav']}),
  new Howl({src: ['melodies/rock_15.wav']}),
  new Howl({src: ['melodies/rock_16.wav']}),
  new Howl({src: ['melodies/rock_17.wav']}),
  new Howl({src: ['melodies/rock_18.wav']}),
  new Howl({src: ['melodies/rock_19.wav']}),
  new Howl({src: ['melodies/rock_20.wav']}),
];

const keys = [
  "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
  "a", "s", "d", "f", "g", "h", "j", "k", "l", ";",
  'z', 'x', 'c', 'v', 'b', 'n', 'm'
];

document.addEventListener("DOMContentLoaded", () => {
  let audio;

  document.addEventListener("keydown", event => {
    if (audio) {
      audio.pause();
    }
    for (var i = 0; i < keys.length; i++) {
      if (event.key === keys[i]) {
        audio = vocals[i];
        playSample(audio);
      }
    }
  });
});

const playSample = (audio) => {
  audio.stop().rate(window.tempo / 117).play();
};
