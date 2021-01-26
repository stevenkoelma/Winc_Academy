const {
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
  verifyPassword,
} = require("./functions.js");

// Right length

test("henkie1234 has not the right length", () => {
  expect(hasRightLength("henkie1234")).toBeFalsy();
});

test("henkie 1 has the right length", () => {
  expect(hasRightLength("henkie1")).toBeTruthy();
});

// No input

test("no input is not accepted", () => {
  expect(isNotNull(null)).toBeFalsy();
});

test("input is accepted", () => {
  expect(isNotNull("henkie1")).toBeTruthy();
});

// Uppercase

test("henkie1 has no uppercase characters", () => {
  expect(hasUpperCaseCharacter("henkie1")).toBeFalsy();
});

test("Henkie1 has uppercase characters", () => {
  expect(hasUpperCaseCharacter("Henkie1")).toBeTruthy();
});

// Lowercase

test("HENKIE1 has no lowercase characters", () => {
  expect(hasLowerCaseCharacter("HENKIE1")).toBeFalsy();
});

test("HENKie1 has lowercase characters", () => {
  expect(hasLowerCaseCharacter("HENKie1")).toBeTruthy();
});

// Numbers

test(`henkiedetankie has no number`, () => {
  expect(hasDigit("henkiedetankie")).toBeFalsy();
});

test(`henkie1234 has a number`, () => {
  expect(hasDigit("henkie1234")).toBeTruthy();
});

// Minimum conditions

test(`three times false, minimum conditions not reached`, () => {
    const conditions = [false, false, true, true, false]
    expect(minimumConditionsReached(conditions)).toBeFalsy();
})

test(`three times true, minimum conditions reached`, () => {
    const conditions = [true, false, true, true, false]
    expect(minimumConditionsReached(conditions)).toBeTruthy();
})

test(`four times true, minimum conditions reached`, () => {
    const conditions = [true, true, true, true, false]
    expect(minimumConditionsReached(conditions)).toBeTruthy();
})

// Verify password

test (`HENK is not a good passwoord`, () => {
expect(verifyPassword("HENK")).toBeFalsy()
});

test (`henkpankie is not a good password`, () => {
    expect(verifyPassword("henkiepankie")).toBeFalsy()
});

test (`henkpAnk is a good password`, () => {
    expect(verifyPassword("henkpAnk")).toBeTruthy()
});

test (`h3nk' is a good password`, () => {
    expect(verifyPassword("h3nk")).toBeTruthy()
});