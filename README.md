# apply-with
apply a (asynchronous) function to an object and return this object, similar to kotlin's apply

## Motivation

I tired of writing the following code:

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

So, I borrow the idea

## Installation

```bash
$ npm i oapply
```

## Usage

### esm way
```javascript
import applyWith from 'apply-with'
```

### commonjs way
```javascript
const applyWith = require('applyWith')
```

## Example

```javascript
applyWith(
  Promise.resolve({ a: 1 }),
  it => ++it.a,
  it => { it.a += 2 }
).then(it => console.log(it.a)) // output 4
```


## Development

```bash
$ git clone https://github.com/xiechao06/apply-with
$ npm ci
$ npm run build # build
$ npm run test # test
```
