function construtor() {
    document.addEventListener('DOMContentLoaded', function () {
        function date() {
            let data = new Date();

            let dia = data.getDate();
            let mes = data.getMonth() + 1;
            let ano = data.getFullYear();

            let dataFormatada = dia + '/' + mes + '/' + ano;

            document.getElementById('dia').innerHTML = dataFormatada;
        }

        date();
    });


}

//inicia as funções
construtor();

$(document).ready(function () {
    let currentNum = 'num1'
    $('.btn-num').on('click', function () {
        //val pega o valor 
        let valor = $(this).val();
        //text atribui valor ao id
        if (currentNum === 'num1') {
            $('#num1').text(valor); // Atribui o valor ao primeiro número
            currentNum = 'num2'; // Alterna para o próximo campo
        } else if (currentNum === 'num2') {
            $('#num2').text(valor); // Atribui o valor ao segundo número
            currentNum = 'num1'; // Alterna de volta para o primeiro campo
        }
        validaButtonUrna(valor);
    });
});

// Função que processa o valor clicado
function validaButtonUrna(valor) {
    console.log('Valor clicado:', valor);

}

function corrige() {
    $('#num1').text("_");
    $('#num2').text("_");
    console.log('campos limpos')
}

corrige();

function emBranco() {
    $('#num1').text("0");
    $('#num2').text("0");
    console.log('Voto em branco')
    setTimeout(() => {
        $('#votoEmBranco').text("Voto em branco!");
        
        setTimeout(() => {
            $('#votoEmBranco').text(""); 
            $('#num1').text("_"); // Limpa num1
            $('#num2').text("_"); // Limpa num2
        }, 2000); 
    }, 100); 
}
