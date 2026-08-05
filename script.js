window.onload = function() {

    const button = document.getElementById("continueOrder");
    const details = document.getElementById("orderDetails");

    if (button && details) {
        button.onclick = function() {
            details.style.display = "block";
        };
    function sendOrder() {

let name = document.getElementById("customerName").value;
let phone = document.getElementById("phoneNumber").value;
let address = document.getElementById("address").value;
let quantity = document.getElementById("quantity").value;

let total = quantity * 550;

let message =
"NUNU'S Hair Oil Order%0A%0A" +
"Name: " + name + "%0A" +
"Phone: " + phone + "%0A" +
"Address: " + address + "%0A" +
"Quantity: " + quantity + "%0A" +
"Total Price: " + total + " ETB";

window.open(
"https://wa.me/251911626334?text=" + message,
"_blank"
);

}
