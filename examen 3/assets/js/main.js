const cart = [];
let total = 0;

function addToCart(item, price) {
  const SinIva = price;
  const ConIva = price * 0.16;
  cart.push({ item, SinIva, ConIva });
  document.getElementById(
    "cart-items"
  ).innerHTML += `<li>${item} - $${price}</li>`;
  total += price;
  document.getElementById("total").textContent = total.toFixed(2);
}

function submitOrder() {
  const name = document.getElementById("customer-name").value;
  const address = document.getElementById("customer-address").value;
  if (name && address && cart.length > 0) {
    document.getElementById("order-name").textContent = "Nombre: " + name;
    document.getElementById("order-address").textContent =
      "Dirección: " + address;
    document.getElementById("order-summary").innerHTML = cart
      .map(
        (item) =>
          `<li>${item.item} - $${item.SinIva} (IVA: $${item.ConIva.toFixed(
            2
          )})</li>`
      )
      .join("");
    const totaiva = total + cart.reduce((acc, item) => acc + item.ConIva, 0);
    document.getElementById("order-total").textContent = +totaiva.toFixed(2);
    document.getElementById("order-details").style.display = "block";
  } else {
    alert(
      "Por favor, completa todos los campos y añade al menos un artículo al carrito."
    );
  }
}
