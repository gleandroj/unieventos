#language: pt

Funcionalidade: Manter Formulário de Avaliação de Eventos
  Com o objetivo de receber avaliações dos dias dos Eventos
  Como um "Administrador"
  Eu quero poder Inserir, Visualizar e Remover formulários de avaliação de eventos

  @positivo
  Cenário: Visualizar Formulários de Avaliação
    Dado que eu tenha realizado o cenário "Visualizar Programação (US004)"
    Quando eu clicar no botão (icone feedback) "Formulário de Avaliação"
    Então o sisteam deve me redirecionar para a "Página de Formulário de Avaliação"
    E apresentar a tabela de formulários de acordo com o exemplo

  Exemplos:
  | Título | Cadastrado Por | Qtd. Questões | Ações |
  | Formulário | Gabriel Siqueira | (icone cloud_download) Exportar (icone edit) Editar (icone delete) Deletar |
