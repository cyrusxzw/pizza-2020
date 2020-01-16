function renderToppings(state) {
    const parentNode = document.querySelector('.toppings');
    const { toppings, selectedToppings } = state;
    clearNode(parentNode);
    toppings.forEach(topping => {
        const { name } = topping;
        const container = document.createElement('div');
        container.className = "topping";
        const spanName = document.createElement('span');
        spanName.innerText = name;
        container.append(spanName);
        parentNode.append(container);

        if(selectedToppings.find(({ name }) => name === topping.name)) {
            container.classList.add('active');
        }

        container.onclick = function () {
            onToppingClick(state, topping);
        } 
    })
}


function onToppingClick(state, topping) {
    const { selectedToppings } = state;
    const newselectedToppings = !selectedToppings.find(({ name }) => name === topping.name) ? [...selectedToppings, { ...topping, amount: 1 }] : selectedToppings.filter(({ name }) => name !== topping.name);

    state.selectedToppings = newselectedToppings;
    render(state);
}