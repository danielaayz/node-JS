// A function to reverse the sentence
export const reverseString = (string: string): string =>
   string.split("").reverse().join("");

// A function to count the characters in a sentence
export const countCharacters = (string: string): number =>
   string.replace(/\s+/g, "").length;
