import React from "react";
import { Card, Icon, Button, Tooltip } from "antd";
import { scale } from "./UI";

const { Meta } = Card;

const CardWrapper = ({ name, short, isFav, onFavClick }) => {
    const handleDetailsClick = () => {
        console.log("clicked details");
    };

    return (
        <Card
            cover={
                <img
                    alt={`Game screenshot for ${name}`}
                    src={`https://royal1.midasplayer.com/images/games/${short}/tournamentPage/${short}_764x260.jpg`}
                />
            }
            style={{ marginBottom: scale[2] }}
            actions={[
                <Button.Group>
                    <Tooltip
                        title={isFav ? "Remove from favorites" : "Add to favorites"}
                        placement="topLeft"
                    >
                        <Button type={isFav ? "primary" : "default"} onClick={onFavClick}>
                            <Icon type="star" />
                        </Button>
                    </Tooltip>
                    <Button type="default" onClick={handleDetailsClick}>
                        <Icon type="profile" /> More details
                    </Button>
                </Button.Group>,
            ]}
        >
            <Meta title={name} />
        </Card>
    );
};

export default CardWrapper;
