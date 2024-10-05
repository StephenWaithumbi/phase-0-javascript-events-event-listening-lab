function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', call)
}
addingEventListener();

function call() {
    alert('I was clicked')
}