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
    const eventList = document.querySelector('#events-list');

    console.log('form', form)
    console.log('europe', form.europe.checked);
    console.log('asia', form.asia.checked);
    const eventListItem = document.createElement('li');
    eventListItem.classList.add('event-list-item');

    const event = document.createElement('h2');
    event.textContent = form.event.value;
    eventListItem.appendChild(event);

    const date = document.createElement('h3');
    date.textContent = form.date.value;
    eventListItem.appendChild(date);

    const continents = document.createElement('h3');
    let continentValue = "";
    if (form.europe.checked) {
        continentValue = "Europe"
    } else if (form.asia.checked) {
        continentValue = "Asia"
    } else if (form.north_america.checked) {
        continentValue = "North America"
    } else if (form.south_america.checked) {
        continentValue = "South America"
    } else {
        continentValue = "Oceania"
    }
    continents.textContent = continentValue;
    eventListItem.appendChild(continents);

    const description = document.createElement('p');
    description.textContent = form.description.value;
    eventListItem.appendChild(description);

    const deleteItemButton = document.createElement("BUTTON");
    deleteItemButton.innerHTML = "Delete Event";
    eventListItem.appendChild(deleteItemButton);

    deleteItemButton.onclick = function(event) {
        eventList.removeChild(eventListItem);
    }

    return eventListItem;
}

const handleDeleteAllClick = function (event) {
    const eventList = document.querySelector('#events-list');
    eventList.innerHTML = '';
}