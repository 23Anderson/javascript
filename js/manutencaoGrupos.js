var manutencaoGruposJs = (function(window, $, utilJs, listarJs){
    var fluxo = "fluxo";

    var onLoad = function(){
        var tipo = utilJs.GetStorage(fluxo);

        if(tipo == 1) {
            exibirFluxo1();
        } else if(tipo == 2){
            exibirFluxo2();
        }

        $('#tabGrupoPessoas').DataTable();
    }

    var onNovoGrupoClick = function(){
        utilJs.SetStorage(fluxo, "1");
        window.location.href = "manutencaoGrupos.html";
    }

    var onDirecionarManutencaoClick = function(idGrupo){
        utilJs.SetStorage(fluxo, "2");
        window.location.href = "manutencaoGrupos.html?idGrupo=" + idGrupo;
    }

    var exibirFluxo1 = function() {
        var ddlPessoas = document.getElementById("ddlPessoas");
        var pessoas = utilJs.GerarPessoasFake();

        listarJs.ListarPessoas(ddlPessoas, pessoas);

        var fieldset = document.getElementById("fldPessoasGrupo");
        utilJs.InibirLista(utilJs.ListaPessoasGrupo, fieldset);
    }

    var exibirFluxo2 = function() {
        var query = utilJs.GetQueryParams(document.location.search);

        var tBody = document.getElementById("tbodyGrupoPessoas");
        
        var txtNome = document.getElementById("txtNomeGrupo");
        var lblNome = document.getElementById("lblNomeGrupo");
        var txtData = document.getElementById("txtDataGrupo");
        var lblData = document.getElementById("lblDataGrupo");
        var fieldset = document.getElementById("fldIncluir");
        var botaoAcao = document.getElementById("btnAcaoGrupo");
        var botaoExcluir = document.getElementById("btnExcluir");
        var colunaCheckbox = document.getElementsByClassName("colCheckbox");

        //Fake
        var pessoasGrupo = utilJs.GerarPessoasGrupoFake();
        var grupo = utilJs.GerarGrupoFake(query.idGrupo);

        //Listagem
        listarJs.ListarPessoasGrupo(tBody, pessoasGrupo);
        listarJs.ListarDadosGrupo(lblNome, lblData, grupo);

        //Inibir componentes
        utilJs.InibirComponente(fieldset);
        utilJs.InibirComponente(txtNome);
        utilJs.InibirComponente(txtData);
        utilJs.InibirComponente(botaoExcluir);
        for(var i = 0; i < colunaCheckbox.length; i++){
            utilJs.InibirComponente(colunaCheckbox[i]);
        }

        //Mudar nome
        botaoAcao.value = "Excluir Grupo";
        //utilJs.RemoverLista(pessoas, pessoasGrupo);
    };

    return {
        OnLoad: onLoad,
        OnNovoGrupoClick: onNovoGrupoClick,
        OnDirecionarManutencaoClick: onDirecionarManutencaoClick
    };

})(window, jQuery, utilJs, listarJs);

$(document).ready(function() {
    manutencaoGruposJs.OnLoad();
} );