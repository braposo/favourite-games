import React from "react";
import { withAppContext } from "../Store";
import { Tabs } from "antd";
import { Content, Count, CardResults } from "./UI";

const Results = ({ context }) => {
    const hasSearch = context.search.length;
    const games = context.results;
    const favorites = context.results.filter(game => context.favorites.includes(game.short));
    const handleFavClick = game => () => context.toggleFavorite(game.short);
    const isFav = game => context.favorites.includes(game.short);

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
            <Tabs.TabPane tab={getTabTitle(games, context.games, "All games")} key="1">
                <Content>
                    <CardResults
                        games={games}
                        onFavClick={handleFavClick}
                        isFav={isFav}
                        isLoading={!context.fetched}
                    />
                </Content>
            </Tabs.TabPane>
            <Tabs.TabPane tab={getTabTitle(favorites, context.favorites, "Favorites")} key="2">
                <Content>
                    <CardResults
                        games={favorites}
                        onFavClick={handleFavClick}
                        isFav={isFav}
                        isLoading={!context.fetched}
                    />
                </Content>
            </Tabs.TabPane>
        </Tabs>
    );
};

export default withAppContext(Results);
