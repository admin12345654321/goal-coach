import { SET_COMPLETED } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case SET_COMPLETED:
      const { payload: completeGoals } = action;
      return completeGoals;
    default:
      return state;
  }
};
