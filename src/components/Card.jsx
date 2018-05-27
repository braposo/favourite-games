import React from "react";
import { Card, Icon, Button, Tooltip, Modal } from "antd";
import { CardWrapper, ModalImage } from "./UI";

const { Meta } = Card;

class CardComponent extends React.Component {
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
                                <Button type={isFav ? "primary" : "default"} onClick={onFavClick}>
                                    <Icon type="star" />
                                </Button>
                            </Tooltip>
                            <Button type="default" onClick={this.handleDetailsClick}>
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

export default CardComponent;
