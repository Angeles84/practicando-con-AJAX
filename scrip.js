//Trae el archivo txt
const btnTxt = document.getElementById("btnTxt");
btnTxt.onclick = traerDatosTxt;

function traerDatosTxt () {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("respuesta").innerHTML = this.responseText;
  }
  xhttp.open("GET", "archivo.txt", true);
  xhttp.send();
}

//Trae el archivo Json
const btnJson = document.getElementById("btnJson");
btnJson.onclick = traerDatosJson;
var contador = 0;

function traerDatosJson () {
  const xhttp = new XMLHttpRequest(); 
  
  xhttp.onload = function() {
    const datos = JSON.parse(this.responseText);
    const tabla = document.getElementById("respuestaTabla");
    tabla.innerHTML = "";

    for(let dato of datos) {
      contador++
      tabla.innerHTML += `
      <tr>
        <th scope="row">${contador}</th>
        <td>${dato.titulo}</td>
        <td>${dato.artista}</td>
      </tr>`;
    } 
  }
  xhttp.open("GET", "catalogo.json", true);
  xhttp.send();
}

//Trae datos de una API pública
 const traerDatosApi = (moneda) => {
  const xhttp = new XMLHttpRequest(); 
  let url = `https://mindicador.cl/api/${moneda}`;
  
  xhttp.onload = function() {
    const datos = JSON.parse(this.responseText);
    const ulDolar = document.getElementById("ulMoneda");
    ulDolar.innerHTML = "";
    console.log(datos.serie)

    let i = 0;

    for(let dato of datos.serie) {
      i++;
      ulDolar.innerHTML += `<li>${dato.fecha.substr(0,10)} | $${dato.valor}</li>`;
      if (i>=10) {
        break;
      }
    } 
  }
  xhttp.open("GET", url, true);
  xhttp.send();
 }