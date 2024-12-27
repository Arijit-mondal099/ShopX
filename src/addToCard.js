import { getCardProductsDB } from "./getCardProducts";
import { showToast } from "./showToast";
import { displayTotalCardProducts } from "./updateCard";

export function addToCard(itemId) {
  // fetch all card data from db
  const cardProducts = getCardProductsDB();

  // fetch current product
  const currProduct = document.querySelector(`#card${itemId}`);
  const currProductImg = currProduct.querySelector(".productImg").src;
  const category = currProduct.querySelector(".tag").textContent;
  const productName = currProduct.querySelector(".productName").textContent;

  // fetch product quantity
  const productQuantity = currProduct.querySelector(".display");
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 0;

  // fetch product price
  const productPrice = parseFloat(
    currProduct.querySelector(".currMoney").textContent.split("₹")[1]
  );

  // calculate total price of product
  const totalPrise = productPrice * quantity;

  // handeling existing products
  const existing = cardProducts.find((ele) => ele.itemId == itemId);

  if (existing) {
    // update existing product
    existing.quantity += quantity;
    existing.totalPrise += totalPrise;
  } else {
    // create a new product
    if (quantity !== 0) {
      // for outof stock products
      const updatedCard = {
        itemId,
        quantity,
        totalPrise,
        currProductImg,
        category,
        productName,
      };

      // push updated valus into products card
      cardProducts.push(updatedCard);
    }
  }

  // toast
  showToast("add");

  // set products into db
  localStorage.setItem("cardProducts", JSON.stringify(cardProducts));

  // display total updated card products
  displayTotalCardProducts(cardProducts.length);
}
