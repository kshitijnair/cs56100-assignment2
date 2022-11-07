const deleteBtn = document.getElementById('deleteBtn')
const identifier = document.getElementById('identifier')

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