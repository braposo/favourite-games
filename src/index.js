import React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import {
    AppContext,
    defaultState,
    updateSearch,
    updateGamesList,
    resetSearch,
} from "./app-context";
import Main from "./Main";
import { getGames } from "./API";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...defaultState,
            updateSearch: search => this.setState(updateSearch(search)),
            updateGamesList: list => this.setState(updateGamesList(list)),
            resetSearch: () => this.setState(resetSearch),
        };
    }

    componentDidMount() {
        // Fetches games list from API
        getGames.then(gamesList => {
            this.state.updateGamesList(gamesList);
        });
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
