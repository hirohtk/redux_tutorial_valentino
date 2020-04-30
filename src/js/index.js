// getting store and the action ready for export

// STORE WITHOUT MDIDLEWARE BELOW

// import store from "../js/store/index";
// import { addArticle } from "../js/actions/index";

// window.store = store;
// window.addArticle = addArticle;

// STORE WITH MIDDLEWARE
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";

const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddleware)
);

export default store;