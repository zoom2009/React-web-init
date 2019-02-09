import React, { Component } from 'react'
import './App.scss'

export default class App extends Component {
  render() {
    let status = 'active' 
    // status = 'in-active'
    return (
      <div id="main-app">
        <p>Hello World, Good luck.</p>
          <p>This project have</p>
          <p>=> HOOK</p>
          <p>=> Mobx with Decorators</p>
          <p>=> .emmet</p>
          <p>=> sass</p>

          <button className={`mySwitch mySwitch-${status}`}>Button</button>
      </div>
    )
  }
}
