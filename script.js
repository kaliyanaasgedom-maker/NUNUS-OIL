window.onload = function() {

    const button = document.getElementById("continueOrder");
    const details = document.getElementById("orderDetails");

    if (button && details) {
        button.onclick = function() {
            details.style.display = "block";
        };
    }

};
