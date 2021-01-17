export const pizzas = [{
        name: 'Awesome pizza',
        ingredients: [{ "name": "Tomato", "price": 0.5 }, { "name": "Sliced mushrooms", "price": 0.5 }, { "name": "Feta cheese", "price": 1 },
            { "name": "Sausages", "price": 1 }, { "name": "Sliced onion", "price": 0.5 }
        ],
        price: [{ "name": "Tomato", "price": 0.5 }, { "name": "Sliced mushrooms", "price": 0.5 }, { "name": "Feta cheese", "price": 1 },
            { "name": "Sausages", "price": 1 }, { "name": "Sliced onion", "price": 0.5 }
        ].reduce((accumV, currentV) => accumV + currentV.price, 0)
    },
    {
        name: 'Oriental',
        ingredients: [{ "name": "Tomato", "price": 0.5 }, { "name": "Sliced mushrooms", "price": 0.5 }, { "name": "Feta cheese", "price": 1 }],
        price: [{ "name": "Tomato", "price": 0.5 }, { "name": "Sliced mushrooms", "price": 0.5 }, { "name": "Feta cheese", "price": 1 }].reduce((accumV, currentV) => accumV + currentV.price, 0)
    },
    {
        name: 'kdjfkdfj',
        ingredients: [{ "name": "Tomato", "price": 0.5 }, { "name": "Sliced mushrooms", "price": 0.5 }, { "name": "Sliced onion", "price": 0.5 }],
        price: [{ "name": "Tomato", "price": 0.5 }, { "name": "Sliced mushrooms", "price": 0.5 }, { "name": "Sliced onion", "price": 0.5 }].reduce((accumV, currentV) => accumV + currentV.price, 0)
    },
];