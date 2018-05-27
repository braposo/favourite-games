import styled from "react-emotion";

export const scale = [4, 8, 16, 24, 32, 40, 48, 64, 128];

export const Content = styled("div")({
    paddingLeft: scale[3],
    paddingRight: scale[3],
    paddingTop: scale[1],
    paddingBottom: scale[1],
});

export const Count = styled("span")({
    fontSize: 10,
});
