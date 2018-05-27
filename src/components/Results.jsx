import React from "react";
import { withAppStore } from "../Store";
import { Tabs, Radio, Icon, List } from "antd";
import { Content, Count, scale } from "./UI";
import CardItem from "./CardItem";
import ListItem from "./ListItem";

const CardResults = ({ games, onFavClick, isFav, isLoading }) => {
    return (
        <List
            loading={isLoading}
            grid={{ gutter: scale[2], xs: 1, sm: 2, md: 3, lg: 4 }}
            dataSource={games}
            renderItem={game => (
                <List.Item>
                    <CardItem
                        name={game.name}
                        short={game.short}
                        isFav={isFav(game)}
                        onFavClick={onFavClick(game)}
                    />
                </List.Item>
            )}
        />
    );
};

const ListResults = ({ games, onFavClick, isFav, isLoading }) => {
    return (
        <List
            loading={isLoading}
            dataSource={games}
            renderItem={game => (
                <List.Item>
                    <ListItem
                        name={game.name}
                        short={game.short}
                        isFav={isFav(game)}
                        onFavClick={onFavClick(game)}
                    />
                </List.Item>
            )}
        />
    );
};

const Results = ({ store }) => {
    const hasSearch = store.search.length;
    const games = store.results;
    const favorites = store.results.filter(game => store.favorites.includes(game.short));
    const handleFavClick = game => () => store.toggleFavorite(game.short);
    const handleViewChange = e => store.toggleView(e.target.value);
    const isFav = game => store.favorites.includes(game.short);

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

    const ResultsComponent = store.currentView === "grid" ? CardResults : ListResults;

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
                        <Radio.Button value="grid">
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
                    <ResultsComponent
                        games={games}
                        onFavClick={handleFavClick}
                        isFav={isFav}
                        isLoading={!store.fetched}
                    />
                </Content>
            </Tabs.TabPane>
            <Tabs.TabPane tab={getTabTitle(favorites, store.favorites, "Favorites")} key="2">
                <Content>
                    <ResultsComponent
                        games={favorites}
                        onFavClick={handleFavClick}
                        isFav={isFav}
                        isLoading={!store.fetched}
                    />
                </Content>
            </Tabs.TabPane>
        </Tabs>
    );
};

export default withAppStore(Results);
