const convertbutton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".change-currency")

function convertvalues(){
   
    const inputcurrencyvalue = document.querySelector(".currency-value").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")
    const currencyconverted = document.querySelector(".currency-converted")
    const dolarToday = 5.2
    const euroToday = 6.2
    

    if (currencySelect.value == "dolar"){

        currencyconverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format( inputcurrencyvalue / dolarToday)

    }

    if (currencySelect.value == "euro"){

        currencyconverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"

        }).format(inputcurrencyvalue / euroToday)

    }

    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency" ,
        currency: "BRL"
    }).format(inputcurrencyvalue)

}


function changecurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "dólar americano"
        currencyImage.src= "./assets/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "euro"
        currencyImage.src= "./assets/euro.jpg"
    }

convertvalues()

}
    
currencySelect.addEventListener("change", changecurrency)
convertbutton.addEventListener("click", convertvalues)
