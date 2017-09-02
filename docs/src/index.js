import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Iframe from 'react-debounce-iframe';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('1.html');
    this.state = {src: 'iframes/1.html'};
  }
  onClick(id) {
    if (id) {
      console.log(`${id}.html`);
      this.setState({src: `iframes/${id}.html`})
      return;
    }
  }
  render() {
    return (
      <div>
        <h1>react-debounce-iframe</h1>
        <p>Click buttons quickly. It only requests for the last one.</p>
        <button
          className="btn btn-primary btn-sm"
          onClick={this.onClick.bind(this, 1)}>
          1.html
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={this.onClick.bind(this, 2)}>
          2.html
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={this.onClick.bind(this, 3)}>
          3.html
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={this.onClick.bind(this, 4)}>
          4.html
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={this.onClick.bind(this, 5)}>
          5.html
        </button>
        <div>
          <Iframe src={this.state.src} debounceWait={500}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
