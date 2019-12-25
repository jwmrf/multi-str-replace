# multi-str-replace 

A very simple way to replace one or multiple strings values in one call.

## Installation

```
npm install multi-str-replace
```

## Use example - Multi (Array of string)

```
const replace = require('multi-str-replace');

texto = "All vowels letters can be changed to the X letter in same time"

let new_texto = replace(texto,["a","e","i","o","u"],"X");
```

## Use example - Traditional (Simple string)

```
const replace = require('multi-str-replace');

texto = "All ocurrences of 'e' letter can be changed to the X letter"

let new_texto = replace(texto,"e","X");
```

### Work for future versions: 

> Suggest on github

