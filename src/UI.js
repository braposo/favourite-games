import styled from "react-emotion";

export const scale = [4, 8, 16, 24, 32, 40, 48, 64, 128];
export const palette = {
    main: "#f6f3ee",
};

export const Content = styled("div")({
    paddingLeft: scale[3],
    paddingRight: scale[3],
    paddingTop: scale[1],
    paddingBottom: scale[3],
});

export const Count = styled("span")({
    fontSize: 10,
});

export const Logo = styled("div")({
    height: 25,
    position: "relative",

    "> img": {
        display: "block",
        width: "auto",
        height: "100%",
        marginRight: 0,
        marginLeft: "auto",
    },
});
