import { searchGames } from "../API";

test("searches games", () => {
    const games = [{ name: "one" }, { name: "two" }, { name: "three" }, { name: "three hundred" }];
    const search = "one";

    const searchResults = searchGames(games, search);

    expect(searchResults).toEqual([{ name: "one" }]);
});

test("performs fuzzy search", () => {
    const games = [{ name: "one" }, { name: "two" }, { name: "three" }, { name: "three hundred" }];
    const search = "thr";

    const searchResults = searchGames(games, search);

    expect(searchResults).toEqual([{ name: "three" }, { name: "three hundred" }]);
});
