react-debounce-iframe
---------------------
A react iframe component which allows you to reduce the src updating frequency.

In the following example, it will only issue requests to `1.html` and `10.html`.

```jsx
import Iframe from 'react-debounce-iframe';

class App extends Component {
  constructor(props) {
    this.state = {src: '1.html'};
  }
  componentDidMount() {
    setTimeout(() => this.setState({src: '2.html'}), 200);
    setTimeout(() => this.setState({src: '3.html'}), 300);
    setTimeout(() => this.setState({src: '4.html'}), 400);
    setTimeout(() => this.setState({src: '5.html'}), 500);
    setTimeout(() => this.setState({src: '6.html'}), 600);
    setTimeout(() => this.setState({src: '7.html'}), 700);
    setTimeout(() => this.setState({src: '8.html'}), 800);
    setTimeout(() => this.setState({src: '9.html'}), 900);
    setTimeout(() => this.setState({src: '10.html'}), 1000);
  }
  render() {
    return (
      <Iframe src={this.state.src} debounceWait={500}/> // Only issue requests to 1.html and 10.html.
    );
  }
}
```


## Install

NPM
```
npm install --save react-debounce-iframe
```

Yarn
```
yarn add react-debounce-iframe
```

## Usage

```jsx
import Iframe from 'react-debounce-iframe';

class App extends Component {
  render() {
    <Iframe
      src={this.state.src}
      debounceWait={500} // Debouncing wait in milliseconds
      onDebounceStart={() => {/* Useful if you want to start a loading indicator */}}
      onDebounceEnd={() => {/* Useful if you want to stop a loading indicator */}} />
  }
}
```

## Properties

| Property        | Type    | Default     | Description                       |
|:---             |:---     |:---         |:---                               |
| src             | string  | undefined   | iframe src                        |
| debounceWait    | number  | 0           | Debouncing time in millionseconds |
| onDebounceStart | func    | undefined   | Triggered when debouncing starts  |
| onDebounceEnd   | func    | undefined   | Triggered when debouncing stops   |
