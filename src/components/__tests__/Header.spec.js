import React from "react";
import Header from "../Header";
import { render } from "react-testing-library";

describe("Header component", () => {
    it("renders the H1 correctly", () => {
        const { getByText } = render(<Header />);
        const h1 = getByText("Favorite Games");
        expect(h1).not.toBeNull();
        expect(h1.tagName).toBe("H1");
    });
});
