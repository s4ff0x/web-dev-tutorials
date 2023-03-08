const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const div = document.createElement('div');
  div.innerHTML = `<span>${input.value}</span><button>remove</button>`;
  div.querySelector('span').addEventListener('click', (el) => {
    el.target.classList.toggle('line-through')
  })
  div.querySelector('button').addEventListener('click', () => {
    div.remove()
  })
  document.body.appendChild(div);
})
