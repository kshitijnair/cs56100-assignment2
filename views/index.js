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
    // let url = 'http://localhost:3000/addItem';
    // let data = {'name': 'John Doe', 'occupation': 'Aur Doe'};
    // let res = await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // });
    // console.log(res.status === 200)
    // if (res.ok) {
    //     // let ret = await res.json();
    //     console.log('added successfully')
    //     return "OKURR";
    // } else {
    //     return `HTTP error: ${res.status}`;
    // }
    showPopup();
}

itemBox.addEventListener('click', addItem);

async function openItem(_id) {
    window.location.href = `/getItem?id=${_id}`
}