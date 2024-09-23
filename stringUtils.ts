// A function to reverse the sentence
export const reverseString = (string: string): string =>
   string.split("").reverse().join("");

// A function to count the characters in a sentence
export const countCharacters = (string: string): number =>
   string.replace(/\s+/g, "").length;

// A function which will capitalize the first letter of every word in a string
export const capitalizeWords = (string: string): string =>
   string
      .split(" ")
      .map(
         (word) => word.charAt(0).toUpperCase() + word.substring(1, word.length)
      )
      .join(" ");
