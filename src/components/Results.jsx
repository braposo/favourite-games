import React from "react";
import { withAppContext } from "../Store";
import { Tabs, Radio, Icon, List } from "antd";
import { Content, Count, scale } from "./UI";
import Card from "./Card";
import ListItem from "./ListItem";

export const CardResults = ({ games, context, onFavClick, isFav, isLoading }) => {
    return (
        <List
            loading={isLoading}
            grid={{ gutter: scale[2], xs: 1, sm: 2, md: 3, lg: 4 }}
            dataSource={games}
            renderItem={game => (
                <List.Item>
                    <Card
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

export const ListResults = ({ games, context, onFavClick, isFav, isLoading }) => {
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

const Results = ({ context }) => {
    const hasSearch = context.search.length;
    const games = context.results;
    const favorites = context.results.filter(game => context.favorites.includes(game.short));
    const handleFavClick = game => () => context.toggleFavorite(game.short);
    const handleViewChange = e => context.toggleView(e.target.value);
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

    const ResultsComponent = context.currentView === "grid" ? CardResults : ListResults;

    return (
        <Tabs
            defaultActiveKey={String(context.currentTab)}
            tabBarExtraContent={
                <div style={{ marginRight: scale[2] }}>
                    <Radio.Group
                        defaultValue={context.currentView}
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
            <Tabs.TabPane tab={getTabTitle(games, context.games, "All games")} key="1">
                <Content>
                    <ResultsComponent
                        games={games}
                        onFavClick={handleFavClick}
                        isFav={isFav}
                        isLoading={!context.fetched}
                    />
                </Content>
            </Tabs.TabPane>
            <Tabs.TabPane tab={getTabTitle(favorites, context.favorites, "Favorites")} key="2">
                <Content>
                    <ResultsComponent
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
