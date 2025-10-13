// Armazenando dados do html.
const form = document.getElementById("add-item-form")
const itemsList = document.getElementById("items-list")
const itemDefault = itemsList.querySelector("li")
const addItem = document.getElementById("add-item")
const trash = document.querySelector(".delete-item")
// const trash = document.getElementsByClassName("delete-item")

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

// CRIAR FUNÇÃO/EVENTO PARA REMOVER LI AO CLICAR NO LIXO
// FAZER APARECER A MENSAGEM DE EXCLUSÃO
trash.addEventListener("click", () => {
  confirm("Deseja excluir o item selecionado?")
})