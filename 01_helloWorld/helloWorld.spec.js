const helloWorld = require("./helloWorld");

describe("Hello World", function () {
  test('says "helloWorld, World!" ', function () {
    expect(helloWorld()).toEqual("Hello, World!");
  });
});
//
