const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
  // form gonderdıgımız ıcın preventdefault cagırmamız gerekıyor
  e.preventDefault();
  const newItem = itemInput.value;
  if (newItem === '') {
    alert('Please add an item');
    return;
  }
  // yeni eleman olusturmak icin önce ona bir list elemanı olusturuyoruz
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);
  itemList.appendChild(li);
  itemInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  // iconu aldıktan sonra button child ina bunu eklıyoruz
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
  // bu ikon fonksiyonunu "createButton" fonksiyonuna gonderıyoruz !
}

// event listeners
itemForm.addEventListener('submit', addItem);
