import { SIGNED_IN, SET_GOALS, SET_COMPLETED } from '../constants';

export const logUser = email => ({
  type: SIGNED_IN,
  payload: email
});

export const setGoals = goals => ({
  type: SET_GOALS,
  payload: goals
});

export const setCompleted = completeGoals => ({
  type: SET_COMPLETED,
  payload: completeGoals
});
