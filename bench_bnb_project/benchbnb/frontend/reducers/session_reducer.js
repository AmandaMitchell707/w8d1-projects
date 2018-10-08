import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const nullCurrentUser = { id: null };

const sessionReducer = (state = nullCurrentUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = { id: action.currentUser.id };
      return newState;
    case LOGOUT_CURRENT_USER:
      return nullCurrentUser;
    default:
      return state;
  }
};

export default sessionReducer;
