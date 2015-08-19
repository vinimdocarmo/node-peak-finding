# node-peak-finding [![Build Status](https://travis-ci.org/vinimdocarmo/node-peak-finding.svg?branch=master)](https://travis-ci.org/vinimdocarmo/node-peak-finding) [![Coverage Status](https://coveralls.io/repos/vinimdocarmo/node-peak-finding/badge.svg)](https://coveralls.io/r/vinimdocarmo/node-peak-finding) [![devDependency Status](https://david-dm.org/vinimdocarmo/node-peak-finding/dev-status.svg)](https://david-dm.org/vinimdocarmo/node-peak-finding) [![Code Climate](https://codeclimate.com/github/vinimdocarmo/node-peak-finding/badges/gpa.svg)](https://codeclimate.com/github/vinimdocarmo/node-peak-finding)

Find an element in an array where the element peaks.

**In the One-Dimensional version a element is a peak if this element is larger or equal to both the elements on its 
sides.**

**In the Two-Dimensional version a element is a peak if this element is larger or equal to all the elements on its 
sides (North, south, west and east sides).**

## Install

```
$ npm install --save peak-finding
```

## Usage

```js
var peakFinding = require('peak-finding');

peakFinding([1, 3, 4, 3, 5, 1, 3]);
//=> 4

peakFinding([[23, 20, 19, 10],
			 [14, 10, 12, 11],
			 [15,  9, 11, 21],
			 [16, 11, 10, 17]]);
//=> 23
```

## Time complexity
1D Version: &Theta;(log2(n)), where *n* is the length of the input list.

2D Version: &Theta;(n \* log2(m)) or &Theta;(n \* log2(n)) if n = m, 
where *n* is the number of columns and m the number of rows.

## API

### peakFinding(list)

#### list

*Required*  
Type: `Array`

## License

MIT © [Vinícius do Carmo](http://vinimdocarmo.js.org)
