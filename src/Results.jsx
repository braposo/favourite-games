import React from "react";
import { withAppContext } from "./app-context";
import { Tabs } from "antd";
import { Content } from "./UI";

const TabPane = Tabs.TabPane;

const Results = ({ context }) => (
    <Tabs defaultActiveKey={String(context.currentTab)}>
        <TabPane tab="All" key="1">
            <Content>List of all games</Content>
        </TabPane>
        <TabPane tab="Favorites" key="2">
            <Content>List of all favorites</Content>
        </TabPane>
    </Tabs>
);

export default withAppContext(Results);
