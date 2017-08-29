react-debounce-iframe
---------------------

## Install

```
yarn add react-debounce-iframe
```

## Usage

```jsx
import Iframe from 'react-debounce-iframe';

class App extends Component {
  render() {
    <Iframe src={this.state.src} debounceWait={500}/>
  }
}
```