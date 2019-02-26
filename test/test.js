const assert = require("assert");
const oryginal = require("../source");
const unminified = require("../dist/unminified");
const minified = require("../dist/minified");

const defaultValue = "CONDITIONAL_DEFAULT_VALUE";
const key = "SET_VALUE";

const types = {
  oryginal: require("../source"),
  tersered: require("../dist/tersered"),
  unminified: require("../dist/unminified"),
  unminified_tersered: require("../dist/unminified_tersered"),
  minified: require("../dist/minified"),
};

describe("Terser pre-optymalization", function() {
  Object.entries(types).forEach(([type, fn]) => {
    describe(type, function() {
      it("should return object with prop 'mappedKey' set to default value", function() {
        assert.equal(fn({}).mappedKey, defaultValue);
      });
      it("should return object with prop 'mappedKey' set to 'key' value", function() {
        assert.equal(fn({ key }).mappedKey, key);
      });
    });
  });
});
