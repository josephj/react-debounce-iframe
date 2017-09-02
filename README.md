[ ![NPM Status for josephj/react-debounce-iframe](https://img.shields.io/npm/v/react-debounce-iframe.svg) ](https://www.npmjs.com/package/react-debounce-iframe)
[ ![Codeship Status for josephj/react-debounce-iframe](https://app.codeship.com/projects/f88856b0-71d9-0135-b489-0222a0494c20/status?branch=master) ](https://app.codeship.com/projects/243473)


react-debounce-iframe
---------------------
A react iframe component which allows you to reduce the src updating frequency.

In the following example, it will only issue requests to `1.html` and `5.html` ([Demo](https://josephj.github.io/react-debounce-iframe)).

```jsx
import Iframe from 'react-debounce-iframe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {src: '1.html'};
  }
  componentDidMount() {
    setTimeout(() => this.setState({src: '2.html'}), 300);
    setTimeout(() => this.setState({src: '3.html'}), 600);
    setTimeout(() => this.setState({src: '4.html'}), 900);
    setTimeout(() => this.setState({src: '5.html'}), 1200);
  }
  render() {
    return (
      <Iframe src={this.state.src} debounceWait={500}/> // Only issue requests to 1.html and 5.html.
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
