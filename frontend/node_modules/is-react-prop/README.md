# Is React Prop?


[![Travis branch](https://img.shields.io/travis/lttb/is-react-prop/master.svg?style=flat)](https://travis-ci.org/lttb/is-react-prop)
[![npm version](https://img.shields.io/npm/v/is-react-prop.svg?style=flat)](https://www.npmjs.com/package/is-react-prop)

## Usage

### Recommended way

This way `checkAttr` has no overhead for initialalization and no lists of `dom-elements`.
It's also more accurate, because it detects available property for the element.

```js
import checkAttr from 'is-react-prop/checkAttr'

console.log(checkAttr('div', 'data-name')) // true
console.log(checkAttr('button', 'onClick')) // true
console.log(checkAttr('div', 'target')) // false
console.log(checkAttr(document.createElement('input'), 'onChange')) // true
```

### isReactProp

But you can also use `isReactProp` like this:

```js
import isReactProp from 'is-react-prop'

console.log(isReactProp('data-name')) // true
console.log(isReactProp('onClick')) // true
console.log(isReactProp('unknownProp')) // false
```

## How it works?

`is-react-prop` detects available property in runtime on the client, and it has minimum usage of whitelists. That's why this package is very lightweight and accurate.
So it uses whitelists on the server side just for SSR.
