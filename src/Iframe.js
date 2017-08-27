import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Iframe extends Component {
  static displayName = 'Iframe';
  static propTypes = {
    src: PropTypes.string.isRequired,
    debounceWait: PropTypes.number
  };
  static defaultProps = {
    debounceWait: 0
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
      console.log(`Iframe - previous src has been cancelled.`);
    }
    this.timer = setTimeout(() => {
      console.log(`Iframe - ${src} is applied`);
      this.setState({src});
      this.timer = null;
    }, debounceWait);
  }
  render() {
    const otherProps = _.omit(this.props, ['debounceWait', 'src', 'title']);
    const { src } = this.state;

    return <iframe src={src} title={this.props.title} {...otherProps} />;
  }
}

export default Iframe;
