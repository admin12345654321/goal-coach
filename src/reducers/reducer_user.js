import { SIGNED_IN } from '../constants';

const user = {
  email: null
};

export default (state = user, action) => {
  switch (action.type) {
    case SIGNED_IN:
      const { payload: email } = action;
      return {
        email
      };
    default:
      return state;
  }
};
