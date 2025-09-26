const product = document.getElementById("product"); // Pega o input do produto pelo id
const form = document.querySelector("form"); // Pega o formulário da página
const list = document.querySelector(".items-list"); // Pega o container da lista de produtos
const footer = document.querySelector("footer.deleting"); // Pega o footer de alerta que aparece ao deletar
const footerText = footer.querySelector(".text"); // Pega o texto dentro do footer de alerta
const footerBtn = footer.querySelector(".deleting-btn"); // Pega o botão para fechar o alerta no footer

// Escuta a digitação no input do produto para permitir só letras e espaços
product.addEventListener("input", function () {
  // Remove tudo que não for letras (incluindo letras acentuadas) e espaços
  this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");p
});

// Quando o formulário for enviado (botão adicionar clicado)
form.onsubmit = (event) => {
  event.preventDefault(); // Evita que a página recarregue no submit

  const productName = product.value.trim(); // Pega o valor do input e remove espaços nas pontas
  if (productName === "") return; // Se o input estiver vazio, não faz nada

  // Cria um id único para o checkbox do item, usando timestamp
  const productId = `prod-${Date.now()}`;

  // Cria a div que vai conter o produto na lista
  const productDiv = document.createElement("div");
  productDiv.classList.add("product-added"); // Adiciona classe para estilo

  // Insere o HTML do produto dentro da div criada, com checkbox, label, texto e botão de deletar
  productDiv.innerHTML = `
    <input type="checkbox" id="${productId}" class="hidden-checkbox" />
    <label for="${productId}" class="custom"></label>
    <span class="text">${productName}</span>
    <button class="delete-btn" type="button">
      <img src="images/icons/trash.svg" alt="trash" />
    </button>
  `;

  // Remove a classe que deixa a lista escondida (se estava escondida)
  list.classList.remove("hidden");
  // Adiciona o novo produto na lista
  list.appendChild(productDiv);

  // Limpa o input para o usuário digitar o próximo item
  product.value = "";

  // Pega o botão de deletar dentro do produto recém-criado
  const deleteBtn = productDiv.querySelector(".delete-btn");
  // Adiciona evento para quando o botão de deletar for clicado
  deleteBtn.addEventListener("click", () => {
    productDiv.remove(); // Remove o produto da lista visualmente

    // Se a lista ficar vazia (sem filhos), adiciona a classe que esconde ela
    if (list.children.length === 0) {
      list.classList.add("hidden");
    }

    // Atualiza o texto do footer de alerta com o nome do item removido
    footerText.textContent = `O item "${productName}" foi removido da lista`;
    // Mostra o footer de alerta (display flex)
    footer.style.display = "flex";

    // Após 3 segundos, esconde o footer de alerta automaticamente
    setTimeout(() => {
      footer.style.display = "none";
    }, 3000);
  });
};

// Evento para o botão do footer que permite fechar o alerta antes dos 3 segundos
footerBtn.addEventListener("click", () => {
  footer.style.display = "none"; // Esconde o footer imediatamente ao clicar
});