'use strict';

var pigLatinSentence = require('./pigLatinSentence.js');



//========== TEST CASES =============

//works with empty string inputs
console.log("should return '':", pigLatinSentence(""));

//works with empty string inputs
console.log("should return 'You have not input a string. Please try again!':", pigLatinSentence(2));

//works with sentence inputs
console.log("should return 'Arleymay, eatway ethay ananabay!':", pigLatinSentence("Marley, eat the banana!"));

//works with single word inputs
console.log("should return 'Alphabetway':", pigLatinSentence('Alphabet'));