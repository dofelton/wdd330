import ProductData from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const productId = getParam("product");
const dataSource = new ProductData("tents");

const product = new ProductDetails(productId, dataSource);
product.init();







// import { setLocalStorage, getLocalStorage, getParam } from "./utils.mjs";
// import ProductData from "./ProductData.mjs";
// const dataSource = new ProductData("tents");
// const productId = getParam("product");

// console.log(dataSource.findProductById(productId));

// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);

// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
