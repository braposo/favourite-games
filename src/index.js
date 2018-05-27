import React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import {
    AppStore,
    defaultState,
    updateSearch,
    updateGamesList,
    resetSearch,
    toggleFavorite,
    toggleView,
} from "./Store";
import Main from "./views/Main";
import { getGames } from "./API";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...defaultState,
            updateSearch: search => this.setState(updateSearch(search)),
            updateGamesList: list => this.setState(updateGamesList(list)),
            resetSearch: () => this.setState(resetSearch),
            toggleFavorite: game => this.setState(toggleFavorite(game)),
            toggleView: view => this.setState(toggleView(view)),
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
            <AppStore.Provider value={this.state}>
                <Main />
            </AppStore.Provider>
        );
    }
}

render(<App />, document.getElementById("root"));
