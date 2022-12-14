// create settings field
const createSettings = (name, options) => {
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


createSettings('Cor de fundo', ['white', 'black', 'green', 'blue', 'yellow']);
createSettings('Cor da fonte', ['black', 'red', 'white']);
createSettings('Tamanho da fonte', ['8pt', '10pt', '12pt', '14pt', '20pt']);
createSettings('Espaçamento entre as linhas', ['1', 'normal', '1.5', '2.0', '3.0']);
createSettings('Tipo da fonte', ['Arial', 'Times New Roman']);