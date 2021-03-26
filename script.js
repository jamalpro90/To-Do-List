const input = document.querySelector('input');

// Buat fungsi reset / clear
const reset = document.querySelector('.btn-reset');
reset.addEventListener('click', () => input.value = '');


// Buat dan pasang tombol Close
let li = document.querySelectorAll('li');
li.forEach(e => {
  const span = document.createElement('span');
  span.classList.add('close');
  e.appendChild(span);
});


// Fungsi tombol Close
const close = document.querySelectorAll('.close');
close.forEach(close => {close.addEventListener('click', (e) => {
  e.target.parentNode.style.display = 'none';
})});


// Fungsi tombol add 
const submit = document.querySelector('.btn-submit');
submit.addEventListener('click', (e) => {
  let inputValue = input.value;
  let li = document.createElement('li');
  let text = document.createTextNode(inputValue);
  li.appendChild(text);

  if(inputValue === '') {
    return false;
  } else {
    document.querySelector('ul').appendChild(li);
  }

  document.querySelector('input').value = ''; // agar bersih saat tambah list 
  
  let span = document.createElement('span');
  span.classList.add('close');
  li.appendChild(span)

  let close = document.querySelectorAll('.close');
  close.forEach(e => {e.addEventListener('click', (e) => {
    e.target.parentNode.style.display = 'none';
  })});
});


