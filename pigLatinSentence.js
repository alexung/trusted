'use strict';

var reverseAllButPunc = require('./reverseAllButPunc.js');

var  pigLatinSentence = function(sentence) {

 	if ((typeof sentence) != 'string') {
		return "You have not input a string. Please try again!";
	} else {
    	var wordArr = sentence.split(' '),
		resultArr = [];
	}
	
	for (var i = 0; i < wordArr.length; i++) {
		resultArr.push(reverseAllButPunc(wordArr[i]));
	}

	return resultArr.join(' ');
}

module.exports = pigLatinSentence;