const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const tabsElement = document.querySelector('.tabs');

let todoItems = []
let currentTab = 'all'
buttonElement.addEventListener('click', () => {
  const todoItem = {
    value: inputElement.value,
    done: false,
    id: Date.now(),
  }
  todoItems.push(todoItem)
  render()
})

function render() {
  const filteredTodoItems = todoItems.filter((todoItem) => {
    if (currentTab === 'all') {
      return true
    }
    if (currentTab === 'done') {
      return todoItem.done
    }
    if (currentTab === 'undone') {
      return !todoItem.done
    }
  })
  document.body.querySelector('.todo-items').innerHTML = ''
  filteredTodoItems.forEach(todoItem => {
    const divElement = document.createElement('div');
    todoItem.done ? divElement.classList.add('complete') : divElement.classList.remove('complete')
    divElement.innerHTML = `<span>${todoItem.value}</span><button>remove</button>`
    divElement.querySelector('button').addEventListener('click', () => {
      todoItems = todoItems.filter((el) => el.id !== todoItem.id)
      render()
    })
    divElement.querySelector('span').addEventListener('click', () => {
      todoItems = todoItems.map((el) => el.id !== todoItem.id ? el : {...el, done: !el.done})
      render()
    })
    document.body.querySelector('.todo-items').appendChild(divElement);
  })
}

const tabButtons = tabsElement.querySelectorAll('button')
tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', () => {
    tabButtons.forEach((el) => {
      el.classList.remove('active')
    })
    tabButton.classList.add('active')

    currentTab = tabButton.innerText
    render()
  })
})


