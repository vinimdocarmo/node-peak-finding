'use strict';

var floor = Math.floor;

module.exports = function peakFinding(list) {
	if (!Array.isArray(list)) {
		throw new TypeError('Expected an Array');
	}

	var len = list.length,
	    middleIndex = floor(len/2);

	if(list[middleIndex] < list[middleIndex - 1])
		return peakFinding(list.slice(0, middleIndex));
	else if(list[middleIndex] < list[middleIndex + 1])
		return peakFinding(list.slice(middleIndex + 1, len));
    else
		return list[middleIndex];
};
