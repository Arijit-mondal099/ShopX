import { getCardProductsDB } from "./getCardProducts.js";
import { showToast } from "./showToast.js";
import { displayTotalCardProducts } from "./updateCard.js";


export function addToCard( itemId ) {
  // fetch all card data from db
  const cardProducts = getCardProductsDB();
  // fetch current product
  const currProduct = document.querySelector(`#card${itemId}`);

  // fetch current product data
  const currProductImg = currProduct.querySelector(".productImg").src;
  const category = currProduct.querySelector(".tag").textContent;
  const productName = currProduct.querySelector(".productName").textContent;
  const currStock = parseInt(currProduct.querySelector(".stock").textContent.split("Avalabale ")[1]) || 0;
  const currMoney = parseFloat(currProduct.querySelector(".currMoney").textContent.split("₹")[1]) || 0;

  // fetch product quantity
  const productQuantity = currProduct.querySelector(".display");
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 0;

  // const productPrice = parseFloat(currProduct.querySelector(".currMoney").textContent.split("₹")[1]);

  // calculate total price of product
  const totalPrise = currMoney * quantity;

  // handeling existing products
  const existing = cardProducts.find((ele) => ele.itemId == itemId);

  if ( existing ) { // update existing product
    existing.quantity += quantity;
    existing.totalPrise += totalPrise;
  } else { // create a new product
    if (quantity !== 0) { // for outof stock products
      const updatedCard = {
        itemId,
        quantity,
        totalPrise,
        currProductImg,
        category,
        productName,
        currStock,
        currMoney,
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
