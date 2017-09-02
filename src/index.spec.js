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

  it('should issue all requests when debounceWait is not specified', () => {
    const onDebounceStart = sinon.spy();
    const onDebounceEnd = sinon.spy();

    const wrapper = shallow(<Iframe src="1.html" onDebounceStart={onDebounceStart} onDebounceEnd={onDebounceEnd} />);
    expect(wrapper.prop('src')).toEqual('1.html');

    wrapper.setProps({ src: '2.html' });
    expect(wrapper.prop('src')).toEqual('2.html');

    wrapper.setProps({ src: '3.html' });
    expect(wrapper.prop('src')).toEqual('3.html');

    wrapper.setProps({ src: '4.html' });
    expect(wrapper.prop('src')).toEqual('4.html');

    wrapper.setProps({ src: '5.html' });
    expect(wrapper.prop('src')).toEqual('5.html');

    expect(onDebounceStart.called).toBeFalsy();
    expect(onDebounceEnd.called).toBeFalsy();
  });

  it('should be delayed to update the src #1', done => {
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
      done();
    }, 1000);
  });

  it('should be delayed to update the src #2', done => {
    const onDebounceEnd = sinon.spy(() => {
      expect(wrapper.prop('src')).toEqual('10.html');
      done();
    });

    const wrapper = shallow(<Iframe src="1.html" debounceWait={500} onDebounceEnd={onDebounceEnd} />);

    setTimeout(() => wrapper.setProps({ src: '2.html' }, 200));
    setTimeout(() => wrapper.setProps({ src: '3.html' }, 300));
    setTimeout(() => wrapper.setProps({ src: '4.html' }, 400));
    setTimeout(() => wrapper.setProps({ src: '5.html' }, 500));
    setTimeout(() => wrapper.setProps({ src: '6.html' }, 600));
    setTimeout(() => wrapper.setProps({ src: '7.html' }, 700));
    setTimeout(() => wrapper.setProps({ src: '8.html' }, 800));
    setTimeout(() => wrapper.setProps({ src: '9.html' }, 900));
    setTimeout(() => wrapper.setProps({ src: '10.html' }, 1000));
  });
});
