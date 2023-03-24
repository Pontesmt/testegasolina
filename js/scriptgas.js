
function calcularCombustivel() {
    //alert('Função acionada!');
    //  console.log('Função acionada');



    var valorEtanol = document.getElementById('etanol').value;
    var valorGasolina = document.getElementById('gasolina').value;
    var infoCombustivel = document.getElementById('combustivel');

    //console.log(valorEtanol);
    //console.log(valorGasolina);

    //verificando se os campos estao diferentes de vazio


    if(valorEtanol != '' && valorGasolina != ''){
       // console.log('ok');


//exibindo a div result 
    document.getElementById('result').style.visibility='visible';


    var resultado = valorEtanol/valorGasolina;


    if(resultado > 0.7){
         infoCombustivel.innerText = 'Gasolina';
           
    }else{
        infoCombustivel.innerText = 'Etanol';
    }


    }else{
        alert('Preencha os campos do formulario!');
    }

}
