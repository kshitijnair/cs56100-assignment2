// alert("WOW")

const itemBox = document.getElementById('addItem')
const collections = document.getElementById('collections')

async function addItem() {
    console.log('item being added');
    let url = 'http://localhost:3000/addItem';
    let data = {'name': 'John Doe', 'occupation': 'Aur Doe'};
    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    console.log(res.status === 200)
    if (res.ok) {
        // let ret = await res.json();
        console.log('added successfully')
        alert('dunnn')
        return "OKURR";

    } else {
        return `HTTP error: ${res.status}`;
    }
    // await fetch('');
    // window.location.href = '/addItem';
}

itemBox.addEventListener('click', addItem);

// for(let i = 0; i < 4; i++) {
//     let p = itemBox.cloneNode(true);
//     collections.appendChild(p)
//     console.log("ejrbhieruhb")
// }