/*
    Exemplo de criação do module pattern retirado do link abaixo
    https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
*/
var TipoPessoa = (function() {
    return {
        CarregarOpcoes: function(elem) {
            var tipoPessoa = elem.value.toLowerCase();
            var opcoes = document.getElementById("tipo-pessoa-opcoes").getElementsByTagName("option");
    
            var isPF = tipoPessoa == "pf";
    
            opcoes[1].className = isPF ? "show" : "hide";
            opcoes[2].className = isPF ? "show" : "hide";
            opcoes[3].className = isPF ? "hide" : "show";
            opcoes[4].className = isPF ? "hide" : "show";
        }
    }
})();