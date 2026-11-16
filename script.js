console.log("College Event Management System loaded successfully!");

document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("studentName").value;
    let email = document.getElementById("studentEmail").value;
    let selectedEvent = document.getElementById("eventName").value;

    document.getElementById("successMessage").innerText =
        "Congratulations " + name +
        "! You have successfully registered for " + selectedEvent + ".";

    this.reset();
});