

//chatgpt
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const responseDiv = document.getElementById("response");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // You can add your own logic here to send the form data to a server or perform validation.

        // For this example, we'll just display a confirmation message.
        responseDiv.innerHTML = "<p>Thank you for your message. We'll get back to you soon!</p>";

        // Reset the form after submission.
        contactForm.reset();
    });
});
