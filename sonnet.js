
// Get the contents of a div into a variable
var sonnetText = document.getElementById("sonnet").innerHTML;
console.log(sonnetText);

// Log the index START of the word "orphans"
var orphanIndex = sonnetText.indexOf("orphans");
console.log(orphanIndex);

// Output the number of characters in the sonnet
var sonnetLength = sonnetText.length;
console.log(sonnetLength);

// Replace the first occurance of the string "winter" with "yuletide"
var replacedWithYultide = sonnetText.replace("winter", "yuletide");
console.log(replacedWithYultide);

// Replace all occurances of the string "the" with "a large"
var replaceAllThes = sonnetText.replace(/the /g, "a large ");
console.log(replaceAllThes);

// Set the content of the sonnet div with the new string
document.getElementById("sonnet").innerHTML = replaceAllThes;

