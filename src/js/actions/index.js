// THIS IS AN ACTION, BUT WE ABSTRACT IT INTO A FUNCTION BELOW
// {
//     type: 'ADD_ARTICLE',
//     payload: { title: 'React Redux Tutorial', id: 1 }
//   }

// Doing this import so that the type (which is a string) can be defined elsewhere
// another convention puts all of this all together though: https://github.com/erikras/ducks-modular-redux
import {ADD_ARTICLE} from "../constants/action-types"

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};