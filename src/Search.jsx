import React from "react";
import { Content } from "./UI";
import { Input, Icon } from "antd";
import styled from "react-emotion";
import { withAppContext } from "./app-context";

const SearchInput = styled(Input)({
    width: "100%",
});

const Search = ({ context }) => {
    let searchInput = null;

    const handleChange = e => {
        context.updateSearch(e.target.value);
    };

    const handleClear = () => {
        context.updateSearch("");
        searchInput.focus();
    };

    const suffix = context.search.length ? (
        <Icon type="close-circle" onClick={handleClear} />
    ) : null;

    return (
        <SearchInput
            placeholder="Start typing name of game..."
            prefix={<Icon type="search" />}
            suffix={suffix}
            onChange={handleChange}
            value={context.search}
            innerRef={node => {
                searchInput = node;
            }}
            size="large"
        />
    );
};

export default withAppContext(Search);
