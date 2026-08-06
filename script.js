// Show the order form
document.getElementById("continueOrder").addEventListener("click", function () {
    document.getElementById("orderDetails").style.display = "block";
    this.style.display = "none";
});

// Update total price automatically
document.getElementById("quantity").addEventListener("input", function () {
    let qty = parseInt(this.value) || 1;
    let total = qty * 550;

    document.getElementById("totalPrice").innerHTML =
        "<strong>Total Price: " + total + " ETB</strong>";
});

// Send order to WhatsApp
function sendOrder() {

    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("phoneNumber").value;
    let address = document.getElementById("address").value;
    let qty = parseInt(document.getElementById("quantity").value) || 1;
    let total = qty * 550;

    let message =
`🌿 NUNU'S Hair Oil Order

👤 Name: ${name}
📞 Phone: ${phone}
📍 Address: ${address}
🧴 Quantity: ${qty}
💰 Price per Bottle: 550 ETB
💵 Total Price: ${total} ETB`;

    window.open(
        "https://wa.me/251911626334?text=" + encodeURIComponent(message),
        "_blank"
    );
}
