


function calculo() {
	// body...

var peso = parseFloat(document.getElementById('peso').value);
var altura = parseFloat(document.getElementById('altura').value);


	resultado =  (peso / (altura * altura)).toFixed(1);
var resultado = document.getElementById('quadrado').innerHTML = resultado;



}

var a = 0;

 a = parceint(a);


while(a < 7){

	peso = "";
	altura ="";

	calculo();
}