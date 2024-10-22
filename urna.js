function construtor(){
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

function validaButtonUrna(){
    
}


