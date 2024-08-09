# 💻 Sistema de Gerenciamento de Usuários

### Este projeto é uma aplicação web que gerencia usuários, permitindo o cadastro, visualização, edição e exclusão de nomes de usuários, essa atividade foi proposta pelo docente [Leonardo Rocha](https://github.com/LeonardoRochaMarista/LeonardoRochaMarista) na materia de Programação Web 1. Abaixo estão as funcionalidades e propósitos detalhados do projeto:

<br>
------------------------------------------------------------------------------------------------------------------

<br>

## ⚙️ Funcionalidade

### 1. Validação de Acesso
<p>
    A função `acessar` verifica se todos os campos de entrada de e-mail e senha foram preenchidos. Se algum campo estiver vazio, um alerta é exibido solicitando que o usuário preencha todos os campos. Caso contrário, o usuário é redirecionado para a página de cadastro.
</p>

### 2. Armazenamento de Nomes em Array
<p>
    A função `salvarUser` permite que os usuários adicionem nomes a uma lista. Os nomes são armazenados em um array `dadosLista` e exibidos em uma tabela. Se o campo de nome estiver vazio, um alerta é exibido solicitando que o usuário informe um nome para cadastro.
</p>

### 3. Criação e Visualização de Lista de Usuários
<p>
    A função `criaLista` gera dinamicamente uma tabela HTML que lista todos os nomes armazenados no array `dadosLista`. Cada linha da tabela inclui botões para editar ou excluir o nome correspondente.
</p>

### 4. Edição de Nomes
<p>
    A função `editar` permite que um nome na lista seja editado. O nome selecionado é carregado no campo de entrada, e o nome original é removido da lista. A posição do nome a ser editado é passada como índice para a função.
</p>

### 5. Exclusão de Nomes
<p>
    A função `excluir` remove um nome da lista e da tabela HTML. O nome a ser excluído é selecionado com base no índice fornecido.
</p>

<br>

## Código

### Função para Validação de Acesso
```javascript
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
 
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos");
    }else{
        window.location.href = 'cadastro.html';
    }
}
```

### Função para Armazenamento de Nomes em Array
```javascript
var dadosLista = [];
 
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
    if(nomeUser){
        dadosLista.push(nomeUser);
        criaLista();
        document.getElementById('nomeUser').value = "";
    }else{
        alert("Favor informe um nome para cadastro");
    }
}
```

### Função para Criar Lista de Usuários
```javascript
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for(let i=0;i<=(dadosLista.length - 1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}
```

### Função para Editar Nomes de Lista
```javascript
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
}
```

### Função para Excluir Nome de Lista
```javascript
function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}
```

<br>

## Tecnologias Utilizadas
| Tecnologia | Tipo |
|------------|------|
|    HTML5   | Marcação |
|   JavaScript | Programação |


<br>

## Instalação do Projeto

**Para testar o projeto localmente:**

1. Crie um arquivo HTML que inclua o código JavaScript fornecido.
2. Abra o arquivo HTML em um navegador web para ver as funcionalidades em ação.

<br>

## **Descrição dos Métodos Utilizados:**

| Método              | Descrição                                                                 | Exemplo |
| ------------------- | --------------------------------------------------------------------------- | ------- |
| [**getElementById()**](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) | Retorna um elemento pelo seu ID.                                              | `document.getElementById('nomeUser');` |
| [**value**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/value) | Obtém ou define o valor de um elemento de formulário.                        | `document.getElementById('nomeUser').value;` |
| [**alert()**](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) | Exibe uma caixa de diálogo com uma mensagem.                                 | `alert("Favor preencher todos os campos");` |
| [**window.location.href**](https://developer.mozilla.org/en-US/docs/Web/API/Location/href) | Define ou obtém o URL do documento atual.                                    | `window.location.href = 'cadastro.html';` |
| [**push()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) | Adiciona um ou mais elementos ao final de um array.                          | `dadosLista.push(nomeUser);` |
| [**innerHTML**](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) | Obtém ou define o conteúdo HTML de um elemento.                              | `document.getElementById('tabela').innerHTML = tabela;` |
| [**splice()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) | Adiciona ou remove elementos de um array.                                    | `dadosLista.splice(i - 1, 1);` |
| [**deleteRow()**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteRow) | Remove uma linha de uma tabela HTML.                                         | `document.getElementById('tabela').deleteRow(i);` |

<br>

# 👨‍💻 Programador

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/140810343?v=4" width=95><br><sub>Samuel (Sal) Lima do Amaral</sub>](https://github.com/salgadoles)
| :--: |

# 👨‍🏫 Orientador

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/86802310?v=4" width=95><br><sub>Leonardo Rocha</sub>](https://github.com/LeonardoRochaMarista)
| :---: |

