'use strict';

var floor = Math.floor;

module.exports = function peakFinding(list) {
	if(!Array.isArray(list)) {
		throw new TypeError('Expected an Array');
	}

	var len = list.length,
		firstIndex = 0,
		lastIndex = len - 1,
	    middleIndex = floor(len/2);

	while(firstIndex <= lastIndex) {
		middleIndex = floor((firstIndex + lastIndex) / 2);

		if(list[middleIndex] < list[middleIndex - 1]) {
			lastIndex = middleIndex - 1;
		} else if(list[middleIndex] < list[middleIndex + 1]) {
			firstIndex = middleIndex + 1;
		} else {
			return list[middleIndex];
		}
	}
};
