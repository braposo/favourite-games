import React from "react";
import CardItem from "../CardItem";
import { render, Simulate } from "react-testing-library";

describe("CardItem component", () => {
    describe("Favorite button", () => {
        it("updates styles when clicked", () => {
            const handleFavClick = jest.fn();
            const { getByTestId, unmount } = render(
                <CardItem name="Game one" short="one" isFav={false} onFavClick={handleFavClick} />
            );
            const favButton = getByTestId("favButton");

            expect(favButton.className).toContain("ant-btn-default");
            expect(favButton.className).not.toContain("ant-btn-primary");

            Simulate.click(favButton);

            expect(favButton.className).toContain("ant-btn-clicked");

            unmount();
        });

        it("calls handle function when clicked", () => {
            const handleFavClick = jest.fn();
            const { getByTestId, unmount } = render(
                <CardItem name="Game one" short="one" isFav={false} onFavClick={handleFavClick} />
            );
            const favButton = getByTestId("favButton");

            expect(handleFavClick).not.toHaveBeenCalled();

            Simulate.click(favButton);

            expect(handleFavClick).toHaveBeenCalledTimes(1);

            unmount();
        });

        it("has correct styles when game is favorite", () => {
            const handleFavClick = jest.fn();
            const { getByTestId, unmount } = render(
                <CardItem name="Game one" short="one" isFav={true} onFavClick={handleFavClick} />
            );
            const favButton = getByTestId("favButton");

            expect(favButton.className).toContain("ant-btn-primary");
            expect(favButton.className).not.toContain("ant-btn-default");

            unmount();
        });
    });

    describe("Details button", () => {
        it("updates styles when clicked", async () => {
            const handleFavClick = jest.fn();
            const { getByTestId, unmount } = render(
                <CardItem name="Game one" short="one" isFav={false} onFavClick={handleFavClick} />
            );
            const detailsButton = getByTestId("detailsButton");

            expect(detailsButton).not.toBeNull();
            expect(detailsButton.className).toContain("ant-btn-default");

            Simulate.click(detailsButton);

            expect(detailsButton).not.toBeNull();
            expect(detailsButton.className).toContain("ant-btn-clicked");

            unmount();
        });
    });
});
