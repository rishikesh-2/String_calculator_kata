const add = require(".");

describe("String calculator function", function () {
  describe("Step 1: the simplest thing", function () {
    it("accept an empty string", function () {
      const actual = add("");
      const expected = "";

      expect(actual).toBe(expected);
    });

    it("accept a string with one number", function () {
      const actual = add("1");
      const expected = 1;

      expect(actual).toBe(expected);
    });

    it("accept a string with two numbers", function () {
      const actual = add("1,2");
      const expected = 3;

      expect(actual).toBe(expected);
    });
  });

  describe("Step 2: handle an unknown amount of numbers", function () {
    it("accept an unknown amount of numbers", function () {
      const actual = add("1,2,3,4,5");
      const expected = 15;

      expect(actual).toBe(expected);
    });
  });

  describe("Step 3: handle new lines between numbers", function () {
    it("accept new lines between numbers", function () {
      const actual = add("1\n2,3");
      const expected = 6;

      expect(actual).toBe(expected);
    });
  });

  describe("Step 4: support different delimiters", function () {
    it("accept a custom delimiter", function () {
      const actual = add("//;\n1;2");
      const expected = 3;

      expect(actual).toBe(expected);
    });
  });

  describe("Step 5: negative numbers", function () {
    it("throw error with single negative numbers", function () {
      const actual = function () {
        add("1,4,-1");
      };
      const expected = "negatives not allowed: -1";

      expect(actual).toThrow(expected);
    });

    it("throw error with multiple negative numbers", function () {
      const actual = function () {
        add("1,4,-1,-2,-3");
      };
      const expected = "negatives not allowed: -1,-2,-3";

      expect(actual).toThrow(expected);
    });
  });

  describe("Step 6: ignore big numbers", function () {
    it("ignore numbers bigger than 1000", function () {
      const actual = add("1,4, 10200");
      const expected = 5;

      expect(actual).toBe(expected);
    });
  });
});
