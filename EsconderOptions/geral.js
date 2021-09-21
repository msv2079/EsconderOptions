/*
    Exemplo de criação do module pattern retirado do link abaixo
    https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
*/
var TipoPessoa = (function () {
    return {
        CarregarOpcoes: function (elem) {
            var tipoPessoa = elem.value.toLowerCase();

            $("#tipo-pessoa-opcoes option").not("[value^='" + tipoPessoa + "op']").hide();
            $("#tipo-pessoa-opcoes option[value^='" + tipoPessoa + "op']").show();
            $("#OptionDefault").show();
            $("#OptionDefault").prop("selected", true);
        }
    }
})();