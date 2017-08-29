import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Iframe extends Component {
  static displayName = 'Iframe';
  static propTypes = {
    src: PropTypes.string.isRequired,
    debounceWait: PropTypes.number,
    onDebounceStart: PropTypes.func,
    onDebounceEnd: PropTypes.func,
  };
  static defaultProps = {
    debounceWait: 0,
    onDebounceStart: _.noop(),
    onDebounceEnd: _.noop()
  };
  constructor(props) {
    super(props);

    this.timer = null;
    this.state = {
      src: props.src
    }
  }
  componentWillReceiveProps(nextProps) {
    const {src, debounceWait} = nextProps;

    // Not debounce at all
    if (!debounceWait) {
      this.setState({src});
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      return;
    }

    // Delay to change
    if (this.timer) {
      clearTimeout(this.timer);
    } else {
      this.props.onDebounceStart();
    }
    this.timer = setTimeout(() => {
      this.setState({src});
      this.timer = null;
      this.props.onDebounceEnd(src);
    }, debounceWait);
  }
  render() {
    const otherProps = _.omit(this.props, ['debounceWait', 'src', 'title']);
    const { src } = this.state;

    return <iframe src={src} title={this.props.title} {...otherProps} />;
  }
}

export default Iframe;
