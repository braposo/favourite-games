import React from "react";
import { withAppContext } from "./app-context";
import { Tabs } from "antd";
import { Content, Count } from "./UI";

const TabPane = Tabs.TabPane;

const Results = ({ context }) => {
    const hasSearch = context.search.length;
    const games = context.results.map(game => (hasSearch ? game.item.name : game.name));
    const favorites = context.results
        .filter(game => context.favorites.includes(hasSearch ? game.item.short : game.short))
        .map(game => (hasSearch ? game.item.name : game.name));

    const getTabTitle = (list, base, label) =>
        hasSearch ? (
            <span>
                {label}{" "}
                <Count>
                    ({list.length}/{base.length})
                </Count>
            </span>
        ) : (
            <span>
                {label} <Count>({base.length})</Count>
            </span>
        );

    return (
        <Tabs defaultActiveKey={String(context.currentTab)}>
            <TabPane tab={getTabTitle(games, context.games, "All games")} key="1">
                <Content>{games.join(", ") || "no games matching"}</Content>
            </TabPane>
            <TabPane tab={getTabTitle(favorites, context.favorites, "Favorites")} key="2">
                <Content>{favorites.join(", ") || "no favorites matching"}</Content>
            </TabPane>
        </Tabs>
    );
};

export default withAppContext(Results);
