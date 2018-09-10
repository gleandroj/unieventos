#language: pt

Funcionalidade: Manter Programação
    Com o objetivo de inserir, alterar, visualziar e inativar uma Programação no sistema
    Como um "Administrador" do sistema
    Eu quero poder inserir, alterar, visualziar e inativar uma Programação dentro do sistema

    @positivo
    Cenário: Gerenciar Programação
        Dado eu esteja autenticado
        E tenha permissão de "Administrador"
        Quando clicar no botão "Gerenciar Programação" no menu principal
        Então o sistema deve me redirecionar para página de "Gerenciar Programação"
        E deve ser apresentada a lista das Programações cadastradas

    Regras de Apresentação:
        - Serão exibidas as Programações em forma de lista
        - Serão ordenadas por data de cadastro do maior para o menor

    @positivo
    Cenário: Cadastrar Programação
        Dado que eu tenha realizado o cenário "Gerenciar Programação"
        Quando eu clicar no botão "Cadastrar Programação"
        Então o sistema deve me redirecionar para o formulário de "Cadastro de Programação"

    @positivo
    Cenário: Salvar Programação
        Dado que eu tenha realizado o cenário "Cadastrar Programação"
        E tenha preenchido todos os campos do Programação corretamente
        Quando eu clicar no botão "Salvar"
        Então o sistema deve me redirecionar para página de "Gerenciar Programação"
        E apresentar a mensagem "Programação cadastrado com sucesso!"

    @positivo
    Cenário: Editar Programação
        Dado que eu tenha realizado o cenário "Gerenciar Programação"
        Quando eu clicar no botão "Editar Programação" de algum Programação
        Então o sistema deve me redirecionar para o formulário de "Editar Programação"

    @positivo
    Cenário: Atualizar Programação
        Dado que eu tenha realizado o cenário "Editar Programação"
        E tenha preenchido todos os campos da Programação corretamente
        Quando eu clicar no botão "Salvar"
        Então o sistema deve me redirecionar para página de "Gerenciar Programação"
        E apresentar a mensagem "Programação atualizada com sucesso!"

    @positivo
    Cenário: Exportar Dados - Check-ins
        Dado que eu tenha realizado o cenário "Visualizar Programação"
        Quando eu clicar no botão "Exportar Check-ins para Excel"
        Então o sistema deve selecionar todos os check-ins do Programação 
        E exportar para o formato XLS
    
    Exemplos:
        | Matrícula | Nome Completo | Vínculo | Sexo | Avaliou o Programação? | Data do Check-in |
        | 1410732 | Gabriel Siqueira | Aluno | Masculino | Sim | 07/07/2018 |

    @positivo
    Cenário: Exportar Dados - Horás Participadas
        Dado que eu tenha realizado o cenário "Visualizar Programação"
        Quando eu clicar no botão "Exportar Total de Horas para Excel"
        Então o sistema deve selecionar todos os check-ins do Programação 
        E computar as horas para cada participante
        E exportar para o formato XLS
    
    Exemplos:
        | Matrícula | Nome Completo | Vínculo | Sexo | Avaliou o Programação? | Qtd. Horas |
        | 1410732  | Gabriel Siqueira | Aluno | Masculino | Sim | 7 |