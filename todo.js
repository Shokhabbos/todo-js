// refs
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// reusable func
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

// add
addForm.addEventListener('submit', e => {
    e.preventDefault()
    const todo = addForm.add.value.trim();
    if(todo.length){
        addToHtml(todo)
        addForm.reset()
    }
})

// delete

list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove()
  }
})

const filteredTodo = y => {
    Array.from(list.children)
    // QIDIRVOTGAN SOZ VA LIST ITEMNING ICHIDAGI KONTENT BIR BIRIGA MOS kelmasa
    .filter(li => !li.textContent.toLowerCase().includes(y))
    // display none
    .forEach(li => li.classList.add('filtered'))

    Array.from(list.children)
    // QIDIRVOTGAN SOZ VA LIST ITEMNING ICHIDAGI KONTENT BIR BIRIGA MOS kelSA
    .filter(li => li.textContent.toLowerCase().includes(y))
    .forEach(li => li.classList.remove('filtered'))

    
}
// search & filter
search.addEventListener('keyup', e => {
    const searching = search.value.toLowerCase().trim();
   filteredTodo(searching)



})

