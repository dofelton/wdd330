import { getLocalStorage, itemsInCart } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  if (cartItems) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
  } else {
    const htmlItems = `<h3>The cart is Empty</h3>`
    document.querySelector(".product-list").innerHTML = htmlItems;
  }
  total(cartItems);
  itemsInCart();
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function total(cartItems) {
  var displayTotal = document.querySelector(".cart-total");
  if (cartItems.length > 0) {
    var finalPrice = 0;
    cartItems.forEach(element => {
      finalPrice += element.FinalPrice;
    });
    displayTotal.innerHTML = `<b>Total</b>: $${finalPrice}`;
    displayTotal.style.display = "block";
  } else {
    displayTotal.style.display = "none";
  }
}

renderCartContents();
