const assert = require("assert");

const defaultValue = "CONDITIONAL_DEFAULT_VALUE";
const key = "SET_VALUE";

const types = {
  oryginal: require("./source"),
  tersered: require("./tersered"),
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
