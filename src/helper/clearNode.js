export default function clearNode(parentNode) {
    while(parentNode.firstChild){
        parentNode.removeChild(parentNode.firstChild);
    }
}