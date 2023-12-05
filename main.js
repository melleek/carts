let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.ListCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.onclick = () => {
    body.classList.add('active');
}

closeShopping.onclick = () => {
    body.classList.remove('active');
}

let data = [
    {
        id: 1,
        name: "NEAPOLITAN PIZZA",
        img: "img/1.png",
        price: "160$"
    },
    {
        id: 2,
        name: "CHICAGO PESTO",
        img: "img/1.png",
        price: "180$"
    }
    ,
    {
        id: 3,
        name: "NEW YORK PESTO",
        img: "img/1.png",
        price: "200$"
    }
    ,
    {
        id: 4,
        name: "MARGHERITA PIZZA",
        img: "img/1.png",
        price: "250$"
    }
    ,
    {
        id: 5,
        name: " GREEK PIZZA ",
        img: "img/1.png",
        price: "340$"
    }
    ,
    {
        id: 6,
        name: "BAFLO PIZZA",
        img: "img/1.png",
        price: "550$"
    }
];

let cards = [];

function get() {

    data.forEach((item, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item")

        newDiv.innerHTML = `

            <img src="${item.img}"/>
            <div class="title">${item.name}</div>
            <div class="price">${item.price}</div>
            <button onclick="addToCart(${key})">Add to Cart</button>
        `
        
        list.appendChild(newDiv);
    })
}
get()

function addToCart(key) {
    if(cards[key] == null) {
        cards[key] = data[key]
        cards[key].quantity = 1
    }  else {
        cards[key].quantity += 1;
    }
    reloadCard()
}

function reloadCard() {
    listCard.innerHTML = '';

    let count = 0;
    let totalPrice = 0; 

    cards.forEach((value, key) => {
        totalPrice = totalPrice +  parseFloat(value.price);
        count = count + value.quantity;

        if (value !== null) {
            let newD = document.createElement('li');
            newD.classList.add("li")
            newD.innerHTML = `
               <div><img src="${value.img}"/></div>
               <div>${value.name}</div>
               <div>${value.price}</div>
               <div>${value.quantity}</div>
               <div class="all_f">
                    <button onclick="changePrice(${key}, ${value.quantity - 1})">-</button>
                    <div className="count">${value.quantity}</div>
                    <button onclick="changePrice(${key}, ${value.quantity + 1})">+</button>
               </div>
            `;
            listCard.appendChild(newD)
        }
    })
    total.innerText = parseFloat(totalPrice);
    quantity.innerText = count;
}

function changePrice(key, quantity) {
    if (quantity === 0) {
        delete cards[key];
    } else {
       cards[key].quantity = quantity;
       cards[key].price = quantity * parseFloat(data[key].price);
    }

    reloadCard();
}