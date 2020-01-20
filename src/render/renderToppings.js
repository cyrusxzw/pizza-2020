import clearNode from '../helper/clearNode';

export default function renderToppings(state) {
    const parentNode = document.querySelector('.toppings');
    const { toppings, selectedToppings, onToppingClick } = state;
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
            onToppingClick(topping);
        } 
    })
}
