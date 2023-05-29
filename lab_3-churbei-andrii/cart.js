let cartItems = [];

function addToCart(name, price, quantity) {
    const item = { 
    name: name,
    price: price,
    quantity: quantity
  };
  
  cartItems.push(item);
  alert("Товар додано до кошика!");
  console.log(cartItems)
  renderCartItems();
}

function renderCartItems() {
    const cartContainer = document.querySelector("#cartItems");
    cartContainer.innerHTML = "";
  
    if (cartItems.length === 0) {
      cartContainer.innerHTML = "<p>Кошик порожній</p>";
      return;
    }
  
    cartItems.forEach(item => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");
      itemElement.innerHTML = `
        <img src="${item.link}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h3>${item.description}</h3>
          <p>${item.description_2}</p>
          <p>Ціна: ${item.price}</p>
          <p>Кількість: ${item.quantity}</p>
        </div>
        <button class="btn btn-remove" onclick="removeFromCart('${item.name}')">Видалити</button>
      `;
      cartContainer.appendChild(itemElement);
    });
  }
  
