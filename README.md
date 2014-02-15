# parenthesize

Wrap a string in parens, brackets, or whatever else you want.

## Synopsis

```javascript
var assert = require('assert')
var parenthesize = require('./')
```

`parenthesize` is a function that will wrap a given value in parenthesis:

```javascript
assert.equal('(A comment)', parenthesize("A comment"))
```

You can replace the parens by providing an alternative delimiter:

```javascript
assert.equal('[1]', parenthesize(1, '[]'))
```

If you want multi-character or other unusual delimiters, use an array for the
second argument:

```javascript
assert.equal('do\nputs "wat"\nend', parenthesize('puts "wat"', ['do\n', '\nend']))
```

## API

```ocaml
module.exports = (String, (String|Array<String>)? ) => String
```

## LIcense

MIT
