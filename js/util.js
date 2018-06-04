var utilJs = (function(window){
    var localStorage = window.localStorage;
    var listaGrupos = [];
    var listaPessoas = [];
    var listaPessoasGrupo = [];

    var setStorage = function (chave, valor){
        localStorage.setItem(chave, valor);
    };

    var getStorage = function (chave){
        return localStorage.getItem(chave);
    }

    var procurarIndexListaGrupos = function(id){
        for (var i = 0; i < listaGrupos.length; i++){
            if(listaGrupos[i].Id == id){
                return i;
            }
        }
        return -1;
    }

    var removerLista = function(listaBase, lista){
        for (var i = 0; i < listaBase.length; i++){
            for (var j = 0; j < lista.length; j++){
                if(listaBase[i].Id == lista[j].Id){
                    listaBase.splice(i, 1);
                }
            }
        }
    }

    var inibirLista = function(lista, fieldset) {
        if(lista.length > 0) {
            fieldset.classList.remove("invisivel");
        } else {
            fieldset.classList.add("invisivel");
        }
    }

    var inibirComponente = function(componente) {
        componente.classList.add("invisivel");
    }

    var exibirComponente = function(componente) {
        componente.classList.remove("invisivel");
    }

    function getQueryParams(qs) {
        qs = qs.split('+').join(' ');
    
        var params = {},
            tokens,
            re = /[?&]?([^=]+)=([^&]*)/g;
    
        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
        return params;
    }

    var gerarGruposFake = function(){
        var grupo = {};
        grupo.Id = 1;
        grupo.Nome = "Grupo Anderson";
        grupo.DataAtualizacao = "03/06/2018";
        listaGrupos.push(grupo);

        var grupo = {};
        grupo.Id = 2;
        grupo.Nome = "Grupo Isabela";
        grupo.DataAtualizacao = "10/05/2018";
        listaGrupos.push(grupo);

        var grupo = {};
        grupo.Id = 3;
        grupo.Nome = "Grupo Ono";
        grupo.DataAtualizacao = "27/02/2018";
        listaGrupos.push(grupo);

        var grupo = {};
        grupo.Id = 4;
        grupo.Nome = "Grupo Teste";
        grupo.DataAtualizacao = "06/04/2015";
        listaGrupos.push(grupo);
        
        var grupo = {};
        grupo.Id = 5;
        grupo.Nome = "Grupo Verde";
        grupo.DataAtualizacao = "26/08/1914";
        listaGrupos.push(grupo);

        return listaGrupos;
    }

    var gerarPessoasFake = function(){
        var pessoa = {};
        pessoa.Id = 1;
        pessoa.Nome = "Anderson";
        pessoa.Idade = "26";
        listaPessoas.push(pessoa);

        var pessoa = {};
        pessoa.Id = 2;
        pessoa.Nome = "Isabela";
        pessoa.Idade = "26";
        listaPessoas.push(pessoa);

        var pessoa = {};
        pessoa.Id = 3;
        pessoa.Nome = "William";
        pessoa.Idade = "24";
        listaPessoas.push(pessoa);

        var pessoa = {};
        pessoa.Id = 4;
        pessoa.Nome = "Akemi";
        pessoa.Idade = "21";
        listaPessoas.push(pessoa);

        var pessoa = {};
        pessoa.Id = 5;
        pessoa.Nome = "Massaaki";
        pessoa.Idade = "53";
        listaPessoas.push(pessoa);

        var pessoa = {};
        pessoa.Id = 6;
        pessoa.Nome = "Marta";
        pessoa.Idade = "51";
        listaPessoas.push(pessoa);

        return listaPessoas;
    }

    var gerarPessoasGrupoFake = function(){
        var pessoa = {};
        pessoa.Id = 1;
        pessoa.Nome = "Anderson";
        pessoa.Idade = "26";
        listaPessoasGrupo.push(pessoa);

        var pessoa = {};
        pessoa.Id = 3;
        pessoa.Nome = "William";
        pessoa.Idade = "24";
        listaPessoasGrupo.push(pessoa);

        var pessoa = {};
        pessoa.Id = 5;
        pessoa.Nome = "Massaaki";
        pessoa.Idade = "53";
        listaPessoasGrupo.push(pessoa);

        return listaPessoasGrupo;
    }

    var gerarGrupoFake = function(id){
        gerarGruposFake();
        var index = procurarIndexListaGrupos(id);
        return listaGrupos[index];
    }

    return {
        ListaGrupos: listaGrupos,
        ListaPessoas: listaPessoas,
        ListaPessoasGrupo: listaPessoasGrupo,
        SetStorage: setStorage,
        GetStorage: getStorage,
        ProcurarIndexListaGrupos: procurarIndexListaGrupos,
        RemoverLista: removerLista,
        InibirLista: inibirLista,
        InibirComponente: inibirComponente,
        ExibirComponente: exibirComponente,
        GetQueryParams: getQueryParams,
        GerarGruposFake: gerarGruposFake,
        GerarPessoasFake: gerarPessoasFake,
        GerarPessoasGrupoFake: gerarPessoasGrupoFake,
        GerarGrupoFake: gerarGrupoFake
    };
})(window);