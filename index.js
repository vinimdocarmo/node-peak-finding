'use strict';

var floor = Math.floor;

module.exports = function peakFinding(list) {
	if (!Array.isArray(list)) {
		throw new TypeError('Expected an Array');
	}

	var len = list.length;

	if(list[floor(len/2)] < list[floor(len/2 - 1)])
		return peakFinding(list.slice(0, floor(len/2)));
	else if(list[floor(len/2)] < list[floor(len/2 + 1)])
		return peakFinding(list.slice(len/2 + 1, len - 1));
    else
		return list[floor(len/2)];
};
