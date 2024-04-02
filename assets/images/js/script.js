document.addEventListener('DOMContentLoaded', function () {
    var botaoSim = document.getElementById('dieta_sim');
    var botaoNao = document.getElementById('dieta_nao');
    var secaoFormulario = document.getElementById('secao-formulario');
    var mensagemDietaElemento = document.getElementById('mensagem-dieta');

    botaoSim.addEventListener('click', function() {
        secaoFormulario.style.display = 'block';
    });

    botaoNao.addEventListener('click', function() {
        secaoFormulario.style.display = 'none';
    });

    document.getElementById('formulario-dieta').addEventListener('submit', function(event) {
        event.preventDefault(); 

        var peso = document.getElementById('peso').value;
        var altura = document.getElementById('altura').value;
        var objetivo = document.getElementById('objetivo').value;
        
        var mensagemDieta = '';
        
        switch (objetivo) {
            case 'emagrecer':
                mensagemDieta = 'Para emagrecer, considere uma dieta rica em proteínas e pobre em carboidratos.';
                break;
            case 'ganhar-massa':
                mensagemDieta = 'Para ganhar massa, foque em proteínas, carboidratos complexos e gorduras saudáveis.';
                break;
            case 'manter-peso':
                mensagemDieta = 'Para manter o peso, mantenha um equilíbrio entre carboidratos, proteínas e gorduras.';
                break;
            default:
                mensagemDieta = 'Por favor, selecione uma opção válida.';
        }

        
        mensagemDietaElemento.textContent = 'Peso: ' + peso + 'kg\nAltura: ' + altura + 'cm\n' + mensagemDieta;
    });
});
