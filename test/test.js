'use strict';
var assert = require('assert');
var peakFinding = require('./../');

it('should return the peak 7 when the list input is [6, 7, 4, 3, 2, 1, 4, 5]', function () {
	assert.strictEqual(peakFinding([6, 7, 4, 3, 2, 1, 4, 5]), 7);
});

it('should return the peak 5 when the list input is [1, 4, 5, 3, 2, 4, 7, 6]', function() {
	assert.strictEqual(peakFinding([1, 4, 5, 3, 2, 4, 7, 6]), 5);
});

it('should return the peak 7 when the list input is [7, 5, 4, 3, 2, 1]', function() {
	assert.strictEqual(peakFinding([7, 6, 5, 4, 3, 2, 1]), 7);
});

it('should return the peak 7 when the list input is [1, 2, 3 , 4, 5, 6, 7]', function() {
	assert.strictEqual(peakFinding([1, 2, 3, 4, 5, 6, 7]), 7);
});
