import React from "react";
import { searchGames } from "./API";

// Updates search term and associated results
export const updateSearch = search => prevState => ({
    search,
    results: searchGames(prevState.games, search),
});

// Resets search term and associated results
export const resetSearch = prevState => ({
    search: "",
    results: prevState.games,
});

// Updates initial games list and reset results to
// match same list.
export const updateGamesList = games => () => ({
    games,
    results: games,
});

export const defaultState = {
    currentTab: 1,
    games: [],
    search: "",
    results: [],
    favorites: [],
    updateSearch: () => {},
    updateGamesList: () => {},
    resetSearch: () => {},
};

export const AppContext = React.createContext(defaultState);

// HOC to use App Context
export const withAppContext = Component => props => (
    <AppContext.Consumer>
        {context => <Component {...props} context={context} />}
    </AppContext.Consumer>
);
