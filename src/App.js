import React, { Component } from 'react';

const App = () => (<Counter />)

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    console.log(this)
    // this.setState({ count: this.state.count + 1})
  }

  render() {
    console.log('rend')
    return (
      <React.Fragment>{this.state.count}
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={() => this.setState({ count: this.state.count - 1})}>-1</button>
      </React.Fragment>
    )
  }
}
export default App;
