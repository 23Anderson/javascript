var listarJs = (function(document){

    var listarGrupos = function(tBody, listaGrupos){
        var tbody = '';
	
        for (var i = 0; i < listaGrupos.length; i++) {
            tbody += '<tr>';

            tbody += '<td onclick="gruposJs.OnDirecionarManutencaoClick('+ listaGrupos[i].Id +')">'; 
            tbody += listaGrupos[i].Id;
            tbody += '</td>';
            tbody += '<td onclick="gruposJs.OnDirecionarManutencaoClick('+ listaGrupos[i].Id +')">'; 
            tbody += listaGrupos[i].Nome;
            tbody += '</td>';
            tbody += '<td onclick="gruposJs.OnDirecionarManutencaoClick('+ listaGrupos[i].Id +')">'; 
            tbody += listaGrupos[i].DataAtualizacao;
            tbody += '</td>';
            tbody += '<td>'; 
            tbody += '<a href="#"><span onclick="return deletarJs.DeletarGrupo(this)">Excluir</span></a>';
            tbody += '</td>';

            tbody += '</tr>';
        }
        
        tBody.innerHTML = tbody;
    }

    var listarPessoasGrupo = function(tBody, listaPessoasGrupo){
        var tbody = '';
	
        for (var i = 0; i < listaPessoasGrupo.length; i++) {
            tbody += '<tr>';

            tbody += '<td class="colCheckbox">'; 
            tbody += '<input type="checkbox">';
            tbody += '</td>';
            tbody += '<td>'; 
            tbody += listaPessoasGrupo[i].Id;
            tbody += '</td>';
            tbody += '<td>'; 
            tbody += listaPessoasGrupo[i].Nome;
            tbody += '</td>';
            tbody += '<td>'; 
            tbody += listaPessoasGrupo[i].Idade;
            tbody += '</td>';

            tbody += '</tr>';
        }
        
        tBody.innerHTML = tbody;
    }

    var listarPessoas = function(ddl, listaPessoas){	
        for (var i = 0; i < listaPessoas.length; i++) {
            var option = document.createElement("option");
            option.value = listaPessoas[i].Id;
            option.text = listaPessoas[i].Nome;
            ddl.appendChild(option);
        }
    }

    var listarDadosGrupo = function(txtNome, txtData, grupo) {
        txtNome.textContent = grupo.Nome;
        txtData.textContent = grupo.DataAtualizacao;
    }

    var limparPessoas = function(ddl){
        ddl.innerHTML = '<option value="-1">-- Selecione --</option>';
    }

    return {
        ListarGrupos: listarGrupos,
        ListarPessoas: listarPessoas,
        ListarPessoasGrupo: listarPessoasGrupo,
        ListarDadosGrupo: listarDadosGrupo
    };
})(document);