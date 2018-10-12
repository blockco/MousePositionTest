import React, {Component} from 'react';
import ReactCursorPosition, {INTERACTIONS} from 'react-cursor-position';
import './App.css';
import PositionLabel from './touchableComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'red',
    }
  }

  testin(e) {
    let color = 'violet'
    if (e.position.x < 100) {
      color = 'indigo'
    }
    if (e.position.x < 200 && e.position.x > 100) {
      color = 'blue'
    }
    if (e.position.x < 300 && e.position.x > 200) {
      color = 'green'
    }
    if (e.position.x < 400 && e.position.x > 300) {
      color = 'yellow'
    }
    if (e.position.x < 500 && e.position.x > 400) {
      color = 'orange'
    }
    if (e.position.x < 600 && e.position.x > 500) {
      color = 'red'
    }
    console.log(color, e.position.x)
    this.setState({
      backgroundColor: color
    })
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <ReactCursorPosition
          onPositionChanged={this.testin.bind(this)}
          activationInteractionMouse={INTERACTIONS.HOVER} //default
          hoverDelayInMs={0} //default: 0
          hoverOffDelayInMs={0} //default: 0
        >
          <PositionLabel
            backgroundColor={this.state.backgroundColor}
          />
        </ReactCursorPosition>
      </div>
    );
  }
}

export default App;
