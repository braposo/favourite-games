import React from "react";
import { Content, palette, Logo } from "./UI";
import Search from "./Search";

const Header = () => (
    <Content style={{ backgroundColor: palette.main }}>
        <Logo>
            <img
                alt="King.com"
                src="https://k1.midasplayer.com/images/logos/kingLogoRebrand.svg?_v=13wlhey"
            />
        </Logo>
        <h1 data-testid="h1">Favorite Games</h1>
        <Search />
    </Content>
);

export default Header;
