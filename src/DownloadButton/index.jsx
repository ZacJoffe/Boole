import React, { Component } from "react";

import "./styles.css";

export default class KeyBindings extends Component {
  render() {
    return (
      <select value={this.props.binding}>
        <option value="">Normal</option>
        <option value="vim">Vim</option>
        <option value="emacs">Emacs</option>
      </select>
    );
  }
}

