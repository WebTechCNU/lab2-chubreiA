let arr = [
    {
        name: "boots",
        link: "images/boots1.jpg",
        description: "Кроси",
        description_2: "RS-X ELEVATED HIKE SNEAKERS",
        price: "€ 87.00",
        category: 1
    },
    {
        name: "boots 2",
        link: "images/boots2.webp",
        description: "Кроси",  
        description_2: "XETIC SCULPT ELECTRIC STORM SNEAKERS",
        price: "€ 150.00",
        category: 1
    },
    {
        name: "boots 3",
        link: "images/boots3.webp",
        description: "Кроси",
        description_2: "Advanced Telescope 150/750 EQ-320",
        price: "€ 139.00",
        category: 1
    },

    {
        name: "tshort",
        link: "images/tshort1.webp",
        description: "Футболка",
        description_2: "INDIVIDUALFINAL MEN'S FOOTBALL JERSEY",
        price: "€ 80.00",
        category: 2
    },
    {
        name: "tshort",
        link: "images/tshort2.webp",
        description: "Футболка",
        description_2: "ITALY HOME 22/23 REPLICA JERSEY MEN",
        price: "€ 82.00",
        category: 2
    },
    {
        name: "tshort",
        link: "images/tshort3.webp",
        description: "Футболка",
        description_2: "A.C. MILAN HOME 22/23 REPLICA FOOTBALL JERSEY MEN",
        price: "€ 120.00",
        category: 2
    },
    {
        name: "socks",
        link: "images/socks1.jpg",
        description: "Носки",
        description_2: "PUMA SPORT UNISEX LIGHT SNEAKER SOCKS 2 PACK",
        price: "€ 184.00",
        category: 3
    },
    {
        name: "socks",
        link: "images/socks2.webp",
        description: "Носки",
        description_2: "PUMA SPORT UNISEX LIGHT SNEAKER SOCKS 2 PACK",
        price: "€ 284.00",
        category: 3
    },
    {
        name: "socks",
        link: "images/socks3.webp",
        description: "Носки",
        description_2: "PUMA SPORT UNISEX LIGHT SNEAKER SOCKS 2 PACK",
        price: "€ 384.00",
        category: 3
    },
    {
        name: "accessories",
        link: "images/cap.webp",
        description: "Шляпа",
        description_2: "BORUSSIA DORTMUND FTBLARCHIVE CAP",
        price: "€ 84.00",
        category: 4
    },
    {
        name: "accessories",
        link: "images/bag.jpg",
        description: "Сумка",
        description_2: "MANCHESTER CITY FTBLLEGACY PORTABLE BAG",
        price: "€ 84.00",
        category: 4
    },
    {
        name: "accessories",
        link: "images/gloves.webp",
        description: "Рукавички",
        description_2: "KING 4",
        price: "€ 84.00",
        category: 4
    },
    ];
let cookie = "user subscribed";

function getElements(category) {
    let cont = document.querySelector("#container");
    let out = "<div class='row'>";
    let i = 0;
    arr.forEach(elem => {
        if (category == null || elem.category == category) {
            out += "<div class='product-list'><img class='product-item product-img' src=" + elem.link + " alt=" + elem.name + " ><h2 class='product-list'>" + elem.description + "</h2> <h3 class='product-list'>" + elem.description_2 + "</h3> <span class='price'><span class='price'>"+ elem.price +"</span> </div>"
            i++;
        }
        if (i % 3 == 0 && 1) {
            out += "</div><div class='row'>";
        }
    });
    out += "</div>";
    cont.innerHTML = out;
}

let modal = document.getElementById("myModal");
let closeBtn = document.querySelector("#closeBtn");

function close() {
    modal.style.display = "none";
}

setTimeout(() => {
    if (document.cookie != cookie) {
        modal.style.display = "block";

    }
}, 3000)

let closeTime = 5;

setInterval(() => {
    if (modal.style.display == "block" && closeTime > 0) {
        closeTime -= 1;
        closeBtn.innerHTML = closeTime + " seconds";
    } else if(closeTime <= 0){
        closeBtn.innerHTML = "&times;";
        closeBtn.addEventListener("click", close);
    }
}, 1000)


function subscribe() {
    document.cookie = cookie;
    close();
}



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}