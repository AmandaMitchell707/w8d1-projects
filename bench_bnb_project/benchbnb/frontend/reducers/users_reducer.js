import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const newUser = { [action.currentUser.id]: action.currentUser };
      return merge({}, state, newUser);
    default:
      return state;
  }
};

export default usersReducer;
