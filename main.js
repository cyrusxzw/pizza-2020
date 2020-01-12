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
            else {
                topping.classList.add('active');
                const spanName = document.createElement('span');
                spanName.innerText = name;
                const spanPrice = document.createElement('span');
                spanPrice.innerText = `$${price}`;
                const li = document.createElement('li');
                li.dataset.name = name;
                li.append(spanName, spanPrice);
                summaryList.append(li);

                newTotalValue = parseFloat(totalValue) + parseFloat(price);
            }

            total.dataset.total = newTotalValue;
            total.innerText = `$${newTotalValue}`;
           
        }
    })
}
