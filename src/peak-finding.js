'use strict';

var floor = Math.floor;

module.exports = function peakFinding(list, opts) {
	if(!Array.isArray(list)) {
		throw new TypeError('Expected an Array');
	}

	opts = opts || {};
	opts.highest = opts.highest || false;

	if(opts.highest) {
		return Math.max.apply(Math, list);
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
