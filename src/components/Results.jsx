import React from "react";
import PropTypes from "prop-types";
import { withAppStore } from "../Store";
import { Tabs, Radio, Icon } from "antd";
import { Content, Count, scale } from "./UI";
import ResultsView from "./ResultsView";

const Results = ({ store }) => {
    const hasSearch = store.search.length;
    const games = store.results;
    const favorites = store.results.filter(game => store.favorites.includes(game.short));
    const handleFavClick = game => () => store.toggleFavorite(game.short);
    const handleViewChange = e => store.toggleView(e.target.value);
    const checkIsFav = game => store.favorites.includes(game.short);

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
        <Tabs
            defaultActiveKey={String(store.currentTab)}
            tabBarExtraContent={
                <div style={{ marginRight: scale[2] }}>
                    <Radio.Group
                        defaultValue={store.currentView}
                        onChange={handleViewChange}
                        size="small"
                    >
                        <Radio.Button data-testid="gridViewButton" value="grid">
                            <Icon type="appstore-o" /> Grid view
                        </Radio.Button>
                        <Radio.Button value="list">
                            <Icon type="bars" /> List view
                        </Radio.Button>
                    </Radio.Group>
                </div>
            }
        >
            <Tabs.TabPane tab={getTabTitle(games, store.games, "All games")} key="1">
                <Content>
                    <ResultsView
                        view={store.currentView}
                        games={games}
                        onFavClick={handleFavClick}
                        checkIsFav={checkIsFav}
                        isLoading={!store.fetched}
                    />
                </Content>
            </Tabs.TabPane>
            <Tabs.TabPane tab={getTabTitle(favorites, store.favorites, "Favorites")} key="2">
                <Content>
                    <ResultsView
                        view={store.currentView}
                        games={favorites}
                        onFavClick={handleFavClick}
                        checkIsFav={checkIsFav}
                        isLoading={!store.fetched}
                    />
                </Content>
            </Tabs.TabPane>
        </Tabs>
    );
};

Results.propTypes = {
    store: PropTypes.object.isRequired,
};

export default withAppStore(Results);
