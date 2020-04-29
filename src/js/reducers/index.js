import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
  };
// Redux reducer is just a JavaScript function. It takes two parameters: the current state and action (which triggers update of state)
  function rootReducer(state = initialState, action) {
      // Action #1:  Adding article
    if (action.type === ADD_ARTICLE) {
        // Object.assign:  using a blank object as a target ({}), copy original state AND this other object containing the payload
        // this overwrites any existing key/value pair if the key being written is the same, if not, then new key/value pairs created
        return Object.assign({}, state, {articles: state.articles.concat(action.payload)})
      }
    return state;
  };
  
  export default rootReducer;