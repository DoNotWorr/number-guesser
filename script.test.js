const compareGuesses = require("./script");
test("Human wins if closer", () => {
    expect(compareGuesses(5, 4, 5)).toBe(true);
});