/* global window */

export default function(key, el) {
  const values = {};

  for (const data of Object.keys(el.dataset)) {
    if (data.startsWith(key) && data !== key) {
      let optionName = data.replace(key, '');
      let isGlobal = false;

      if (optionName.startsWith('Global')) {
        optionName = optionName.replace('Global', '');
        isGlobal = true;
      }

      optionName = `${optionName[0].toLowerCase()}${optionName.slice(1)}`;

      if (isGlobal) {
        values[optionName] = window[el.dataset[data]];
      } else {
        values[optionName] = el.dataset[data];
      }
    }
  }

  return values;
}
