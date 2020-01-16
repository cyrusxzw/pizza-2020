function renderSummary(state) {
    const { selectedToppings } = state;
    const parentNode = document.querySelector('.summary');
    clearNode(parentNode);
    selectedToppings.forEach(selectedTopping => {
 
         const { name, price, amount } = selectedTopping;
         const li = document.createElement('li');
         const spanName = document.createElement('span');
         spanName.innerText = name;
         const addBtn = document.createElement('button');
         addBtn.innerText = '+';
         const minusBtn = document.createElement('button');
         minusBtn.innerText = '-';
         const amountSpan = document.createElement('span');
         amountSpan.innerText = `* ${amount}`;
         const spanPrice = document.createElement('span');
         const subTotal = (price * amount).toFixed(2);
         spanPrice.innerText = `$${subTotal}`;
         li.append(spanName, addBtn, minusBtn, amountSpan, spanPrice);
         parentNode.append(li);
 
         addBtn.onclick = function() {
             onAddToppingClick(selectedTopping, state);
         }
 
         minusBtn.onclick = () => {
             onMinusToppingClick(selectedTopping, state);
         }
         
     })
 }

 function onAddToppingClick(topping, state) {
    const { selectedToppings } = state;
    const newSelectedToppings = selectedToppings.map((selectedTopping) => {
        const { name } = selectedTopping;
        if(name === topping.name) {
            const { amount } = topping;
            return {
                ...topping,
                amount: amount + 1,
            }
        }

        return selectedTopping;
    });

    state.selectedToppings = newSelectedToppings;
    render(state);
}

function onMinusToppingClick(topping, state) {
    const { selectedToppings } = state;
    const newSelectedToppings = selectedToppings.map((selectedTopping) => {
        const { name } = selectedTopping;
        if(name === topping.name) {
            const { amount } = topping;
            if(amount === 1){                  
                return undefined;
            }
            else {
                return {
                ...topping,
                amount: amount - 1,
                }
            }
           
        }

        return selectedTopping;
    });

    state.selectedToppings = newSelectedToppings.filter(e=>!!e);
    render(state);
}