/*
    Exemplo de criação do module pattern retirado do link abaixo
    https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
*/
var TipoPessoa = (function () {
    return {
        CarregarOpcoes: function (elem) {
            var tipoPessoa = elem.value.toLowerCase();

            var opcoes = $("#tipo-pessoa-opcoes option");;

            if (tipoPessoa == "pf") {
                $(opcoes[1]).show();
                $(opcoes[2]).show();
                $(opcoes[3]).hide();
                $(opcoes[4]).hide();
            }
            else {
                $(opcoes[1]).hide();
                $(opcoes[2]).hide();
                $(opcoes[3]).show();
                $(opcoes[4]).show();
            }
        }
    }
})();