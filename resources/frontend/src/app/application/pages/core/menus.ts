export const menus = [
    {
        title: 'Programação',
        action: '/sites/inicio',
        icon: 'home',
        isLink: true,
        authorization: []
    },
    {
        title: 'Gerenciar Programação',
        action: '/sites/administracao',
        icon: 'event',
        isLink: true,
        authorization: [
            'administrator'
        ]
    },
    {
        title: 'Usuários',
        action: '/sites/usuarios',
        icon: 'person',
        isLink: true,
        authorization: [
            'administrator'
        ]
    },
    {
        title: 'Autorizar Check-in',
        action: '/sites/autorizar-check-in',
        icon: 'camera_alt',
        isLink: true,
        authorization: [
            'administrator',
            'auxiliary'
        ]
    },
    {
        title: 'Realizar Sorteio',
        action: 'Lottery',
        isLink: false,
        icon: 'bingo-svg',
        authorization: [
            'administrator',
            'auxiliary'
        ]
    }
];