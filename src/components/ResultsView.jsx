import React from "react";
import PropTypes from "prop-types";
import CardItem from "./CardItem";
import ListItem from "./ListItem";
import { List } from "antd";
import { scale } from "./UI";

const ResultsView = ({ view, games, onFavClick, checkIsFav, isLoading }) => {
    const ItemComponent = view === "grid" ? CardItem : ListItem;
    const extraProps =
        view === "grid" ? { grid: { gutter: scale[2], xs: 1, sm: 2, md: 3, lg: 4 } } : {};

    return (
        <List
            {...extraProps}
            loading={isLoading}
            dataSource={games}
            renderItem={game => (
                <List.Item>
                    <ItemComponent
                        name={game.name}
                        short={game.short}
                        isFav={checkIsFav(game)}
                        onFavClick={onFavClick(game)}
                    />
                </List.Item>
            )}
        />
    );
};

ResultsView.propTypes = {
    view: PropTypes.string.isRequired,
    games: PropTypes.array.isRequired,
    onFavClick: PropTypes.func.isRequired,
    checkIsFav: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
};

export default ResultsView;
