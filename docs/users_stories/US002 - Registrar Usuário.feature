#language: pt

Funcionalidade: Registrar Usuário
    Com o objetivo de me cadastrar no sistema
    Como um usuário
    Eu quero poder me cadastrar no sistema para poder visualizar
    as programações dos dias do evento SITES 
    e demais informações disponíveis no sistema

    Regras e Campos do Registro:
        | Campos | Regas |
        | Nome Completo  | Obrigatório, Máximo 50 caracteres |
        | Imagem do Perfil | Opicional |
        | Sexo | Obrigatório |
        | Data de Nascimento | Obrigatório, Validação de data |
        | E-mail | Obrigatório, Validação de e-mail, Deve ser único |
        | Senha | Obrigatório, Confirmada, Mínimo 6 dígitos |
        | Vínculo | Obrigatório, (Aluno, Servidor, Comunidade) |
        | Matrícula | Obrigatório se o vínculo for diferente de Comunidade |

    @positivo
    Cenário: Registrar usuário com informações válidas
        Dado que preenchi todos os campos <campos> corretamente de acordo com sua regas <regas>
        Quando clicar no botão "Cadastrar"
        Então o sistema deve me autenticar
        E redirecionar para a "Página de Programação"
        E apresentar a mensagem "Seja bem-vindo ao Uni Eventos <nome do usuário>!" 

    @negativo
    Cenário: Registrar usuário com informações inválidas
        Dado que preenchi todos algum dos campos <campos> divergente de alguma das suas regras <regras>
        Quando eu tiver preenchido
        Então o sistema deve apresentar abaixo do campo a mensagem <mensagem> referente a regra <regra>
        E desativar o botão "Cadastrar"
    
    Exemplos:
        | Rega | Mensagem  |
        | Obrigatório | Preencha esse campo. |
        | Máximo 50 caracteres | Tamanho máximo 50 caracteres. |
        | Validação de data | <nome do campo> inválido. |
        | Validação de e-mail | <nome do campo> inválido. |
        | Confirmada | <nome do campo> não confere. | 
        | Mínimo 6 dígitos | Tamanho mínimo 6 caracteres. |

    @negativo
    Cenário: Registrar usuário com e-mail já cadastrado
        Dado que preenchi todos os campos <campos> corretamente com suas regras <regras>
        Quando eu preencher no campo "E-mail" um e-mail <e-mail> já cadastrado no sistema
        Então o sistema deve apresentar abaixo do campo a mensagem "E-mail já cadastrado no sistema"
        E desativar o botão "Cadastrar"

    Exemplos: 
        | e-mail |
        | gabrielleandrojunior@live.com |