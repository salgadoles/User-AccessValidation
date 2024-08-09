// FUNÇÃO PARA EDITAR UM NOME DA LISTA
function editar(i) {
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    // Ele busca no HTML o campo "nomeUser" com o valor da lista correspondendo ao índice i-1
    dadosLista.splice(dadosLista[(i - 1)], 1);
    // Remove o item da lista no índice i-1

}
 
// FUNÇÃO PARA VALIDAÇÃO DE ACESSO
function acessar() {
        // Obtém o valor do campo de e-mail
        let loginEmail = document.getElementById('loginEmail').value;
        // Obtém o valor/produto do campo de e-mail
        let loginSenha = document.getElementById('loginSenha').value;
        // Obtém o valor do campo de senha
        if (!loginEmail || !loginSenha) {
        // Para verificar se os campos de e-mail e senha estão preenchidos

            alert("Favor preencher todos os campos");
        // Exibe um alerta se algum dos campos estiver vazio

        } else {
            window.location.href = 'cadastro.html';
            // manda para a página de cadastro se os campos estiverem preenchidos
        }
    }
 
// ARRAY PARA ARMAZENAR NOMES DE USUÁRIOS
var dadosLista = [];
 
// FUNÇÃO PARA SALVAR UM NOME NO ARRAY E ATUALIZAR A LISTA
function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;
    // pega o valor do campo 'nomeUser'
    
    if (nomeUser) {
        // Verifica se o nome não está vazio
        dadosLista.push(nomeUser);
        // Adiciona o nome na minha array 'dadosLista' com push
        
        criaLista();
        
        document.getElementById('nomeUser').value = "";
        // Limpa o campo após o salvamento
    } else {
        
        alert("Favor informe um nome para cadastro");
        // Exibe um alerta se o nome estiver vazio
    }
}
 
// FUNÇÃO PARA CRIAR E EXIBIR A LISTA DE USUÁRIOS
function criaLista() {
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    // Inicia a tabela com o cabeçalho
 
    for (let i = 0; i <= (dadosLista.length - 1); i++) {
           // Itera sobre o array 'dadosLista' para preencher a tabela
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
          // Adiciona uma nova linha na tabela para cada usuário
        document.getElementById('tabela').innerHTML = tabela;
          // Atualiza o conteúdo da tabela no HTML
    }
}
 
// FUNÇÃO PARA EDITAR NOMES NA LISTA
function editar(i) {
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
     // Preenche o campo 'nomeUser' com o nome a ser editado, usando o índice i-1
    dadosLista.splice(dadosLista[(i - 1)], 1);
     // Remove o nome da lista, preparando para a edição
}
 
// FUNÇÃO PARA EXCLUIR UM NOME DA LISTA
function excluir(i) {
    dadosLista.splice((i - 1), 1)
     // Remove o nome do array 'dadosLista' usando o índice i-1;
    document.getElementById('tabela').deleteRow(i);
      // Remove a linha correspondente na tabela HTML
}

 