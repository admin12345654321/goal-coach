import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  addGoal() {
    const { title } = this.state;
    const { email } = this.props.user;
    goalRef.push({ email, title });
  }

  render() {
    return (
      <div className='form-inline'>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Add a goal'
            style={{ margin: '5px' }}
            onChange={e => this.handleChange(e)}
          />
          <button className='btn btn-success' onClick={() => this.addGoal()}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    user
  };
};

export default connect(
  mapStateToProps,
  null
)(AddGoal);
