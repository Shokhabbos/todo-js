const addForm = document.querySelector('.add');
const list = document.querySelector('.todos')

const addToHtml = x => {
    const html = `
    <li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span class="text-light">${x}</span>
    <i class="fa-regular fa-trash-can delete"></i>
  </li>
  `
  list.innerHTML += html
}

addForm.addEventListener('submit', e => {
    e.preventDefault()
    const todo = addForm.add.value.trim();
    if(todo.length){
        addToHtml(todo)
        addForm.reset()
    }
})

list.addEventListener('click', e => {
    console.log(e);
})