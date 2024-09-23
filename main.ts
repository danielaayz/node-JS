import fs from "fs";
import path from "path";
import { reverseString, countCharacters, capitalizeWords } from "./stringUtils";

// 1) Write a sentence about why learning Node.js is important
const data =
   "Node.js is crucial because it allows developers to build scalable, high-performance web applications using JavaScript for both server-side and client-side code, enabling real-time data handling and fast execution";

// 2) Use your functions to:
// i) Reverse the sentence
console.log(reverseString(data));
// ii) Count the characters
console.log(countCharacters(data));
//console.log(capitalizeWords(data));
// Writes the reversed sentence into a new file
fs.writeFileSync("reversed.txt", reverseString(data));
console.log("File written successfully");
const filePath: string = path.join(__dirname, "reversed.txt");
console.log(filePath);
