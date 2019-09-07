document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
    console.log('event', event);
    event.preventDefault();

    const eventListItem = createEventListItem(event.target);
    const eventList = document.querySelector('#events-list');
    eventList.appendChild(eventListItem);

    event.target.reset();
}

const createEventListItem = function (form) {
    console.log('form', form)
    console.log('continent', banana)
    const eventListItem = document.createElement('li');
    eventListItem.classList.add('event-list-item');

    const event = document.createElement('h2');
    event.textContent = form.event.value;
    eventListItem.appendChild(event);

    const date = document.createElement('h3');
    date.textContent = form.date.value;
    eventListItem.appendChild(date);

    // const europe = document.createElement('h3');
    // europe.textContent = form.europe.value;
    // eventListItem.appendChild(europe);

    const continent = document.getElementById('banana')
    const cont = document.createElement('h3');
    if (cont === continent.value){
        cont.textContent = form.cont.value;
        eventListItem.appendChild(cont);
        return cont
    };
    // const asia = document.createElement('h3');
    // asia.textContent = form.asia.value;
    // eventListItem.appendChild(asia);

    const description = document.createElement('h3');
    description.textContent = form.description.value;
    eventListItem.appendChild(description);

    return eventListItem;
}

const handleDeleteAllClick = function (event) {
    const eventList = document.querySelector('#events-list');
    eventList.innerHTML = '';
}