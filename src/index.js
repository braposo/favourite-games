import React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import { AppContext, defaultState } from "./app-context";
import Main from "./Main";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...defaultState,
        };
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <Main />
            </AppContext.Provider>
        );
    }
}

render(<App />, document.getElementById("root"));
