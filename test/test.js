'use strict';
var assert = require('assert');
var peakFinding = require('./../');

describe('1 dimension version', function () {
	it('should return the peak 7 when the list input is [6, 7, 4, 3, 2, 1, 4, 5]', function () {
		assert.strictEqual(peakFinding([6, 7, 4, 3, 2, 1, 4, 5]), 7);
	});

	it('should return the peak 5 when the list input is [1, 4, 5, 3, 2, 4, 7, 6]', function () {
		assert.strictEqual(peakFinding([1, 4, 5, 3, 2, 4, 7, 6]), 5);
	});

	it('should return the peak 7 when the list input is [7, 5, 4, 3, 2, 1]', function () {
		assert.strictEqual(peakFinding([7, 6, 5, 4, 3, 2, 1]), 7);
	});

	it('should return the peak 7 when the list input is [1, 2, 3 , 4, 5, 6, 7]', function () {
		assert.strictEqual(peakFinding([1, 2, 3, 4, 5, 6, 7]), 7);
	});
});

describe('2 dimension version', function() {
	it('should return 21 when the matrix is [[ 10,  8, 10, 10 ],' +
		                                    '[ 14, 13, 12, 11 ],' +
											'[ 15,  9, 11, 21 ],' +
											'[ 16, 17, 19, 20 ]]', function() {
		assert.strictEqual(peakFinding([[10,  8, 10, 10],
										[14, 13, 12, 11],
										[15,  9, 11, 21],
										[16, 17, 19, 20]]), 21);
	});

	it('should return 23 when the matrix is [[ 23, 20, 19, 10 ],' +
											'[ 14, 10, 12, 11 ],' +
											'[ 15,  9, 11, 21 ],' +
											'[ 16, 11, 10, 17 ]]', function() {
		assert.strictEqual(peakFinding([[23, 20, 19, 10],
										[14, 10, 12, 11],
										[15,  9, 11, 21],
										[16, 11, 10, 17]]), 23);
	});
});
