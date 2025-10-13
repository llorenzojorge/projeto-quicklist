// Armazenando dados do html.
const form = document.getElementById("add-item-form")
const itemsList = document.getElementById("items-list")
const itemDefault = itemsList.querySelector("li")
const addItem = document.getElementById("add-item")

// Clonando a <li> inteira do items-list.
const newItem = itemDefault.cloneNode(true)

form.onsubmit = (event) => {
  event.preventDefault()
  
  // Armazenando o dado informado pelo usuário
  // const itemValue = addItem.value
  // newItem.querySelector("span").textContent = `${itemValue}`
 
}