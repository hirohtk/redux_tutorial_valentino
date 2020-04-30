import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        // filter takes a function, goes through forbiddenWords, for each word, return any action.payload.title that contains word
        const foundWord = forbiddenWords.filter(word => action.payload.title.includes(word)
        );

        if (foundWord.length) {
            // dispatch another action "FOUND_BAD_WORD" instead of continuing with ADD_ARTICLE
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
}

// this middleware function also goes to store