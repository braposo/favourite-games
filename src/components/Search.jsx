import React from "react";
import { SearchInput } from "./UI";
import { Icon } from "antd";
import { withAppStore } from "../Store";

const Search = ({ store }) => {
    let searchInput = null;

    const handleChange = e => {
        store.updateSearch(e.target.value);
    };

    const handleClear = () => {
        store.updateSearch("");
        searchInput.focus();
    };

    const suffix = store.search.length ? <Icon type="close-circle" onClick={handleClear} /> : null;

    return (
        <SearchInput
            placeholder="Start typing name of game..."
            prefix={<Icon type="search" />}
            suffix={suffix}
            onChange={handleChange}
            value={store.search}
            innerRef={node => {
                searchInput = node;
            }}
            size="large"
        />
    );
};

export default withAppStore(Search);
