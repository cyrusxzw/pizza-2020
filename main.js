window.addEventListener('DOMContentLoaded', main);



function main() {  
    const toppings = document.querySelectorAll('.topping');
    toppings.forEach(topping => {
        topping.onclick = () => {
            const total = document.querySelector('.total');
            const {total: totalValue} = total.dataset;
            let newTotalValue;
            const summaryList = document.querySelector('.summary');
            const {name, price} = topping.dataset;
            if(topping.classList.contains('active')) {
                topping.classList.remove('active');
                summaryList.querySelector(`[data-name = "${name}"]`).remove();
                newTotalValue = parseFloat(totalValue) - parseFloat(price);
            }
            else 
            {
                topping.classList.add('active');
                const spanName = document.createElement('span');
                spanName.innerText = name;
                const amountTotal = 1;
                const plusBtn = document.createElement('button');
                plusBtn.innerText = '+';
                const minusBtn = document.createElement('button');
                minusBtn.innerText = '-';
                const amount = document.createElement('span');
                amount.classList.add('amount');
                amount.innerText = `* ${amountTotal}`;
                const spanPrice = document.createElement('span');
                spanPrice.className = 'subtotal';
                spanPrice.innerText = `$${price}`;
                const li = document.createElement('li');
                li.dataset.name = name;
                li.dataset.amount = amountTotal;
                li.append(plusBtn,minusBtn, spanName, amount, spanPrice);
                summaryList.append(li);

                plusBtn.onclick = () => {
                    const newAmount = +li.dataset.amount + 1;
                    li.dataset.amount = newAmount;
                    li.querySelector('.amount').innerText = `* ${newAmount}`;
                    updatePricebyNewAmount(li.querySelector('.subtotal'), price, newAmount);
                    const {total: totalValue} = total.dataset;
                    let newTotalValue = parseFloat(totalValue) + parseFloat(price);
                    newTotalValue = newTotalValue.toFixed(2);
                    total.innerText = `$${newTotalValue}`;
                    total.dataset.total = newTotalValue;
                }

                minusBtn.onclick = () => {
                    const newAmount = +li.dataset.amount - 1;
                    if(newAmount === 0) {
                        topping.onclick();
                        return;
                    }
                    li.dataset.amount = newAmount;
                    li.querySelector('.amount').innerText = `* ${newAmount}`;
                    updatePricebyNewAmount(li.querySelector('.subtotal'), price, newAmount);
                    const {total: totalValue} = total.dataset;
                    let newTotalValue = parseFloat(totalValue) - parseFloat(price);
                    newTotalValue = newTotalValue.toFixed(2);
                    total.innerText = `$${newTotalValue}`;
                    total.dataset.total = newTotalValue;
                }

                newTotalValue = parseFloat(totalValue) + parseFloat(price);
            }

            newTotalValue = newTotalValue.toFixed(2);
            total.dataset.total = newTotalValue;
            total.innerText = `$${newTotalValue}`;
           
        }
    })
}


function updatePricebyNewAmount(subTotalSpan, price, newAmount) {
    const newSubtotal = (price * newAmount).toFixed(2);
    subTotalSpan.innerText = `$${newSubtotal}`;
}