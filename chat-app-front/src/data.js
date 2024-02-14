const chats = [
    {
      id: 'chat1',
      firstname: 'Pekka',
      lastname: 'Puupää',
      username: 'peksi',
      text: 'Haistakaa kaikki *******.',
      likes: 223,
      dislikes: 13,
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/05b8ee44-de97-41a1-97f6-4bbe8e7925ce/dgjb6uv-a55a1b26-861d-4e5a-bb40-4b4c5e436e0b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA1YjhlZTQ0LWRlOTctNDFhMS05N2Y2LTRiYmU4ZTc5MjVjZVwvZGdqYjZ1di1hNTVhMWIyNi04NjFkLTRlNWEtYmI0MC00YjRjNWU0MzZlMGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OdLcV9otLfKVN5iMmmrPJLZZ6LhsyNqMg8TPnpa1YeU'
    },
    {
        id: 'chat2',
        firstname: 'Pasi',
        lastname: 'Kuikka',
        username: 'kusipaikka',
        text: 'Kävin kaupassa.',
        likes: 7,
        dislikes: 1,
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/05b8ee44-de97-41a1-97f6-4bbe8e7925ce/dgjb6uv-a55a1b26-861d-4e5a-bb40-4b4c5e436e0b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA1YjhlZTQ0LWRlOTctNDFhMS05N2Y2LTRiYmU4ZTc5MjVjZVwvZGdqYjZ1di1hNTVhMWIyNi04NjFkLTRlNWEtYmI0MC00YjRjNWU0MzZlMGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OdLcV9otLfKVN5iMmmrPJLZZ6LhsyNqMg8TPnpa1YeU'
    },
    {
        id: 'chat3',
        firstname: 'Martta',
        lastname: 'Korhonen',
        username: 'Matrz',
        text: 'Ei mitään tärkeää...',
        likes: 40,
        dislikes: 57,
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/05b8ee44-de97-41a1-97f6-4bbe8e7925ce/dgjb6uv-a55a1b26-861d-4e5a-bb40-4b4c5e436e0b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA1YjhlZTQ0LWRlOTctNDFhMS05N2Y2LTRiYmU4ZTc5MjVjZVwvZGdqYjZ1di1hNTVhMWIyNi04NjFkLTRlNWEtYmI0MC00YjRjNWU0MzZlMGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OdLcV9otLfKVN5iMmmrPJLZZ6LhsyNqMg8TPnpa1YeU'
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
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/05b8ee44-de97-41a1-97f6-4bbe8e7925ce/dgjb6uv-a55a1b26-861d-4e5a-bb40-4b4c5e436e0b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA1YjhlZTQ0LWRlOTctNDFhMS05N2Y2LTRiYmU4ZTc5MjVjZVwvZGdqYjZ1di1hNTVhMWIyNi04NjFkLTRlNWEtYmI0MC00YjRjNWU0MzZlMGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OdLcV9otLfKVN5iMmmrPJLZZ6LhsyNqMg8TPnpa1YeU'
    },
];

export default chats;