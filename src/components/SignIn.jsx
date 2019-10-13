import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    };
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  signIn() {
    console.log(this.state);
    const { email, password } = this.state;

    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error);
        this.setState({ error });
      });
  }

  render() {
    return (
      <div className='form-inline m-5'>
        <h2>Sign In</h2>
        <div className='form-group'>
          <input
            type='text'
            style={{ margin: '0 5px' }}
            placeholder='email'
            onChange={this.handleChange('email')}
            className='form-control'
          />
          <input
            type='password'
            style={{ margin: '0 5px' }}
            placeholder='password'
            onChange={this.handleChange('password')}
            className='form-control'
          />
          <button className='btn btn-primary' onClick={() => this.signIn()}>
            Sign In
          </button>
        </div>{' '}
        <div>{this.state.error.message}</div>
        <div>
          <Link to={'/signup'}>Sign up instead</Link>
        </div>
      </div>
    );
  }
}
