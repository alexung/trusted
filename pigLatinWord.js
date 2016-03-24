'use strict';

var pigLatinWord = function(input) {

	var	vowelDict = {a: true,
					 e: true,
					 o: true,
					 i: true,
					 u: true,
					 y: true},
	    firstConsonants,
	    everythingAfter,
	    firstLetterCap = false,
	    startIsVowel = false;


    if (input[0] == input[0].toUpperCase()) {
    	firstLetterCap = true;
    	input = input.toLowerCase();
    }


	if (input[0] in vowelDict) {
		firstConsonants = '';
		everythingAfter = input;
		startIsVowel = true;
	}
		
	for (var i = 0; i < input.length; i++) {
		if (input[i] in vowelDict) {
			firstConsonants = input.slice(0,i);
			everythingAfter = input.slice(i);
			break;
		}
	}

	if (firstLetterCap) {
		everythingAfter = everythingAfter[0].toUpperCase() + everythingAfter.slice(1);
	}

	if (startIsVowel) {
		return everythingAfter + 'way';
	} else {
		return everythingAfter + firstConsonants + 'ay';
	}

}

module.exports = pigLatinWord;