import React from 'react';
import {Provider} from 'react-redux';
import HomeComponent from '../home';
import configureStore from 'redux-mock-store';

describe('Home', () => {
  const initialState = {
    modal: {
      modalType: 'SIGN_UP_MODAL',
      isOpen: true
    },

  };

  const props = {
    signUpState: {
      isLoading: false,
      data:{},
      error:{},
      isAuthenticated: false,
      openModal: jest.fn('SIGN_UP_MODAL')
    }
  };

  let component;
  let store;

  beforeEach(() => {
    const mockStore = configureStore();
    store = mockStore(initialState);
    component = mount(
      <Provider store={store}>
        <HomeComponent {...props}/>
      </Provider>
    );

  });

  it('should render homepage', () => {
    expect(component.find('.nav-logo').length).toEqual(1);
  });

  it('should change modal.isOpen to true when clicked', () => {
    const signUpButton = component.find('.sign-up');
    signUpButton.simulate('click');
    expect(component.state().store.getState().modal.isOpen).toEqual(true);
  });

  it('should ', function () {
    
  });

});
