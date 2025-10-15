// Armazenando dados do html.
const form = document.getElementById("add-item-form")
const itemsList = document.getElementById("items-list")
const itemDefault = itemsList.querySelector("li")
const addItem = document.getElementById("add-item")
const deleteConfirm = document.getElementById("delete-confirm")

form.onsubmit = (event) => {
  event.preventDefault()
  
  // Armazenando o dado informado pelo usuário
  const itemValue = addItem.value
  createNewItem(itemValue) 
}

function createNewItem(itemValue) {
  // Clonando a <li> inteira do items-list.
  const newItem = itemDefault.cloneNode(true)

  // Alterando o span da <li> clonada e adicionando o valor definido pelo user. 
  newItem.querySelector("span").textContent = `${itemValue}`
  return itemsList.appendChild(newItem)
}

// Add evento de click para toda a UL
itemsList.addEventListener("click", (event) => {
  // Verificando se o clique foi no botão .delete-item
  if (event.target.classList.contains("delete-item")) {
    // Armazenando o "ancestral" <li> mais próximo
    const li = event.target.closest("li")
    // Excluindo o <li> do html.
    li.remove()
    showMessageDelete()
  }
})

deleteConfirm.addEventListener("click", (event) => {
  if(event.target.classList.contains("close-msg")) {
    deleteConfirm.classList.add("hidden")
  }
})

function showMessageDelete() {
  return deleteConfirm.classList.remove("hidden")
}