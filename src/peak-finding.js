'use strict';

var floor = Math.floor;

/**
 *
 * @param {Array} array - An array of number or a matrix (array of arrays)
 *
 * @returns {Number}
 */
module.exports = function peakFinding(array) {
	if(!Array.isArray(array)) {
		throw new TypeError('Expected an Array');
	}

	var twoDimension = Array.isArray(array[0]);

	var len = array.length,
		firstIndex = 0,
		lastIndex = len - 1,
	    middleIndex = floor(len/2);

	while(firstIndex <= lastIndex) {
		var currEl, leftEl, rightEl;

		middleIndex = floor((firstIndex + lastIndex) / 2);

		if(twoDimension) {
			var max = array[0][middleIndex],
				rowIndex = 0;

			for(var i = 1; i < len; i++) {
				if(array[i][middleIndex] > max) {
					max = array[i][middleIndex];
					rowIndex = i;
				}
			}

			currEl  = array[rowIndex][middleIndex];
			leftEl  = array[rowIndex][middleIndex - 1];
			rightEl = array[rowIndex][middleIndex + 1];
		} else {
			currEl  = array[middleIndex];
			leftEl  = array[middleIndex - 1];
			rightEl = array[middleIndex + 1];
		}

		if(currEl < leftEl) {
			lastIndex = middleIndex - 1;
		} else if(currEl < rightEl) {
			firstIndex = middleIndex + 1;
		} else {
			return currEl;
		}
	}
};
