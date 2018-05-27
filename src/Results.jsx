import React from "react";
import { withAppContext } from "./app-context";
import { Tabs, Rate, Tooltip } from "antd";
import { Content } from "./UI";

const TabPane = Tabs.TabPane;

const Results = ({ context }) => {
    const hasSearch = context.search.length;
    const games = context.results.map(game => (hasSearch ? game.item.name : game.name));
    const favourites = context.results
        .filter(game => context.favorites.includes(hasSearch ? game.item.short : game.short))
        .map(game => (hasSearch ? game.item.name : game.name));

    const allTabTitle = hasSearch
        ? `All games (${games.length}/${context.games.length})`
        : `All games (${context.games.length})`;
    const favouritesTabTitle = hasSearch
        ? `Favorites (${favourites.length}/${context.favorites.length})`
        : `Favorites (${context.favorites.length})`;

    return (
        <Tabs defaultActiveKey={String(context.currentTab)}>
            <TabPane tab={allTabTitle} key="1">
                <Content>{games.join(", ") || "no games matching"}</Content>
            </TabPane>
            <TabPane tab={favouritesTabTitle} key="2">
                <Content>{favourites.join(", ") || "no favorites matching"}</Content>
            </TabPane>
        </Tabs>
    );
};

export default withAppContext(Results);
