import { addToCard } from "./addToCard";
import { quantityToggle } from "./quantityToggle.js";

const itemCardsContainer = document.querySelector(".itemCardsContainer");
const productsContainer = document.querySelector(".productsContainer");

export function showProductsCard(products) {
  if (!products) return false;

  products.forEach((product) => {
    // destructore all datas
    const {
      id,
      name,
      category,
      brand,
      price1,
      price2,
      stock,
      description,
      imgs,
    } = product;

    // clone card from card template
    const productCardClone = document.importNode(
      productsContainer.content,
      true
    );

    // set all card a unique id
    productCardClone
      .querySelector("#cardValue")
      .setAttribute("id", `card${id}`);

    // show all data
    productCardClone.querySelector(".tag").textContent = category;
    productCardClone.querySelector(".productImg").src = imgs;
    productCardClone.querySelector(".productName").textContent = name;
    productCardClone.querySelector(".productDec").textContent = description;
    productCardClone.querySelector(".currMoney").textContent = `₹${price1}`;
    productCardClone.querySelector(".money").textContent = `₹${price2}`;
    productCardClone.querySelector(
      ".stock"
    ).textContent = `Total Stock Avalabale ${stock}`;

    // check stock is avilable or not
    productCardClone.querySelector(".display").textContent =
      stock !== "comming soon" ? 1 : 0;
    productCardClone
      .querySelector(".display")
      .setAttribute("data-quantity", `${stock !== "comming soon" ? 1 : 0}`);

    // event to add and sub products
    productCardClone
      .querySelector(".box")
      .addEventListener("click", (event) => {
        quantityToggle(event, id, stock);
      });

    // add to cart event
    productCardClone
      .querySelector(".addToCardbtn")
      .addEventListener("click", (event) => {
        event.preventDefault();
        addToCard(id);
      });

    // append card into container
    itemCardsContainer.appendChild(productCardClone);
  });
}
