document.getElementById("GithubBtn").addEventListener("click", function() {
    window.open("https://github.com/Sumana666?tab=repositories", "_blank");
});

document.getElementById("DownloadCVBtn").addEventListener("click", function() {
    window.open("SUMANA HALDER_CV .pdf", "_blank");
});

document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            let targetId = this.getAttribute("href").substring(1); // Get section ID
            let targetSection = document.getElementById(targetId); // Find section

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust offset if needed
                    behavior: "smooth" // Smooth scrolling effect
                });
            }
        });
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    // Simple validation
    if (name === "" || email === "" || message === "") {
        formMessage.innerText = "All fields are required!";
        formMessage.style.color = "red";
        return;
    }

    if (!validateEmail(email)) {
        formMessage.innerText = "Please enter a valid email!";
        formMessage.style.color = "red";
        return;
    }

    // Send data (Replace with your backend API if needed)
    let formData = {
        name: name,
        email: email,
        message: message
    };

    console.log("Sending Data:", formData); // Debugging purpose

    // Simulate successful submission
    formMessage.innerText = "Message sent successfully!";
    formMessage.style.color = "green";

    // Reset the form after submission
    document.getElementById("contactForm").reset();
});

// Function to validate email format
function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
