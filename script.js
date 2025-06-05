const product = document.getElementById("product")
const form = document.querySelector("form")

product.addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
})

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Produto adicionado")
}



