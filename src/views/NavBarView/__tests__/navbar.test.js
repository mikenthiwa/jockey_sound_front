import React from 'react';
import configureStore from 'redux-mock-store';
import NavbarComponent, { NavBar } from '../index';


describe('NavBar', () => {

  const props = {
    openModal: jest.fn(),
    isAuthenticated: {}
  };

  const mockStore = configureStore();
  let component;
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore();
    wrapper = mount(<NavbarComponent store ={store} />);
  });

  it('should render correctly', () => {
    component = mount(<NavBar />);
    expect(component).toHaveLength(1);
  });

  it('should find title of the project',  () => {
    component = mount(<NavBar/>);
    component.find(<span/>);
  });

});
