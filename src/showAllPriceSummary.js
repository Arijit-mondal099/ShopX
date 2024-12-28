import { getCardProductsDB } from "./getCardProducts.js";

export function showAllPriceSummary() {
  // fetch all summary containers
  const total = document.querySelector(".total");
  const tax = document.querySelector(".taxval");
  const final = document.querySelector(".final");
  const totalItem = document.querySelector(".item");

  // get all products from db and calculate all prise
  const cardProducts = getCardProductsDB();

  if (cardProducts.length > 0) { // if product is exist
    const allPrise = cardProducts.map((ele) => ele.totalPrise); // fetch all products total prise
    const totalPrice = allPrise.reduce((acc, curr) => acc + curr, 0); // add all products total prise
    // show all products summary
    totalItem.textContent = cardProducts.length;
    total.textContent = `₹${totalPrice.toFixed(2)}`;
    tax.textContent = `₹${40}`;
    final.textContent = `₹${(totalPrice + 40).toFixed(2)}`;
  } else { // if product innot exit
    totalItem.textContent = cardProducts.length;
    total.textContent = `₹${0}`;
    tax.textContent = `₹${0}`;
    final.textContent = `₹${0}`;
  }
}
