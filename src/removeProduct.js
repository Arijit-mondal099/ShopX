import { getCardProductsDB } from "./getCardProducts.js";
import { showAddToCardProducts } from "./showAddToCardProducts.js";
import { showAllPriceSummary } from "./showAllPriceSummary.js";
import { showToast } from "./showToast";

export function removeProduct(id) {
  // get all product
  const products = getCardProductsDB();

  // fetch all products except removed product id
  const updateProducts = products.filter((product) => product.itemId !== id);

  // toast
  showToast("removed");

  // set updated products into db
  localStorage.setItem("cardProducts", JSON.stringify(updateProducts));
  showAddToCardProducts(updateProducts);
  showAllPriceSummary();
}
