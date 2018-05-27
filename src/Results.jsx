import React from "react";
import { withAppContext } from "./app-context";
import { Tabs, Rate, Tooltip } from "antd";
import { Content } from "./UI";

const TabPane = Tabs.TabPane;

const Results = ({ context }) => {
    const hasSearch = context.search.length;

    return (
        <Tabs defaultActiveKey={String(context.currentTab)}>
            <TabPane tab="All" key="1">
                <Content>
                    {context.results
                        .map(game => (hasSearch ? game.item.name : game.name))
                        .join(", ")}
                </Content>
            </TabPane>
            <TabPane tab="Favorites" key="2">
                <Content>
                    <Tooltip title="prompt text" placement="topLeft">
                        <span>
                            <Rate count={1} />
                        </span>
                    </Tooltip>
                    List of all favorites
                </Content>
            </TabPane>
        </Tabs>
    );
};

export default withAppContext(Results);
