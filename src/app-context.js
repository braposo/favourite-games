import React from "react";

export const updateSearch = search => () => ({
    search,
});

export const defaultState = {
    currentTab: 1,
    search: "",
    favorites: [],
    updateSearch: () => {},
};

export const AppContext = React.createContext(defaultState);

// HOC to use App Context
export const withAppContext = Component => props => (
    <AppContext.Consumer>
        {context => <Component {...props} context={context} />}
    </AppContext.Consumer>
);
