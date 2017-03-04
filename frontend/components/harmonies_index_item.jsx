import React from 'react';

class HarmoniesIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <figure
        className="harmony-index-item"
        onClick={() => this.props.harmony.audio.play()} >
      </figure>
    );
  }
}

export default HarmoniesIndexItem;
