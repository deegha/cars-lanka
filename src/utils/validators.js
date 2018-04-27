const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const isValidEmail = (emailString) => emailRegex.test(emailString);

const containsLetterRegex = /^.*[a-zA-Z].*$/;
export const containsLetter = (string) => containsLetterRegex.test(string);

const specialCharacterRegex = /^.*[0-9!"£$%^&*(){}:;'@#~,<.>/?|\\]+.*$/;
export const containsSpecialCharacter = (string) => specialCharacterRegex.test(string);

export const isValidPassword = (passwordString) => passwordString.length > 5 && containsLetter(passwordString) && containsSpecialCharacter(passwordString);
