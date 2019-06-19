(function() {
    // To do list
    const formToAddItemsID = document.getElementById('formToAddItemsID');
    const listOfItemsID = document.getElementById('listOfItemsID');
    const parsingLocalStorageItems = JSON.parse(localStorage.getItem('items')) || [];

    function listItemsFn(e) {
        e.preventDefault();
        const itemText = (this.querySelector('[name=item]')).value;
        const item = {
            itemText,
            checkedOff: false,
            deleted: false
        };
        parsingLocalStorageItems.push(item);
        populateList(parsingLocalStorageItems, listOfItemsID);
        localStorage.setItem('items', JSON.stringify(parsingLocalStorageItems));
        this.reset();
        formToAddItemsID.style.display = 'none';
    }

    function populateList(itemArray = [], itemList) {
        itemList.innerHTML = itemArray.map((item, i) => {
        return `
            <li>
                <label class="todo">
                    <input class="todo-checkbox" type="checkbox" data-index=${i} id="item${i}" ${item.checkedOff ? 'checked' : ''} />
                    <div class="todo-switch"></div>
                    <label class="todo-label" for="item${i}">${item.itemText}</label><span data-index=${i} id="removed${i}" ${item.deleted ? true : false}>&nbsp;&nbsp;x</span>
                </label>
            </li>
        `;
        }).join('');
    }

    function checkedOffFn(e) {
        if (!e.target.matches('input')) return;
        const el = e.target;
        const index = el.dataset.index;
        parsingLocalStorageItems[index].checkedOff = !parsingLocalStorageItems[index].checkedOff;
        localStorage.setItem('items', JSON.stringify(parsingLocalStorageItems));
        populateList(parsingLocalStorageItems, listOfItemsID);
    }

    function removeItemFn(e) {
        if (!e.target.matches('span')) return;
        const element = e.target;
        const ind = element.dataset.index;
        parsingLocalStorageItems[ind].deleted = !parsingLocalStorageItems[ind].deleted;
        console.log(parsingLocalStorageItems[ind].deleted);
        parsingLocalStorageItems.splice([ind],1);
        localStorage.setItem('items', JSON.stringify(parsingLocalStorageItems));
        populateList(parsingLocalStorageItems, listOfItemsID);
    }

    formToAddItemsID.addEventListener('submit', listItemsFn);
    listOfItemsID.addEventListener('click', checkedOffFn);
    listOfItemsID.addEventListener('click', removeItemFn);

    populateList(parsingLocalStorageItems, listOfItemsID);
})()

function displayAddItem() {
    formToAddItemsID.style.display = 'block';
}