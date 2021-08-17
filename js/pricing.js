// Pricing Button Functions
const monthBtn = document.querySelector(".btn-month");
const yearBtn = document.querySelector(".btn-year");
const pricingCard = document.querySelectorAll(".pricing-card-wrapper");

yearBtn.addEventListener("click", function () {
    pricingCard[0].children[1].innerHTML = `<h2>$228 <span>/Year</span></h2>`;
    pricingCard[1].children[1].innerHTML = `<h2>$1,188 <span>/Year</span></h2>`;
    pricingCard[2].children[1].innerHTML = `<h2>$2,736 <span>/Year</span></h2>`;
})
monthBtn.addEventListener("click", function () {
    pricingCard[0].children[1].innerHTML = `<h2>$99 <span>/Month</span></h2>`;
    pricingCard[1].children[1].innerHTML = `<h2>$199 <span>/Month</span></h2>`;
    pricingCard[2].children[1].innerHTML = `<h2>$228 <span>/Month</span></h2>`;
})