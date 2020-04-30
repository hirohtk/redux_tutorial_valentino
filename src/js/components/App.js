import React from "react";
import List from "./List";
import Form from "./Form";

const App = () => (
    <React.Fragment>
        <div>
            <h2>Articles</h2>
            <List />
        </div>
        <div>
            <h2>Add a new article</h2>
            <Form />
        </div>
    </React.Fragment>
);

export default App;