//
// document.addEventListener("DOMContentLoaded", () => {
//   const harmonies = new Audio('harmonies/harp_1.m4a');
//   harmonies.preload = 'auto';
//   const harmonies2 = new Audio('harmonies/harp_2.m4a');
//   const harmonies3 = new Audio('harmonies/harp_3.m4a');
//   const harmonies4 = new Audio('harmonies/strings_1.m4a');
//   const harmonies5 = new Audio('harmonies/flute_2.m4a');
//   const harmonies6 = new Audio('harmonies/flute_3.m4a');
//   const harmonies7 = new Audio('harmonies/flute_4.m4a');
//   const harmonies8 = new Audio('harmonies/strings_5.m4a');
//   const harmonies9 = new Audio('harmonies/strings_6.m4a');
//   const harmonies10 = new Audio('harmonies/strings_7.m4a');
//   const harmonies11 = new Audio('harmonies/strings_8.m4a');
//   const harmonies12 = new Audio('harmonies/strings_9.m4a');
//   const harmonies13 = new Audio('harmonies/mj.m4a');
//   const harmonies14 = new Audio('harmonies/doowah_1.m4a');
//   const harmonies15 = new Audio('harmonies/doowah_2.m4a');
//   const harmonies16 = new Audio('harmonies/doowah_3.m4a');
//   const harmonies17 = new Audio('harmonies/doowah_4.m4a');
//   const harmonies18 = new Audio('harmonies/doowah_5.m4a');
//
//   document.addEventListener("keydown", (event) => {
//     if (event.keyCode === 65) {
//       playSample(harmonies);
//     } else if (event.keyCode === 83) {
//       playSample(harmonies2);
//     } else if (event.keyCode === 68) {
//       playSample(harmonies3);
//     } else if (event.keyCode === 70) {
//       playSample(harmonies4);
//     } else if (event.keyCode === 71) {
//       playSample(harmonies5);
//     } else if (event.keyCode === 72) {
//       playSample(harmonies6);
//     } else if (event.keyCode === 74) {
//       playSample(harmonies7);
//     } else if (event.keyCode === 76) {
//       playSample(harmonies8);
//     } else if (event.keyCode === 75) {
//       playSample(harmonies9);
//     } else if (event.keyCode === 186) {
//       playSample(harmonies10);
//     } else if (event.keyCode === 77) {
//       playSample(harmonies11);
//     } else if (event.keyCode === 78) {
//       playSample(harmonies12);
//     } else if (event.keyCode === 89) {
//       playSample(harmonies13);
//     } else if (event.keyCode === 81) {
//       playSample(harmonies14);
//     } else if (event.keyCode === 87) {
//       playSample(harmonies15);
//     } else if (event.keyCode === 69) {
//       playSample(harmonies16);
//     } else if (event.keyCode === 84) {
//       playSample(harmonies17);
//     } else if (event.keyCode === 82) {
//       playSample(harmonies18);
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  let audio;

  document.addEventListener("keydown", (event) => {
    if (audio) {
      audio.pause();
    }
    let files = mjFileNames();
    let keys = keyCodes();
    for (var i = 0; i < 21; i++) {
      if (event.keyCode === keys[i]) {
        audio = new Audio(files[i]);
        playSample(audio);
      }
    }
  });

});


const fileNames = () => {
  let files = [];
  for (var i = 1; i < 30; i++) {
    files.push(`harmonies/quartet/quartet_${i}.m4a`);
  }
  return files;
};

const mjFileNames = () => {
  let files = [];
  for (var i = 1; i < 21; i++) {
    files.push(`melodies/mj_${i}.m4a`);
  }
  return files;
};

const keyCodes = () => {
  let top = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80];
  let middle = [65, 83, 68, 70, 71, 72, 74, 75, 76, 186];
  let bottom = [90, 88, 67, 86, 66, 78, 77, 188, 190];
  return top.concat(middle).concat(bottom);
};

const keyboard = () => {
  let keys = [  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
                'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';',
                'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.' ];

};


const playSample = (audio) => {
  audio.currentTime = 0;
  // audio.playbackRate = 0.9;
  audio.play();
};
