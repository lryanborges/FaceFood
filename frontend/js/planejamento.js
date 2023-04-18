const edit = document.querySelector('.edit')
const altEdit = document.querySelector('.altEdit')
const altAdd = document.querySelector('.altAdd')
const titleEdit = document.querySelector('.titleEdit')
const titleAdd = document.querySelector('.titleAdd')
const delet = document.querySelector('.delete')

function openEditRefeicao() {
    edit.classList.remove('hidden')
    altEdit.classList.remove('hidden')
    titleEdit.classList.remove('hidden')
}

function openAddRefeicao() {
    edit.classList.remove('hidden')
    altAdd.classList.remove('hidden')
    titleAdd.classList.remove('hidden')
}

function closeRefeicao() {
    edit.classList.add('hidden')
    altAdd.classList.add('hidden')
    altEdit.classList.add('hidden')
    titleAdd.classList.add('hidden')
    titleEdit.classList.add('hidden')
}

function openDeleteRefeicao() {
    delet.classList.remove('hidden')
}

function closeDelete() {
    delet.classList.add('hidden')   
}