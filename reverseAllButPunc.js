'use strict';

var pigLatinWord = require('./pigLatinWord.js');

function reverseAllButPunc(word) {
	return word.replace(/[a-z]+/ig, function(w){return pigLatinWord(w)})
}

module.exports = reverseAllButPunc;