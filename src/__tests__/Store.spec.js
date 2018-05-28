import { updateSearch, updateGamesList, toggleFavorite, toggleView } from "../Store";

test("updates search and results", () => {
    const prevState = {
        search: "",
        results: [],
        games: [{ name: "one" }, { name: "two" }, { name: "three" }],
    };
    const search = "one";
    const newState = updateSearch(search)(prevState);

    expect(newState).toEqual({ search: "one", results: [{ name: "one" }] });
});

test("reset results if search is empty", () => {
    const prevState = {
        search: "",
        results: [],
        games: [{ name: "one" }, { name: "two" }, { name: "three" }],
    };
    const search = "";
    const newState = updateSearch(search)(prevState);

    expect(newState).toEqual({ search: "", results: prevState.games });
});

test("sets initial games list", () => {
    const games = [{ name: "one" }, { name: "two" }, { name: "three" }];
    const newState = updateGamesList(games)();

    expect(newState).toEqual({ games, results: games, fetched: true });
});

test("adds game to favorites if isn't on the list", () => {
    const prevState = {
        favorites: ["one", "two", "three"],
    };
    const game = "four";
    const newState = toggleFavorite(game)(prevState);

    expect(newState).toEqual({
        favorites: ["one", "two", "three", "four"],
    });
});

test("removes game from favorites if is on the list", () => {
    const prevState = {
        favorites: ["one", "two", "three"],
    };
    const game = "two";
    const newState = toggleFavorite(game)(prevState);

    expect(newState).toEqual({
        favorites: ["one", "three"],
    });
});

test("changes view mode", () => {
    const gridState = toggleView("grid")();

    expect(gridState).toEqual({
        currentView: "grid",
    });

    const listState = toggleView("list")();

    expect(listState).toEqual({
        currentView: "list",
    });
});
