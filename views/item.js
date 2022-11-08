const deleteBtn = document.getElementById('deleteBtn')
const editBtn = document.getElementById('editBtn')
const identifier = document.getElementById('identifier')
const backdrop = document.getElementById('backdrop')
const editPopup = document.getElementById('editPopup');

async function deleteItem() {
    console.log('aaaaaaaaaaaaa')
    const id = identifier.innerHTML
    console.log('IN DELETE ITEM', id);
    let url = `http://localhost:3000/deleteItem/?id=${id}`;
    let res = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (res.status === 200) {
        console.log('Deleted successfully data...')
        return "DELETED.";
    } else {
        return `HTTP error: ${res.status}`;
    }
}

deleteBtn.addEventListener('click', deleteItem)

function showPopup() {
    document.getElementById('titleInput').setAttribute('value', document.getElementById('h2').innerText)
    document.getElementById('textInput').value = document.getElementById('description').innerHTML
    document.getElementById('documentId').value = document.getElementById('identifier').innerHTML
    console.log(document.getElementById('description').innerHTML);
    backdrop.classList.add('show')
    editPopup.classList.add('show')
}

function removePopup() {
    backdrop.classList.remove('show')
    editPopup.classList.remove('show')
}

editBtn.addEventListener('click', showPopup)
backdrop.addEventListener('click', removePopup)