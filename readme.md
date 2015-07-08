# node-peak-finding [![Build Status](https://travis-ci.org/vinimdocarmo/node-peak-finding.svg?branch=master)](https://travis-ci.org/vinimdocarmo/node-peak-finding) [![Coverage Status](https://coveralls.io/repos/vinimdocarmo/node-peak-finding/badge.svg)](https://coveralls.io/r/vinimdocarmo/node-peak-finding) [![devDependency Status](https://david-dm.org/vinimdocarmo/node-peak-finding/dev-status.svg)](https://david-dm.org/vinimdocarmo/node-peak-finding) [![Code Climate](https://codeclimate.com/github/vinimdocarmo/node-peak-finding/badges/gpa.svg)](https://codeclimate.com/github/vinimdocarmo/node-peak-finding)

Find an element in an array where the element peak.

**A element is a peak if this element is larger or equal to both the elements on its sides.**

## Install

```
$ npm install --save peak-finding
```

## Usage

```js
var peakFinding = require('peak-finding');

peakFinding([1, 3, 4, 3, 5, 1, 3]);
//=> 4

peakFinding([1, 3, 4, 3, 5, 1, 3], { highest: true });
//=> 5
```

## Time complexity
When `options.highest` equals `false`: &Theta;(log2(n)).

When `options.highest` equals `true`: &Theta;(n).

**Note:** *n* is the length of the input list.

## API

### peakFinding(list, options)

#### list

*Required*  
Type: `Array`

#### options

##### highest

Type: `boolean`
Default: `false`

If set to `true` find the highest peak in the list, find **a** peak otherwise.

## License

MIT © [Vinícius do Carmo](http://vinimdocarmo.js.org)
