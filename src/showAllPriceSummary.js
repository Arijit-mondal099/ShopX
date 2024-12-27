import { getCardProductsDB } from "./getCardProducts.js";

export function showAllPriceSummary() {
  const total = document.querySelector(".total");
  const tax = document.querySelector(".taxval");
  const final = document.querySelector(".final");
  const totalItem = document.querySelector(".item");

  // get all products from db and calculate all prise
  const cardProducts = getCardProductsDB();

  if (cardProducts.length > 0) {
    const allPrise = cardProducts.map((ele) => ele.totalPrise);
    const totalPrice = allPrise.reduce((acc, curr) => acc + curr, 0);

    totalItem.textContent = cardProducts.length;
    total.textContent = `₹${totalPrice.toFixed(2)}`;
    tax.textContent = `₹${40}`;
    final.textContent = `₹${(totalPrice + 40).toFixed(2)}`;
  } else {
    totalItem.textContent = cardProducts.length;
    total.textContent = `₹${0}`;
    tax.textContent = `₹${0}`;
    final.textContent = `₹${0}`;
  }
}
