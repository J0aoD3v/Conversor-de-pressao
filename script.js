function ConverterEmPsi() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmAtmNumerico = parseFloat(valor);

  var valorEmPsi = valorEmAtmNumerico * 14.7;
  console.log(valorEmPsi);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Equivale a " + valorEmPsi.toFixed(2) + " Psi";
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEmKgM2() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmAtmNumerico = parseFloat(valor);

  var valorEmKgM2 = valorEmAtmNumerico * 10332.28;
  console.log(valorEmKgM2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Equivale a " + valorEmKgM2.toFixed(2) + " Kg/m2";
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEmBar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmAtmNumerico = parseFloat(valor);

  var valorEmBar = valorEmAtmNumerico * 1.01;
  console.log(valorEmBar);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Equivale a " + valorEmBar.toFixed(2) + " Bar";
  elementoValorConvertido.innerHTML = valorConvertido;
}