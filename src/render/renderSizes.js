import clearNode from '../helper/clearNode';
import render from '../render';

export default function renderPizzaSize(state) {
    const { pizzas, selectedPizza } = state;
    const parentNode = document.querySelector('.pizza-container');
    clearNode(parentNode);
    pizzas.forEach((pizza)=>{
        const { size, price } = pizza;
        const div = document.createElement('div');
        div.className = 'pizza';
        const nameSpan = document.createElement('span');
        nameSpan.innerText = `${size}: `;
        const priceSpan = document.createElement('span');
        priceSpan.innerText = `$${price}`;
        parentNode.append(div);
        div.append(nameSpan, priceSpan);

        div.onclick = () => {
            state.selectedPizza = pizza;
            render(state);
        }
    })
}