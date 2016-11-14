import {UPDATE_MESSAGE_STATE, UPDATE_MESSAGE_CONTENT} from '../actions/message';

export default function message(state = {
  isSending: false
}, action) {
  switch (action.type) {
  case UPDATE_MESSAGE_STATE:
    return Object.assign({}, state, action.payload.state);
  case UPDATE_MESSAGE_CONTENT:
    return Object.assign({}, state, {
      value: action.payload.value
    });
  default:
    return state;
  }
}