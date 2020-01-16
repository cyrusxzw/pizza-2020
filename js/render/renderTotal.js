
function renderTotal(state) {
    const parentNode = document.querySelector('.total');
    clearNode(parentNode);
    const { selectedToppings } = state;
    let total = 9.99;
    selectedToppings.forEach(({ price, amount })=>{
        const selectedToppingTotal = (price * amount).toFixed(2);
        total = parseFloat(total) + +selectedToppingTotal;
    })
    const totalSpan = document.createElement('span');
    parentNode.append(totalSpan);
    totalSpan.innerText = `Total: $${total.toFixed(2)}`;
}