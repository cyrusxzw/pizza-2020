function renderConfirmationModal(state) {
    const { isDisplayModal } = state;
    const parentNode = document.querySelector('.modalContainer');
    clearNode(parentNode);
    if(!isDisplayModal) {
        return;
    }
    const modal = document.createElement('div');
    modal.className = 'modal';
    const h1 = document.createElement('h1');
    h1.innerText = 'Order Confirmation';
    const div = document.createElement('div');
    const title = document.createElement('span');
    title.innerText = 'Name: ';
    const spanName = document.createElement('span');
    spanName.innerText = 'XZW';
    const divTotal = document.createElement('div');
    const spanTotal = document.createElement('span');
    spanTotal.innerText = 'Total: ';
    const totalPrice = document.createElement('span');
    totalPrice.innerText = '$100';
    const btn = document.createElement('button');
    btn.innerText = 'Cancel';
    parentNode.append(modal);
    modal.append(h1, div, divTotal, btn);
    div.append(title, spanName);
    divTotal.append(spanTotal, totalPrice);

    btn.onclick = () => {
        state.isDisplayModal = false;
        render(state);
    }
}
