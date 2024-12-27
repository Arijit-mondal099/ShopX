export function showToast(operation) {
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if ( operation === "add") {
        toast.textContent = "Product has been added.";
    } else {
        toast.textContent = "Product has been removed.";
    }

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}