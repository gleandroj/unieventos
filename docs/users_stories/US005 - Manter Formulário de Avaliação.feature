#language: pt

Funcionalidade: Manter Formulário de Avaliação de Eventos
    Com o objetivo de receber avaliações dos dias dos Eventos
    Como um "Administrador"
    Eu quero poder Inserir, Visualizar e Remover formulários de avaliação de eventos

    @positivo
    Cenário: Cadastrar Formulário de Avaliação
        Dado que eu tenha realizado o cenário "Visualizar Evento" da História "US005 - Manter Evento"
        Quando eu clicar na aba de "Avaliação do Evento"
        E clicar no botão "Adicionar Avaliação"
        Então o sistema deve me apresentar o "Formulário de Cadastro de Avaliação do Evento"

    @positivo
    Cenário: Formulário de Cadastro de Avaliação do Evento - Selecionar Dia
        Dado que eu tenha realizado o cenário "Cadastrar Formulário de Avaliação"
        Quando eu selecionar o dia a ser avaliado
        Então o sistema deve permitir que eu adicione as perguntas do questionário

    @positivo
    Cenário: Formulário de Cadastro de Avaliação do Evento - Adicionar pergunta
        Dado eu tenha realizado o cenário "Formulário de Cadastro de Avaliação do Evento - Selecionar Dia"
        Quando eu selecionar o tipo da pergunta e preencher a pergunta
        E clicar no botão "Salvar Pergunta"
        Então o sistema deve apresentar na tela a representação da pergunta com as opções de "Editar" e "Remover"

    @positivo
    Cenário: Exportar Dados
        Dado que eu tenha realizado o cenário "Visualizar Evento" da História "US005 - Manter Evento"
        Quando eu clicar na aba de "Avaliação do Evento"
        E eu clicar no botão "Exportar para Excel"
        Então o sistema deve selecionar todas as avaliações do sistema e exportar para o formato XLS

    Exemplos:
        | Matrícula | Nome Completo | Sexo | Pergunta | Resposta |
        | 1410732 | Gabriel Siqueira | Masculino  | O lanche servido no evento foi de qualidade? | sim |