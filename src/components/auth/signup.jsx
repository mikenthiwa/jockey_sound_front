import React, { Component } from 'react';
import { connect } from "react-redux";
import ModalView from '../../views/modalView/modalView';
import { signUp } from "../../redux/actions/signUpAction";
import {closeModal } from "../../redux/actions/modalAction";
import './signup.scss';
import 'toastr/toastr.scss'

export class SignUp extends Component {


  state = {
    isSignUp: true,
    form: {
      username: '',
      email: '',
      password: ''
    },
    errors: {},
    signUpStatus: {}
  };

  componentWillReceiveProps(nextProps, nextState, nextContext) {
    const {signUpState: {data, error}} = nextProps;
    this.setState(prevState => ({
      signUpStatus: {
        ...prevState.signUpStatus,
        errorMessage: error.message,
        successMessage: data.message
      }
    }))

  }

  handleInputChange = (event) => {
    const {target: {name, value}} = event;
    this.setState(prevState => ({
      form: {...prevState.form, [name]: value },
      errors: {...prevState.errors, [name]: ''}
    }));
  };

  handleSubmit = event => {
    const { form } = this.state;
    const { signUp, closeModal } = this.props;
    event.preventDefault();
    const empty = Object.keys(form).filter(field => !form[field]);
    if( empty.length ){
      empty.forEach(field => {
        this.setState(prevState => ({
          errors: {...prevState.errors, [field]: `*required`}
        }))
      })
    }else {
      signUp(form, closeModal);
    }
  };

  render() {
    const { isSignUp, errors, signUpStatus: { errorMessage, successMessage } } = this.state;

    return (
      <ModalView isSignUp={isSignUp}>
        <div className="signUp-form">
          <div className="auth-label">
            <span>Login</span>
            <span className={`signUp ${isSignUp ? 'active': ''}`}>Sign up</span>
          </div>
          <div className='success-error'>
          <span className={`success ${successMessage ? 'active': ''}`}>{successMessage}</span>
          <span className={`failure ${errorMessage ? 'active': ''}`}>{errorMessage}</span>
          </div>
          <div className="auth">
            <div className="facebook-auth">
              <button>
                <i className="fab fa-facebook-f btn-facebook" />
                <span>Login with Facebook</span>
              </button>
            </div>
            <div className="separator">
              <span>or</span>
            </div>
            <div className="local-auth">
              <form>
                <input  type="text" placeholder="Enter username" onChange={this.handleInputChange} name="username"/>
                <small className={`${errors.username ? 'error': ''}`}>{errors.username}</small>

                <input type="text" placeholder="Enter email" name="email" onChange={this.handleInputChange}/>
                <small className={`${errors.email ? 'error': ''}`}>{errors.email}</small>

                <input type="password" placeholder="Enter password" name="password" onChange={this.handleInputChange}/>
                <small className={`${errors.password ? 'error': ''}`}>{errors.password}</small>

                <input className="signUp-button" type="submit" value='Sign Up' onClick={this.handleSubmit}/>
              </form>
            </div>
            <small>
              <div>
              Already using JockeySound?
                <a href="#">Log in here</a>
                <br/>
              Forgot your password? <a>Reset it here</a>
                <br />
              </div>
              <div className="terms">
              By signing up for a JockeySound account,
              you agree to our <a href="#">Terms & Conditions</a> of use.
              </div>
            </small>
          </div>
        </div>
      </ModalView>
    );
  }
}

const mapStateToProps = state => ({
  signUpState: state.signUpState,
  modal: state.modal
});

const mapDispatchToProps = () => ({
  signUp,
  closeModal
});

export default connect(mapStateToProps, mapDispatchToProps())(SignUp);
