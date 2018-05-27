import React from "react";
import styled from "react-emotion";
import { Icon, Input, List } from "antd";
import Card from "./Card";

export const scale = [4, 8, 16, 24, 32, 40, 48, 64, 128];
export const palette = {
    main: "#f6f3ee",
};

export const Content = styled("div")({
    paddingLeft: scale[3],
    paddingRight: scale[3],
    paddingTop: scale[1],
    paddingBottom: scale[3],
});

export const Count = styled("span")({
    fontSize: 10,
});

export const Logo = styled("div")({
    height: 25,
    position: "relative",

    "> img": {
        display: "block",
        width: "auto",
        height: "100%",
        marginRight: 0,
        marginLeft: "auto",
    },
});

const LoadingButton = props => <Icon type="loading" {...props} />;
export const Loading = styled(LoadingButton)({
    display: "block",
    fontSize: 32,
});

export const CardWrapper = styled("div")({});

export const ModalImage = styled("img")(props => ({
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    display: "block",
    width: "100%",
    height: 200,
    marginBottom: scale[2],
}));

export const SearchInput = styled(Input)({
    width: "100%",
});

export const CardResults = ({ games, context, onFavClick, isFav, isLoading }) => {
    return (
        <List
            loading={isLoading}
            grid={{ gutter: scale[2], xs: 1, sm: 2, md: 3, lg: 4 }}
            dataSource={games}
            renderItem={game => {
                return (
                    <List.Item>
                        <Card
                            name={game.name}
                            short={game.short}
                            isFav={isFav(game)}
                            onFavClick={onFavClick(game)}
                        />
                    </List.Item>
                );
            }}
        />
    );
};
