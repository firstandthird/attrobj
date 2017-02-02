import attrobj from '../lib/attrobj';

import test from 'tape-rollup';

const init = () => {
  const container = document.createElement('div');
  container.id = 'attrobj';
  document.body.appendChild(container);

  container.innerHTML = `
    <div id="test" data-weather-raining="true" data-weather-global-rain="rain"></div>
  `;

  window.rain = '2';
};

init();

test('implementation', assert => {
  assert.equal(window.rain, '2', 'global set');
  assert.equal(typeof attrobj, 'function', 'attrobj function exists');

  assert.end();
});

test('attributes', assert => {
  const el = document.getElementById('test');
  const obj = attrobj('weather', el);

  assert.equal(typeof obj, 'object', 'attributes returned');
  assert.equal(obj.raining, 'true', 'normal value set');
  assert.equal(obj.rain, '2', 'global value');
  assert.equal(typeof obj.somethingelse, 'undefined', 'doesnt get other values');

  assert.end();
});
