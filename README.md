# KeyJ

KeyJ gives puts the power of the DJ table into your computer keyboard!

[Live version](http://www.kylelewis.co/keyj/)

### Play Instructions

Choose from a library of drum and guitar loops to get the groove going, then use the keyboard to add a familiar and timeless melody over the top!

![alt text](https://raw.githubusercon`tent.com/bongatoughy/key-j/master/img/keyj_screenshot.png "Screenshot")

### Technologies

#### [React](https://facebook.github.io/react/)

React implementation of this application makes it easy to update sample libraries. Adding, removing, or changing samples is as simple as adjusting the source.

#### [Redux](http://redux.js.org/)

Redux allowed for easy implementation of the tempo feature. Each looped component (drums and guitar) has a slice of global state designated for the selected loop. The tempo component, which doubles as the player controls, gets passed those loops as props and adjusts the playback rate based on its tempo prop.

```javascript
playLoops() {
  this.stopLoops();
  if (objToArray(this.props.selectedDrum).length > 0) {
    this.props.selectedDrum.audio.rate(
      this.props.tempo / this.props.selectedDrum.bpm).play();
  }
  if (objToArray(this.props.selectedGuitar).length > 0) {
    this.props.selectedGuitar.audio.rate(
      this.props.tempo / this.props.selectedGuitar.bpm).play();
  }
}
```

### Musical Considerations

It was important to ensure that all samples would play at the same tempo and in the same key. To achieve this, all invocations of playSample had to have access to the tempo value in global state. Because the keyboard triggers the vocal samples, they are defined outside of React. By putting the tempo on the window each time the tempo component updates, vocal samples can use adjust their playback rate according to the set bpm.

![alt text](http://keyj.kylelewis.co/img/keyj_screenshot.gif "Screenshot")
