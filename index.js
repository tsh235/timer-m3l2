const input = document.createElement('input');
const paragraph = document.createElement('p');

document.body.append(input, paragraph);

let timeout = null;

input.addEventListener('input', () => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    paragraph.innerHTML = input.value;
  }, 300);
});

