var deletarJs = (function(document, utilJs){
    var deletarGrupo = function(domObj){
        var idGrupo = domObj.parentNode.parentNode.parentNode.firstElementChild.innerHTML;

        var index = utilJs.ProcurarIndexListaGrupos(idGrupo);
        utilJs.ListaGrupos.splice(index,1);

        var tBody = document.getElementById("tbodyGrupos");
        listarJs.ListarGrupos(tBody, utilJs.ListaGrupos);
        $('#tabGrupos').DataTable();
    };

    return {
        DeletarGrupo: deletarGrupo
    };
})(document, utilJs);