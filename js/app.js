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

function render(state) {
    renderToppings(state);
    renderSummary(state);
    renderTotal(state);
    renderConfirmationModal(state);
    renderPizzaSize(state);
}

function clearNode(parentNode) {
    while(parentNode.firstChild){
        parentNode.removeChild(parentNode.firstChild);
    }
}


