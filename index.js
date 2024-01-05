const input = document.createElement('input');
const paragraph = document.createElement('p');

document.body.append(input, paragraph);

// let timeout = null;

// input.addEventListener('input', () => {
//   clearTimeout(timeout);

//   timeout = setTimeout(() => {
//     paragraph.innerHTML = input.value;
//   }, 300);
// });

const debounce = (callback, delay) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
};

const printText = () => {
  paragraph.textContent = input.value;
};

input.addEventListener('keyup', debounce(printText, 300));
