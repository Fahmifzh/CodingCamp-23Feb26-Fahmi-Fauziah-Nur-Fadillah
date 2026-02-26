// ======================================
// WELCOME NAME
// ======================================

let userName = prompt("Welcome to Fahmi Tech!\nPlease enter your name:");

if (userName !== null && userName.trim() !== "") {
    document.getElementById("username").textContent = userName.trim();
} else {
    document.getElementById("username").textContent = "Guest";
}


// ======================================
// FORM VALIDATION & SUBMIT
// ======================================

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("userMessage").value.trim();

    // VALIDASI FIELD KOSONG
    if (name === "" || email === "" || phone === "" || message === "") {
        alert("All fields must be filled out!");
        return;
    }

    // VALIDASI EMAIL
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    // VALIDASI PHONE (HANYA ANGKA)
    let phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must contain numbers only!");
        return;
    }

    // ======================================
    // TAMPILKAN DATA KE RESULT BOX
    // ======================================

    document.getElementById("resultName").textContent = "Name: " + name;
    document.getElementById("resultEmail").textContent = "Email: " + email;
    document.getElementById("resultPhone").textContent = "Phone: " + phone;
    document.getElementById("resultMessage").textContent = "Message: " + message;

    alert("Thank you! Your message has been submitted successfully.");

    // CLEAR FORM SETELAH SUBMIT
    document.getElementById("contactForm").reset();

});