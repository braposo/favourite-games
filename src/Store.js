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

// Toggles between grid and list views
export const toggleView = view => () => ({ currentView: view });

export const defaultState = {
    currentTab: 1,
    currentView: "grid",
    fetched: false,
    games: [],
    search: "",
    results: [],
    favorites: [],
    updateSearch: () => {},
    updateGamesList: () => {},
    resetSearch: () => {},
    toggleFavorite: () => {},
    toggleView: () => {},
};

export const AppStore = React.createContext(defaultState);

// HOC to use App Context
export const withAppStore = Component => props => (
    <AppStore.Consumer>{store => <Component {...props} store={store} />}</AppStore.Consumer>
);
