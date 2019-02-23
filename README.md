# apply-with
apply a (asynchronous) function to an object and return this object, similar to kotlin's apply

## Motivation

I'm tired of writing the following codes:

```javascript
let person = {}
person.name = 'foo'
// ...
return person
```

and kotlin has a beautiful function `apply`:

```kotlin
return Person().apply {
  name = 'foo'
  // ...
}
```

So, I borrow the idea.

## Installation

```bash
$ npm i apply-with
```

## Usage

### esm way
```javascript
import applyWith from 'apply-with'
```

### commonjs way
```javascript
const applyWith = require('apply-with')
```

## Example

```javascript
applyWith(
  Promise.resolve({ a: 1 }),
  it => ++it.a,
  it => { it.a += 2 }
).then(it => console.log(it.a)) // output 4
```

## API

### applyWith(sth, ...funcs)

#### parameters

* sth - start point, if it is a promise, get the resolved value as the start point
* funcs - a series of (asynchronous) functions which accept start point as the parameter. Note! these functions' return values are irrelevant

#### returns

a promise resolved to the start point applied with given functions




## Development

```bash
$ git clone https://github.com/xiechao06/apply-with
$ npm ci
$ npm run build # build
$ npm run test # test
```
