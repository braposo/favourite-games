import React from "react";
import PropTypes from "prop-types";
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
            data-testid="searchInput"
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

Search.propTypes = {
    store: PropTypes.object.isRequired,
};

export default withAppStore(Search);
