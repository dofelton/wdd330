// import ProductData from "./ProductData.mjs";
// import ProductListing from "./ProductList.mjs";

// const productData = new ProductData("tents");
// const element = document.querySelector(".product-list");
// const listing = new ProductListing("Tents", productData, element);
import ProductData from './ProductData.mjs';
import ProductListing from './ProductList.mjs';

const dataSourceTents = new ProductData('tents');
const element = document.querySelector(".product-list");
const dataListingTents = new ProductListing('tents', dataSourceTents, element);

await dataListingTents.init();

