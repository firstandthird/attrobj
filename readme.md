# attrobj

Transforms data-attributes into an array based on key.

## Installation

```sh
npm install attrobj
```

## Example usage

```html
<div id="example" data-example-name="Test Name" data-example-color="red"></div>
```

```js
const attrobj = require('attrobj');
const el = document.getElementById('example');

const exampleData = attrobj('example', el);

console.log(exampleData);
// { name: 'Test Name', color: 'red' }
```

### Global Values

Data can be pulled from `window.*` by using `data-<somekey>-global-<valuename>`.

Example:

```html
<div id="example2" data-weather-global-rain="rain" data-weather-cloudy="true"></div>
```

```js
window.rain = '2.1';

const attrobj = require('attrobj');
const el = document.getElementById('example2');

const exampleData = attrobj('weather', el);

console.log(exampleData);
// { rain: '2,1', cloudy: 'true' }
```
