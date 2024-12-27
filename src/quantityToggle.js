export function quantityToggle(event, itemId, itemStock) {
  // fetch current card
  const currProductCard = document.querySelector(`#card${itemId}`);

  // fetch current card quantity(display)
  const productQuantity = currProductCard.querySelector(".display");
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  // check stock is avilable or not
  if (itemStock === "comming soon") {
    quantity = 0;
  } else {
    if (event.target.className === "addOne") {
      if (quantity < itemStock) quantity++;
    } else if (event.target.className === "subOne") {
      if (quantity > 1) quantity--;
    }
  }

  // update quantity
  productQuantity.textContent = quantity;
  productQuantity.setAttribute("data-quantity", quantity.toString());
}