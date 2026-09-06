const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});


const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

        navMenu.classList.remove("show");
    });

});


const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


const billingToggle = document.getElementById("billingToggle");
const monthlyText = document.getElementById("monthlyText");
const yearlyText = document.getElementById("yearlyText");
const prices = document.querySelectorAll(".price-number");


billingToggle.addEventListener("change", function () {

    if (this.checked) {

        monthlyText.classList.remove("selected");
        yearlyText.classList.add("selected");

        prices.forEach(function (price) {
            price.textContent = price.dataset.yearly;
        });

    } else {

        yearlyText.classList.remove("selected");
        monthlyText.classList.add("selected");

        prices.forEach(function (price) {
            price.textContent = price.dataset.monthly;
        });

    }

});


const planButtons = document.querySelectorAll(".plan-btn");

planButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card = this.closest(".pricing-card");
        const planName = card.querySelector("h3").textContent;

        alert("You selected the " + planName + " plan.");

    });

});


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    contactForm.reset();

});
