
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    const isOpen = navbar.classList.toggle("active");

    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");

        document.querySelectorAll(".nav-link").forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});


/* Contact Form - WhatsApp Integration */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        // Replace this with your WhatsApp number.
        // Include country code, without + or spaces.
        const whatsappNumber = "923303243914";

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !phone || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const whatsappMessage =
            "Hello! I have a new portfolio inquiry.%0A%0A" +
            "*Name:* " + encodeURIComponent(name) + "%0A" +
            "*Phone:* " + encodeURIComponent(phone) + "%0A" +
            "*Email:* " + encodeURIComponent(email) + "%0A" +
            "*Message:* " + encodeURIComponent(message);

        const whatsappURL =
            "https://wa.me/" + whatsappNumber +
            "?text=" + whatsappMessage;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}
