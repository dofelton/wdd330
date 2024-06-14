import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  if (product) {
    try {
      var addToCart = [];
      var getCart = getLocalStorage("so-cart");
      if (getCart) {
        addToCart.push(getCart);
        addToCart.push(product);
        setLocalStorage("so-cart", addToCart);
      } else {
        setLocalStorage("so-cart", product);
      }
    } catch {
      new Error("Could not add item");
    }
  }
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
