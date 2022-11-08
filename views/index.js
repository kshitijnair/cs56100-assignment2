const itemBox = document.getElementById('addItem')
const collections = document.getElementById('collections')
const backdrop = document.getElementById('backdrop')
const popup = document.getElementById('itemAddPopup')


function showPopup() {
    backdrop.classList.add('show')
    popup.classList.add('show')
}

function removePopup() {
    backdrop.classList.remove('show')
    popup.classList.remove('show')
}

backdrop.addEventListener('click', removePopup)

async function addItem() {
    showPopup();
}

itemBox.addEventListener('click', addItem);

async function openItem(_id) {
    window.location.href = `/getItem?id=${_id}`
}