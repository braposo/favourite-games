import React from "react";
import PropTypes from "prop-types";
import { Icon, Button, Tooltip, Modal } from "antd";
import { ModalImage, scale } from "./UI";
import styled from "react-emotion";

const ListItemWrapper = styled("div")({
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
});

const ListItemName = styled("div")({
    flex: "1 auto",
    lineHeight: `${scale[4]}px`,
    paddingLeft: scale[2],
});

const ListItemImage = styled("img")({
    width: scale[4],
    height: scale[4],
});

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
        };
    }

    handleDetailsClick = () => {
        this.setState({ modalOpen: true });
    };

    handleModalClose = () => {
        this.setState({ modalOpen: false });
    };

    render() {
        const { name, short, isFav, onFavClick } = this.props;
        return (
            <ListItemWrapper>
                <ListItemImage
                    alt={`Game screenshot for ${name}`}
                    src={`https://royal1.midasplayer.com/images/games/${short}/${short}_60x60.gif`}
                />
                <ListItemName>{name}</ListItemName>
                <Button.Group>
                    <Tooltip
                        title={isFav ? "Remove from favorites" : "Add to favorites"}
                        placement="topLeft"
                    >
                        <Button type={isFav ? "primary" : "default"} onClick={onFavClick}>
                            <Icon type="star" />
                        </Button>
                    </Tooltip>
                    <Button type="default" onClick={this.handleDetailsClick}>
                        <Icon type="profile" /> More details
                    </Button>
                </Button.Group>
                <Modal
                    title={name}
                    footer={null}
                    visible={this.state.modalOpen}
                    onCancel={this.handleModalClose}
                >
                    <ModalImage
                        image={`https://royal1.midasplayer.com/images/games/${short}/tournamentPage/${short}_764x260.jpg`}
                    />
                    <Button.Group>
                        <Button type={isFav ? "primary" : "default"} onClick={onFavClick}>
                            <Icon type="star" />{" "}
                            {isFav ? "Remove from favorites" : "Add to favorites"}
                        </Button>
                        <Button type="default" disabled={true}>
                            <Icon type="play-circle" /> Play game
                        </Button>
                    </Button.Group>
                </Modal>
            </ListItemWrapper>
        );
    }
}

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    short: PropTypes.string.isRequired,
    onFavClick: PropTypes.func.isRequired,
    isFav: PropTypes.bool.isRequired,
};

export default ListItem;
