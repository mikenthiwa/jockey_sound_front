import React from 'react';
import {Feed} from '../feed';


describe('Feed', () => {
  const spy = sinon.spy();

  const props = {
    isLoading: false,
    feedState: {data: {
      data:[{from: {}}, {users: {}}],
    }},
    feed: jest.fn(),
  };

  let component;

  component = mount(<Feed {...props}/>);


  it('should render feed component', () => {
    expect(component.find('.feed-cont').length).toEqual(1);
  });

  it('should call play audio', () => {
    const wrapper = mount(<Feed {...props} />);
    wrapper.instance().playAudio = jest.fn();
    wrapper.find('.play-pause-icon').simulate('click');
    expect(wrapper.instance().playAudio).toHaveBeenCalled();
  });

  it('componentDidMount',  () => {
    const wrapper = mount(<Feed {...props}/>);
    expect(wrapper.instance().props.feed).toHaveBeenCalled()
  });

});


