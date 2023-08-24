import "./style.css"

const mostrar = document.querySelector('#app')

 

 

 

//EVENTOS

 

document.addEventListener('DOMContentLoaded', buscarCripto);

 

 

//FUNCIONES

async function buscarCripto(){
  let url = "https://api.coincap.io/v2/assets"

    try {

        const respuestaRaw = await fetch(url)
        const criptomonedas = await respuestaRaw.json()

        imprimir(criptomonedas.data)

    } catch (error) {

        console.log(error)

    }    

}


function imprimir(arregloPuro){
  
  mostrar.innerHTML = arregloPuro.map((cripto)=>{
    let precioCripto = Number(cripto.priceUsd)
    let precioFormateado = precioCripto.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  return `
  <div class="content">
  <h1 class="criptoname">${cripto.id}</h1>
  <h3 class="criptosymbol">${cripto.symbol}</h3>
  <h2>Current price: ${precioFormateado}</h2>
  </div>
  `
  }).join("</hr>")
}
