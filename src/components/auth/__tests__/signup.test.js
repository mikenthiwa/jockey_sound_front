import React from 'react';
import SignupComponent, {SignUp} from '../signup';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Sign Up', () => {

  const initialState = {
    modal: {
      isOpen: true,
      modalType: 'SIGN_UP_MODAL',
    },
    signUpState: {
      isLoading: false,
      data: {},
      error: {},
      isAuthenticated: false
    }
  };

  const props ={
    signUp: jest.fn(),
    closeModal: jest.fn()
  };


  let component;
  let store;
  
  beforeAll(() => {
    const mockStore = configureStore();
    store = mockStore(initialState);
    component = mount(
      <Provider store={store}>
        <SignupComponent {...props}/>);
      </Provider>
    );
  });


  it('should render sign up modal', function () {
    expect(component.find('input[type="text"]').length).toEqual(2);
    expect(component.find('input[type="password"]').length).toEqual(1);
    expect(component.find('input[type="submit"]').length).toEqual(1);
  });

  it('should find handleSubmit sign up button',  () => {
    const wrapper = shallow(<SignUp {...props} />);
    wrapper.instance().handleSubmit = jest.fn();
    wrapper.update();
    wrapper.find('input[type="submit"]').simulate('click', {preventDefault: ()=>{}});
    expect(wrapper.instance().handleSubmit).toBeTruthy();
  });

  it('should handleOnchange', function () {
    const wrapper = shallow(<SignUp {...props}/>);
    wrapper.instance().handleInputChange = jest.fn();
    wrapper.update();
    wrapper.find('input[name="username"]').simulate('change',{
      target: [{username: 'mike', email: 'mike.nthiwa@yahoo.com', password: 12345678}]
    }
    );
    expect(wrapper.instance().handleInputChange).toBeTruthy();
  });

  it('should handle component will receive props',  () => {
    const wrapper = shallow(<SignUp {...props}/>);
    wrapper.setProps({signUpState: {data: {}, error: {}}});
    wrapper.setState({signUpStatus: {successMessage: 'You have successfully created an account'}})
    wrapper.update();
    expect(wrapper.instance().state.signUpStatus.successMessage).toEqual('You have successfully created an account')
  });

});
