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
        title: 'Controle de Check-in',
        action: '/sites/check-in-controle',
        icon: 'camera_alt',
        isLink: true,
        authorization: [
            'administrator',
            'auxiliary'
        ]
    },
    {
        title: 'Sorteio',
        action: 'loterry',
        isLink: false,
        icon: 'bingo-svg',
        authorization: [
            'administrator',
            'auxiliary'
        ]
    }
];