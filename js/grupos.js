var gruposJs = (function(window, $, utilJs, listarJs){
    var fluxo = "fluxo";

    var tBody = document.getElementById("tbodyGrupos");
    var grupos = utilJs.GerarGruposFake();
    listarJs.ListarGrupos(tBody, grupos);
    
    var onNovoGrupoClick = function(){
        utilJs.SetStorage(fluxo, "1");
        window.location.href = "manutencaoGrupos.html";
    }

    var onDirecionarManutencaoClick = function(idGrupo){
        utilJs.SetStorage(fluxo, "2");
        window.location.href = "manutencaoGrupos.html?idGrupo=" + idGrupo;
    }

    return {
        OnNovoGrupoClick: onNovoGrupoClick,
        OnDirecionarManutencaoClick: onDirecionarManutencaoClick
    };

})(window, jQuery, utilJs, listarJs);

$(document).ready(function() {
    $('#tabGrupos').DataTable();
} );