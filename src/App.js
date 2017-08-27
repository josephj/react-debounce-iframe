import React, { Component } from 'react';
import Iframe from './Iframe';

class App extends Component {
  constructor(props) {
    super(props);
    this.count = 1;
    this.state = {
      src: 'demo.html?r=1'
    }
  }
  handleClick = () => {
    let count = 0;
    let timer = setInterval(() => {
      count += 1;
      this.count += 1;
      const src = `demo.html?r=${this.count}`;
      this.setState({src});
      if (count >= 5) {
        clearInterval(timer);
        timer = null;
      }
    }, 300);
  }
  render() {
    const {src} = this.state;
    console.log(new Date().getTime(), src);
    return (
      <div className="App">
        <Iframe src={`${src}`} title="I love iframe" debounceWait={500} />
        <br/>
        <button onClick={this.handleClick}>Click 5 times quickly</button>
      </div>
    );
  }
}

export default App;
