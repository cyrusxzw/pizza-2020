function renderPizzaSize(state) {
    const { pizzas } = state;
    const parentNode = document.querySelector('.pizza-container');
    clearNode(parentNode);
    pizzas.forEach(({ size, price })=>{
        const div = document.createElement('div');
        div.className = 'pizza';
        const nameSpan = document.createElement('span');
        nameSpan.innerText = `${size}: `;
        const priceSpan = document.createElement('span');
        priceSpan.innerText = `$${price}`;
        parentNode.append(div);
        div.append(nameSpan, priceSpan);
    })
}