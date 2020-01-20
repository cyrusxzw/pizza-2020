import render from './render';

const toppings = [
    {
        name: 'Anchovy',
        price: 0.69
    },
    {
        name: 'Bacon',
        price: 0.69
    },
    {
        name: 'Basil',
        price: 0.69
    },
    {
        name: 'Chili',
        price: 0.69
    },
    {
        name: 'Mozzarella',
        price: 0.69
    },
    {
        name: 'Mushroon',
        price: 0.69
    },
    {
        name: 'Olive',
        price: 0.69
    },
    {
        name: 'Onion',
        price: 0.69
    },
]

const pizzas = [
    {
        size: 'Small',
        price: 9.99
    },
    {
        size: 'Medium',
        price: 14.99
    },  {
        size: 'Large',
        price: 19.99
    }
]

let selectedToppings = [];

const state = {
    toppings,
    pizzas,
    selectedPizza: null,
    selectedToppings,
    isDisplayModal : false,
}

//window.state = state;

window.onload = function() {
    //console.table(toppings);
   render(state);

   const submitBtn = document.querySelector('button[type = "submit"]');

   submitBtn.onclick = () => {
        state.isDisplayModal = true;
        render(state);
   }

   }

function onToppingClick(topping) {
    const { selectedToppings } = state;
    const newselectedToppings = !selectedToppings.find(({ name }) => name === topping.name) ? [...selectedToppings, { ...topping, amount: 1 }] : selectedToppings.filter(({ name }) => name !== topping.name);

    state.selectedToppings = newselectedToppings;
    render(state);
}

state.onToppingClick = onToppingClick;
window.state = state;

