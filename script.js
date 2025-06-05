const product = document.getElementById("product")
const form = document.querySelector("form")
const footer = document.querySelector("main footer")

product.addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
})

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Produto adicionado")
    
}
try {
    footer.classList.add("item")
} catch (error){
    console.log(error)
    footer.classList.remove("item")
    alert("Não foi possível adicionar o produto, tente novamente mais tarde")
}



