# highlight-fragment.js (written in ES6)

[![license](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/meandmax/highlight-fragment.js/master/LICENSE)
[![npm](http://img.shields.io/npm/v/highlight-fragment.js.svg?style=flat)](https://www.npmjs.com/package/highlight-fragment.js)
[![build](http://img.shields.io/travis/meandmax/highlight-fragment.js/master.svg?style=flat)](https://travis-ci.org/meandmax/highlight-fragment.js)
[![Coverage Status](https://coveralls.io/repos/meandmax/highlight-fragment.js/badge.svg?branch=master&service=github)](https://coveralls.io/github/meandmax/highlight-fragment.js?branch=master)
[![code climate](http://img.shields.io/codeclimate/github/meandmax/highlight-fragment.js.svg?style=flat)](https://codeclimate.com/github/meandmax/highlight-fragment.js)
[![devDependencies](http://img.shields.io/david/dev/meandmax/highlight-fragment.js.svg?style=flat)](https://david-dm.org/meandmax/highlight-fragment.js#info=devDependencies&view=table)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

### Install:

```
npm install highlight-fragment.js
```

### Run tests

```
npm test
```

### highlightFragment()
returns the sequence with highlighted fragment if the pattern matches, else just the sequence.

```javascript
import highlightFragment from 'highlight-fragment.js';

// result: 'm<strong>e - an</strong>dmax'
highlightFragment('me - andmax', 'ean', '[- ]*', 'strong');

// result: '0<strong>163</strong> - 3094512'
highlightFragment('0163 - 3094512', '163', '[- ]*', 'strong')
```

### Copyright

Copyright &copy; 2015 Maximilian Heinz, contributors. Released under the MIT License
