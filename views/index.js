// alert("WOW")

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
    // console.log('item being added');
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
    // await fetch('');
    // window.location.href = '/addItem';
    showPopup();
}

itemBox.addEventListener('click', addItem);

// for(let i = 0; i < 4; i++) {
//     let p = itemBox.cloneNode(true);
//     collections.appendChild(p)
//     console.log("ejrbhieruhb")
// }