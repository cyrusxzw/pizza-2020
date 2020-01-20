
import clearNode from '../helper/clearNode';

export default function renderTotal(state) {
    const parentNode = document.querySelector('.total');
    clearNode(parentNode);
    const { selectedToppings, selectedPizza } = state;
    if(selectedPizza) {
        let { price } = selectedPizza;
        let total = price;
        selectedToppings.forEach(({ price, amount })=>{
            const selectedToppingTotal = (price * amount).toFixed(2);
            total = parseFloat(total) + +selectedToppingTotal;
        })
        const totalSpan = document.createElement('span');
        parentNode.append(totalSpan);
        totalSpan.innerText = `Total: $${total.toFixed(2)}`;
    }

}