import React from 'react';
import{ NavBar } from '../index';

describe('NavBar', () => {

  let component;
  it('should render correctly', () => {
    component = mount(<NavBar />);
    expect(component).toHaveLength(1);
  });

  it('should find title of the project',  () => {
    component = mount(<NavBar/>);
    component.find(<span/>);
  });
});
