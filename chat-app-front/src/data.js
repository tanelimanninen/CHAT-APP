const chats = [
    {
      id: 'chat1',
      firstname: 'Pekka',
      lastname: 'Puupää',
      username: 'peksi',
      text: 'Haistakaa kaikki *******.',
      likes: 223,
      dislikes: 13,
      image: 'https://sites-cf.mhcache.com/t/629/492/384629492/501/501083_96234176do5dr604f3f6yb_V_96x96/lFUk5iCnszLOZXIOtc-OdfadSM4=/.jpg'
    },
    {
        id: 'chat2',
        firstname: 'Pasi',
        lastname: 'Kuikka',
        username: 'kusipaikka',
        text: 'Kävin kaupassa. Ostin kaljaa ja makkaraa. En ostanut salaattia.',
        likes: 7,
        dislikes: 1,
        image: 'https://puheenvuoro.uusisuomi.fi/wp-content/uploads/2019/08/picture-1484.png'
    },
    {
        id: 'chat3',
        firstname: 'Martta',
        lastname: 'Korhonen',
        username: 'Matrz',
        text: 'Ei mitään tärkeää...',
        likes: 40,
        dislikes: 57,
        image: 'https://static.wikia.nocookie.net/muumitalo/images/5/5f/Noita_n%C3%A4kee_lis%C3%A4%C3%A4_pilvi%C3%A4..jpg/revision/latest/scale-to-width-down/250?cb=20180714194006'
    },
    {
        id: 'chat4',
        firstname: 'Jeesus',
        lastname: 'Nasaretilainen',
        username: 'ZesuZ',
        text: 'Palasin nyt taas, jos ketään ees kiinnostaa. Siitä puheen ollen, ollaan hiljaa',
        likes: 9,
        dislikes: 5,
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/05b8ee44-de97-41a1-97f6-4bbe8e7925ce/dgjb6uv-a55a1b26-861d-4e5a-bb40-4b4c5e436e0b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA1YjhlZTQ0LWRlOTctNDFhMS05N2Y2LTRiYmU4ZTc5MjVjZVwvZGdqYjZ1di1hNTVhMWIyNi04NjFkLTRlNWEtYmI0MC00YjRjNWU0MzZlMGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OdLcV9otLfKVN5iMmmrPJLZZ6LhsyNqMg8TPnpa1YeU'
    },
    {
        id: 'chat5',
        firstname: 'Bruce',
        lastname: 'Wayne',
        username: 'batman',
        text: 'I am batman',
        likes: 92,
        dislikes: 33,
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a83bd00-b0f1-4a43-945d-e314e8f400ad/d4tnvlm-97d2c291-68e9-45c6-98cc-9dd0b8e0d633.jpg/v1/fill/w_900,h_675,q_75,strp/batman_profile_by_knight_viper_d4tnvlm-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njc1IiwicGF0aCI6IlwvZlwvMWE4M2JkMDAtYjBmMS00YTQzLTk0NWQtZTMxNGU4ZjQwMGFkXC9kNHRudmxtLTk3ZDJjMjkxLTY4ZTktNDVjNi05OGNjLTlkZDBiOGUwZDYzMy5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ddyw5y9-8nwAXpQeEiQrQT6Ry62ICpnDk1UYMS2a8Ac'
    },
];


const comments = [
    {
        id: 'comment1',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a83bd00-b0f1-4a43-945d-e314e8f400ad/d4tnvlm-97d2c291-68e9-45c6-98cc-9dd0b8e0d633.jpg/v1/fill/w_900,h_675,q_75,strp/batman_profile_by_knight_viper_d4tnvlm-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njc1IiwicGF0aCI6IlwvZlwvMWE4M2JkMDAtYjBmMS00YTQzLTk0NWQtZTMxNGU4ZjQwMGFkXC9kNHRudmxtLTk3ZDJjMjkxLTY4ZTktNDVjNi05OGNjLTlkZDBiOGUwZDYzMy5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ddyw5y9-8nwAXpQeEiQrQT6Ry62ICpnDk1UYMS2a8Ac',
        username: 'batman',
        text: 'Missä laukaisin on?'
    },
    {
        id: 'comment2',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/05b8ee44-de97-41a1-97f6-4bbe8e7925ce/dgjb6uv-a55a1b26-861d-4e5a-bb40-4b4c5e436e0b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA1YjhlZTQ0LWRlOTctNDFhMS05N2Y2LTRiYmU4ZTc5MjVjZVwvZGdqYjZ1di1hNTVhMWIyNi04NjFkLTRlNWEtYmI0MC00YjRjNWU0MzZlMGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OdLcV9otLfKVN5iMmmrPJLZZ6LhsyNqMg8TPnpa1YeU',
        username: 'ZesuZ',
        text: 'Etsi vastausta sydämestäsi'
    },
]


export default { chats, comments };