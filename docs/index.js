import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Iframe from 'react-debounce-iframe';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('1.html');
    this.state = {src: 'iframes/1.html'};
  }
  onClick() {
    setTimeout(() => {
      console.log('2.html');
      this.setState({src: 'iframes/2.html'})
    }, 300);
    setTimeout(() => {
      console.log('3.html');
      this.setState({src: 'iframes/3.html'})
    }, 600);
    setTimeout(() => {
      console.log('4.html');
      this.setState({src: 'iframes/4.html'})
    }, 900);
    setTimeout(() => {
      console.log('5.html');
      this.setState({src: 'iframes/5.html'})
    }, 1200);
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick.bind(this)}>Update src to 2.html -&gt; 3.html -&gt; 4.html -&gt; 5.html </button>
        <div>
          <Iframe src={this.state.src} debounceWait={500}/>
        </div>
      </div>
    );
  }
}

const rootEl = document.createElement('div');
document.body.appendChild(rootEl);
ReactDOM.render(<App/>, rootEl);
