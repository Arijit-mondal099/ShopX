import { getCardProductsDB } from "./getCardProducts";
import { showAddToCardProducts } from "./showAddToCardProducts";
import { showAllPriceSummary } from "./showAllPriceSummary";
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
