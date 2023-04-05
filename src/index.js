// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;

  const subtotal = eval(price * quantity);
  product.querySelector(".subtotal span").innerText = subtotal;

  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let totalPrice = 0;

  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach((element) => {
    totalPrice += updateSubtotal(element);
  });

  document.querySelector("#total-value span").innerText = totalPrice;
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  //... your code goes here
  target.remove();
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  const createElement = event.currentTarget.parentNode.parentNode;

  const newProductName = createElement.querySelector(
    "td .new-product-name"
  ).value;
  const newProductPrice = createElement.querySelector(
    "td .new-product-price"
  ).value;

  const trElement = document.createElement("tr");
  document
    .querySelector("tbody")
    .appendChild(trElement)
    .classList.add("product");

  const newRow = `<td class="name">
      <span>${newProductName}</span>
    </td>
    <td class="price">$<span>${newProductPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;

  document.querySelector("tbody").lastChild.innerHTML = newRow;

  //Add remote event listener to the newly created row
  removeButtonEventListener();
}

function removeButtonEventListener() {
  const removeProductBtn = document.querySelectorAll(".btn.btn-remove");
  removeProductBtn.forEach((element) =>
    element.addEventListener("click", removeProduct)
  );
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here

  removeButtonEventListener();
  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
});
