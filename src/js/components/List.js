import React from "react";
import { connect } from "react-redux";

// GET FROM STORE
// If your mapStateToProps function is declared as taking one parameter, it will be called whenever the store state changes
const mapStateToProps = state => {
  return { articles: state.articles };
};

// THIS IS YOUR COMPONENT
// articles here is coming from the reducer ( {articles: state.articles.concat(action.payload)} )
const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map(each => (
      <li key={each.id}>{each.title}</li>
    ))}
  </ul>
);

//  Connect component from above with the store, using mapStateToProps
const List = connect(mapStateToProps)(ConnectedList);

export default List;