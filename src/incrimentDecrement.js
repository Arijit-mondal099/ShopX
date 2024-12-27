import { getCardProductsDB } from "./getCardProducts.js";
import { showAddToCardProducts } from "./showAddToCardProducts.js";

export function incrimentDecrement(event, itemId, stock, price) {
  // fetch current card
  const currProductCard = document.querySelector(`#card${itemId}`);

  // fetch all card data from db
  const cardProducts = getCardProductsDB();

  // fetch current card quantity(display)
  const productQuantity = currProductCard.querySelector(".display");
  let quantity = parseInt(productQuantity.textContent) || 1;

  // check stock is avilable or not
  if (event.target.className === "addOne") {
    if (quantity < stock) quantity++;
  } else if (event.target.className === "subOne") {
    if (quantity > 1) quantity--;
  }

  // calculate total price of product
  const totalPrise = price * quantity;

  // find the product from db and update new price and quantity
  const existing = cardProducts.find((ele) => ele.itemId == itemId);
  if (existing) {
    existing.quantity = quantity;
    existing.totalPrise = totalPrise;
  }

  // set updated products into db
  localStorage.setItem("cardProducts", JSON.stringify(cardProducts));

  // display update quantity
  productQuantity.textContent = quantity;
  // render all updated products again
  showAddToCardProducts(cardProducts);
}
