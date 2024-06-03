function solve() {
  const generateBtn = document.querySelectorAll('button')[0];
  const buyBtn = document.querySelectorAll('button')[1];

  const itemsTable = document.querySelector('table tbody');

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  const textEreaGenerate = document.querySelectorAll('textarea')[0];
  const textEreaBuy = document.querySelectorAll('textarea')[1];

  function generate() {
    const items = JSON.parse(textEreaGenerate.value);

    for (const item of items) {
      const newRow = document.createElement('tr');

      const cellImage = document.createElement('td');
      const image = document.createElement('img');
      image.src = item.img;
      cellImage.appendChild(image);
      newRow.appendChild(cellImage);

      const nameCell = document.createElement('td');
      const p = document.createElement('p');
      p.textContent = item.name;
      nameCell.appendChild(p);
      newRow.appendChild(nameCell);

      const priceCell = document.createElement('td');
      const p2 = document.createElement('p');
      p2.textContent = Number(item.price).toFixed(2);
      priceCell.appendChild(p2);
      newRow.appendChild(priceCell);

      const decorationCell = document.createElement('td');
      const p3 = document.createElement('p');
      p3.textContent = Number(item.decFactor).toFixed(2);
      decorationCell.appendChild(p3);
      newRow.appendChild(decorationCell);

      const inputCell = document.createElement('td');
      const checked = document.createElement('input');
      checked.type = 'checkbox';
      inputCell.appendChild(checked);
      newRow.appendChild(inputCell);

     itemsTable.appendChild(newRow);
    }
  }

  function buy() {
    const rows = document.querySelectorAll('tbody tr');
    let boughtFurniture = [];
    let totalPrice = 0;
    let count = 0;
    let decFac = 0;

    for (let i = 0; i < rows.length; i++) {
      const isChecked = rows[i].querySelector('input[type="checkbox"]').checked;
      if (isChecked) {
        const name = rows[i].children[1].querySelector('p').innerText;
        const price = parseFloat(rows[i].children[2].querySelector('p').innerText);
        const decorationFactor = parseFloat(rows[i].children[3].querySelector('p').innerText);

        boughtFurniture.push(name);
        totalPrice += price;
        decFac += decorationFactor;
        count++;
      }

    }

    const result = [
      `Bought furniture: ${boughtFurniture.join(', ')}`,
      `Total price: ${totalPrice.toFixed(2)}`,
      `Average decoration factor: ${(decFac / count).toFixed(2)}`
    ].join('\n');

    textEreaBuy.value = result;
  }
}