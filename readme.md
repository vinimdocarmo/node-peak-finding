# peak-finding [![Build Status](https://travis-ci.org/vinimdocarmo/peak-finding.svg?branch=master)](https://travis-ci.org/vinimdocarmo/peak-finding)

> Peak finding module 

Find an element in the array where the element peaks. Notice that the method does not return the the highest peak, it just finds and returns a peak.

## Install

```
$ npm install --save peak-finding
```

## Usage

```js
var peakFinding = require('peak-finding');

peakFinding([1, 3, 4, 3, 5, 1, 3]);
//=> 4
```

## API

### peakFinding(list)

#### list

*Required*  
Type: `Array`

## License

MIT © [Vinícius do Carmo](http://vinimdocarmo.js.org)
