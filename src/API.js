import gameData from "./data/games.json";
import Fuse from "fuse.js";

// This simulates a fetch to a remote API, has initial delay of
// 2 seconds to mock network conditions
export const getGames = new Promise((resolve, reject) => {
    // TODO: implement localStorage
    setTimeout(() => resolve(gameData.games), 2000);
});

// Searches games using Fuse library.
// This could potentially be a call to a remote API
// as well, but we're just searching locally for now
export const searchGames = (games, search) => {
    const fuseOptions = {
        shouldSort: true,
        includeScore: true,
        includeMatches: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["name"],
    };

    const fuse = new Fuse(games, fuseOptions);
    return fuse.search(search);
};
