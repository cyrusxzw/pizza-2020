import renderToppings from './render/renderToppings';
import renderSummary from './render/renderSummary';
import renderTotal from './render/renderTotal';
import renderConfirmationModal from './render/renderConfirmationModal';
import renderPizzaSize from './render/renderSizes';

export default function render(state) {
    renderToppings(state);
    renderSummary(state);
    renderTotal(state);
    renderConfirmationModal(state);
    renderPizzaSize(state);
}