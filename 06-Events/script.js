function showKeyCodes(e) {
  const insert = document.getElementById('insert');

  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCodes,
    'e.code': e.code,
  };
  for (let key in keyCodes) {
    const div = document.createElement('div');
    div.className('key');
    const small = document.createElement('small');

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }
}
// mustafaakde2482
window.addEventListener('keydown', showKeyCodes);
