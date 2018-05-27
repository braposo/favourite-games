import React from "react";
import { withAppContext } from "./app-context";
import { Tabs, Row, Col } from "antd";
import { Content, Count, scale, Loading } from "./UI";
import Card from "./Card";

const TabPane = Tabs.TabPane;

const CardResults = withAppContext(({ games, context }) => {
    const handleFavClick = game => () => context.toggleFavorite(game.short);
    return (
        <Row gutter={scale[2]}>
            {games.length
                ? games.map((game, i) => {
                      const isFav = context.favorites.includes(game.short);

                      return (
                          <Col span={6} key={game.short}>
                              <Card
                                  name={game.name}
                                  short={game.short}
                                  isFav={isFav}
                                  onFavClick={handleFavClick(game)}
                              />
                          </Col>
                      );
                  })
                : "No games matching"}
        </Row>
    );
});

const Results = ({ context }) => {
    const hasSearch = context.search.length;
    const games = context.results;
    const favorites = context.results.filter(game => context.favorites.includes(game.short));

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
            <TabPane tab={getTabTitle(games, context.games, "All games")} key="1">
                <Content>{!context.fetched ? <Loading /> : <CardResults games={games} />}</Content>
            </TabPane>
            <TabPane tab={getTabTitle(favorites, context.favorites, "Favorites")} key="2">
                <Content>
                    {!context.fetched ? <Loading /> : <CardResults games={favorites} />}
                </Content>
            </TabPane>
        </Tabs>
    );
};

export default withAppContext(Results);
