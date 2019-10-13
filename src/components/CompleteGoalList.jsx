import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      const completeGoals = [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({ email, title });
      });
      this.props.setCompleted(completeGoals);
    });
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    const { completeGoals } = this.props;
    return (
      <div>
        {completeGoals.map((completeGoal, index) => {
          const { email, title } = completeGoal;
          return (
            <div key={index}>
              <strong>{title}</strong> completed by <em>{email}</em>
            </div>
          );
        })}
        <button
          className='btn btn-primary'
          onClick={() => this.clearCompleted()}
        >
          Clear All
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { completeGoals } = state;
  return {
    completeGoals
  };
};

export default connect(
  mapStateToProps,
  { setCompleted }
)(CompleteGoalList);
