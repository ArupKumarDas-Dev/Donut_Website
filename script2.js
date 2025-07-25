const form = document.getElementById("donutForm");
const donutType = document.getElementById("donutType");
const quantity = document.getElementById("quantity");
const totalDisplay = document.getElementById("totalPrice");

function calculateTotal() {
  let basePrice = parseInt(donutType.selectedOptions[0].dataset.price);
  let toppings = document.querySelectorAll('input[name="topping"]:checked');
  let toppingPrice = 0;

  toppings.forEach(t => {
    toppingPrice += parseInt(t.dataset.price);
  });

  const qty = parseInt(quantity.value);
  const total = (basePrice + toppingPrice) * qty;

  totalDisplay.textContent = total;
}

donutType.addEventListener("change", calculateTotal);
quantity.addEventListener("input", calculateTotal);
document.querySelectorAll('input[name="topping"]').forEach(checkbox =>
  checkbox.addEventListener("change", calculateTotal)
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("🎉 Your donut order has been placed!");
});
