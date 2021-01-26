const hasRightLength = (password) => password.length < 9;

const isNotNull = (password) => password !== null;

const hasUpperCaseCharacter = (password) => /[A-Z]/.test(password);

const hasLowerCaseCharacter = (password) => /[a-z]/.test(password);

const hasDigit = (password) => /[0-9]/.test(password);

const minimumConditionsReached = (conditions) => {
  trueConditions = conditions.filter((bool) => bool);
  return trueConditions.length >= 3;
};

const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};
module.exports = {
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
  verifyPassword,
};
