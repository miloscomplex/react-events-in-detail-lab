// Code DelayedButton Component Here
// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class DelayButton extends Component {

  buttonEvent = (event) => {
    event.persist()
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay )
  }

  render() {
    return <button onClick={this.buttonEvent}>button</button>
  }
}
