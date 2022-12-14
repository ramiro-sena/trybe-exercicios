// create settings field
const createSettings = (name, key, options) => {
  const parent = document.getElementsByClassName('settings-container')[0];

  const title = document.createElement('p');
  title.innerText = name;

  const btn_group = document.createElement('div');
  btn_group.className = 'btn-group';
  btn_group.appendChild(title);

  for (let option of options) {
    let btn = document.createElement('button');
    btn.innerText = option;
    btn_group.appendChild(btn);
  }


  parent.appendChild(btn_group);
}


createSettings(
  'Cor de fundo',
  'background-color',
  ['white', 'black', 'green', 'blue', 'yellow']
);
createSettings(
  'Cor da fonte',
  'color',
  ['black', 'red', 'white']
);
createSettings(
  'Tamanho da fonte',
  'font-size',
  ['8pt', '10pt', '12pt', '14pt', '20pt']
);
createSettings(
  'Espaçamento entre as linhas',
  'line-height',
  ['1', 'normal', '1.5', '2.0', '3.0']
);
createSettings(
  'Tipo da fonte',
  'font-family',
  ['Arial', 'Times New Roman']
);