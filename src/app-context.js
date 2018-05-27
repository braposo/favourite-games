import React from "react";
import { searchGames } from "./API";

// Updates search term and associated results
export const updateSearch = search => prevState => ({
    search,
    results: search.length ? searchGames(prevState.games, search) : prevState.games,
});

// Updates initial games list and reset results to
// match same list.
export const updateGamesList = games => () => ({
    games,
    results: games,
    fetched: true,
});

// Updates initial games list and reset results to
// match same list.
export const toggleFavorite = game => prevState => {
    if (prevState.favorites.indexOf(game) === -1) {
        return { favorites: [...prevState.favorites, game] };
    }

    return {
        favorites: prevState.favorites.filter(fav => fav !== game),
    };
};

export const defaultState = {
    currentTab: 1,
    fetched: false,
    games: [],
    search: "",
    results: [],
    favorites: ["eightballpool"], // TODO: remove this
    updateSearch: () => {},
    updateGamesList: () => {},
    resetSearch: () => {},
    toggleFavorite: () => {},
};

export const AppContext = React.createContext(defaultState);

// HOC to use App Context
export const withAppContext = Component => props => (
    <AppContext.Consumer>
        {context => <Component {...props} context={context} />}
    </AppContext.Consumer>
);
