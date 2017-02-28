## Sample JS Project Proposal: Conway's Game of Life with Variations

### Background

Beatify is a javascript-powered beat maker. Choose from a library of drum loops to get the groove going, then use the user interface to add lovely harmonies on top!

### Functionality & MVP  

With Beatify, users can

- [ ] Select from a library of drum beats to start
- [ ] 'Play' a digital keyboard of harmony samples
BONUS:
- [ ] Record loops of harmonies to layer on top of an awesome track!

In addition, this project will include:

- [ ] Instructions about how to use the keyboard to play
- [ ] A production README

### Wireframes

The interface will be very simple and intuitive. It will essentially be a rectangular cut horizontally into three stacked sections.

The bottom section will contain the drum beats. One half will show the selected drum beat while they other will show the library of drum beats to select from.

The middle section will contain the 'keyboard' - boxes that can be clicked or controlled from the keyboard which when triggered play an audio sample.

The top section will contain the 'track' for users to record a loop and then layer over top of it.

![wireframes](https://github.com/bongatoughy/javascript_game/blob/master/wireframe.jpg)

### Architecture and Technologies

**NB**: one of the main things you should be researching and deciding upon while you write this proposal is what technologies you plan to use.  Identify and create a plan of attack for the major technical challenges in your project.

This project will be implemented with the following technologies:

- React Redux application
- Audio files will be locally and stored in global state with pojos of filenames.
- State will be divided into:
  1. drumBeats
    - subdivided into:
      1. allBeats
      2. selectedBeat
  2. harmonies
  3. userTracks

store.getState();
{
  drumBeats: {
    allBeats: {
      id: {
        audioObject: created with javascript Audio Class (var aud = new Audio('sound.ogg');),
        bpm: integer value to track loop length
      },
      id: {
        audioObject: created with javascript Audio Class (var aud = new Audio('sound.ogg');),
        bpm: integer value to track loop length
      }
    },
    selectedBeat: id
  },

  harmonies: {
    id: {
      audioObject: var aud = new Audio('sound.ogg');
    },
    id: {
      audioObject: var aud = new Audio('sound.ogg');
    }
  },

  track: {
    bpm: integer,
    keyStrokes: {
      id {
        time: integer,
        harmonyId: integer
      }
      id {
        time: integer,
        harmonyId: integer
      }
    }
  }


}

### Implementation Timeline

**Day 1**:
- Export all drum samples and organize folder structure
- Select, crop, and export all harmony samples and organize folder structure
- Implement redux and react infrastructure for drums and harmonies
- Start basic styling
- UI/UX controls for drum track

**Day 2**:
- Complete redux and react components and hierarchy for drums and harmonies
- Complete all styling
- By the end of day 2 I should have a functioning app. The only missing feature will be the recorded track which will probably be bonus.

**Day 3**:

- Hopefully move on to track recording
- Styling for track recording
- UI/UX controls for recording


**Day 4**:
- Finishing touches and additional data
