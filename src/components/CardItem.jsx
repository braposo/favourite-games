import React from "react";
import PropTypes from "prop-types";
import { Card, Icon, Button, Tooltip, Modal } from "antd";
import { ModalImage } from "./UI";
import styled from "react-emotion";

const { Meta } = Card;

export const CardWrapper = styled("div")({});

class CardItem extends React.Component {
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
            <CardWrapper>
                <Card
                    cover={
                        <img
                            alt={`Game screenshot for ${name}`}
                            src={`https://royal1.midasplayer.com/images/games/${short}/${short}_170x80.gif`}
                        />
                    }
                    actions={[
                        <Button.Group>
                            <Tooltip
                                title={isFav ? "Remove from favorites" : "Add to favorites"}
                                placement="topLeft"
                            >
                                <Button
                                    data-testid="favButton"
                                    type={isFav ? "primary" : "default"}
                                    onClick={onFavClick}
                                >
                                    <Icon type="star" />
                                </Button>
                            </Tooltip>
                            <Button
                                data-testid="detailsButton"
                                type="default"
                                onClick={this.handleDetailsClick}
                            >
                                <Icon type="profile" /> More details
                            </Button>
                        </Button.Group>,
                    ]}
                >
                    <Meta title={name} />
                </Card>
                <Modal
                    title={name}
                    footer={null}
                    visible={this.state.modalOpen}
                    onCancel={this.handleModalClose}
                    data-testid="modal"
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
            </CardWrapper>
        );
    }
}

CardItem.propTypes = {
    name: PropTypes.string.isRequired,
    short: PropTypes.string.isRequired,
    onFavClick: PropTypes.func.isRequired,
    isFav: PropTypes.bool.isRequired,
};

export default CardItem;
