function solve() {
  const products = Array.from(document.getElementsByClassName("product"));
  const productsListObj = {};
  const textAreaEl = document.getElementsByTagName("textarea")[0];

  products.forEach((product) => {
    const productName = product.querySelector(".product-title").textContent;
    const productPrice = product.querySelector(
      ".product-line-price"
    ).textContent;
    const addButton = product.querySelector(".product-add");

    addButton.addEventListener("click", function () {
      if (!productsListObj[productName]) {
        productsListObj[productName] = 0;
      }
      productsListObj[productName] += Number(productPrice);
      textAreaEl.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
    });
  });

  const checkoutButton = document.querySelector(".checkout");

  checkoutButton.addEventListener("click", function () {
    let totalPrice = Object.values(productsListObj).reduce(
      (accumulator, value) => accumulator + value,
      0
    );
    let productsList = Object.keys(productsListObj).join(", ");

    document.querySelectorAll(".add-product").forEach((button) => {
      button.setAttribute("disabled", "disabled");
    });

    checkoutButton.setAttribute('disabled', 'disabled')

    textAreaEl.textContent += `You bought ${productsList} for ${totalPrice.toFixed(2)}.`;
  });
}
