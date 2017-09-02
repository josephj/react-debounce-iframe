import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Iframe extends Component {
  static displayName = 'Iframe';
  static propTypes = {
    src: PropTypes.string.isRequired,
    debounceWait: PropTypes.number,
    onDebounceStart: PropTypes.func,
    onDebounceEnd: PropTypes.func
  };
  static defaultProps = {
    debounceWait: 0,
    onDebounceStart: () => {},
    onDebounceEnd: () => {}
  };
  constructor(props) {
    super(props);

    this.timer = null;
    this.state = {
      src: props.src
    };
  }
  componentWillReceiveProps(nextProps) {
    const { src, debounceWait } = nextProps;

    // Not debounce at all
    if (!debounceWait) {
      this.setState({ src });
      return;
    }

    // Delay to change
    if (this.timer) {
      clearTimeout(this.timer);
    } else {
      this.props.onDebounceStart();
    }
    this.timer = setTimeout(() => {
      this.setState({ src });
      this.timer = null;
      this.props.onDebounceEnd(src);
    }, debounceWait);
  }
  render() {
    const { debounceWait, src, title, onDebounceStart, onDebounceEnd, ...otherProps } = this.props; // eslint-disable-line

    return <iframe src={this.state.src} title={title} {...otherProps} />;
  }
}

export default Iframe;
