
this.path = `../json/${this.category}.json`;

export default class ProductDetails {
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }
}

init()

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

  const renderProductDetails() => {
    
  }