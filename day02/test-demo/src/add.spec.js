const add = require("./add");

// trilogy for unit testing => INPUT & OUTPUT
test("should 1 + 1 = 2", () => {
  // give data
  const a = 1;
  const b = 1;
  // trigger action
  const result = add(a, b);
  // verify
  expect(result).toBe(2);
});

// TODO: mock