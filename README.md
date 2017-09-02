react-debounce-iframe
---------------------
An iframe control which allows you to debounce the updating of src property.

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
    <Iframe src={this.state.src} debounceWait={500}/>
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
