export function getCardProductsDB() {
    const cardProducts = localStorage.getItem("cardProducts");
    return cardProducts ? JSON.parse(cardProducts) : [];
}