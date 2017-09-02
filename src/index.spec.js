/* global describe, it, expect */
import React from 'react';
import Iframe from './';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('<Iframe />', () => {
  it('should be an iframe', () => {
    const wrapper = shallow(<Iframe src="http://foo.com" />);
    expect(wrapper.type()).toEqual('iframe');
  });

  it('should be delayed to update the src', () => {
    const onDebounceStart = sinon.spy();
    const onDebounceEnd = sinon.spy();
    const wrapper = shallow(
      <Iframe
        src="http://foo.com/1"
        debounceWait={500}
        onDebounceStart={onDebounceStart}
        onDebounceEnd={onDebounceEnd}
      />
    );

    // The src of root node doesn't update immediately
    wrapper.setProps({ src: 'http://foo.com/2' });
    expect(onDebounceStart.calledOnce).toBeTruthy();
    expect(wrapper.prop('src')).toEqual('http://foo.com/1');
    setTimeout(() => {
      expect(onDebounceEnd.calledOnce).toBeTruthy();
      expect(wrapper.prop('src')).toEqual('http://foo.com/2');
    }, 1000);
  });
});
