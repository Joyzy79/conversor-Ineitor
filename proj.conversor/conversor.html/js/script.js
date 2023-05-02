const button = document.getElementById('convert-button')
const select = document.getElementById('currency-selector')
const dolar = 5.2

const convertValues = () => {
const inputReais = document.getElementById('input-real').value
const realVlueText = document.getElementById('real-value-text')
const currencyValueText = document.getElementById('currency-value-text')

realVlueText.innerHTML = inputReais


realVlueText.innerHTML = new Intl.NumberFormat('pt-BR',
  { style: "currency", currency: 'BRL' }
).format(inputReais ) 

currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
  { style: "currency", currency: 'USD' }
).format(inputReais /dolar) 
}

 const changeCurrency = () => {
console.log("Fui chamada")
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)

