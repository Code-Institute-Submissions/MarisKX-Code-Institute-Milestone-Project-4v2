let productDetails = document.getElementById("show-product-details");
let showDetailsText = document.getElementById("show-details");
let hideDetailsText = document.getElementById("hide-details");
let showDetailsDown = document.getElementById("show-more-details-icon-down");
let showDetailsUp = document.getElementById("show-more-details-icon-up");
productDetails.style.display = "none";
function showProductdetails() {
    if (productDetails.style.display === "none") {
        productDetails.style.display = "block";
        showDetailsText.style.display = "none";
        hideDetailsText.style.display = "block";
        hideDetailsText.scrollIntoView({
            behavior: "smooth", block: "start"
        });
        showDetailsDown.style.display = "none";
        showDetailsUp.style.display = "block";
    } else {
        productDetails.style.display = "none";
        showDetailsText.style.display = "block";
        hideDetailsText.style.display = "none";
        showDetailsDown.style.display = "block";
        showDetailsUp.style.display = "none";
    }
}