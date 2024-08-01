// Home Section
function showHome() {
    hideAllSections();
    document.getElementById("home").style.display = "block";
}

// Menu Section
function showMenu() {
    hideAllSections();
    document.getElementById("menu").style.display = "block";
}

// About Section
function showAbout() {
    hideAllSections();
    document.getElementById("about").style.display = "block";
}

// Contact Section
function showContact() {
    hideAllSections();
    document.getElementById("contact").style.display = "block";
}

function hideAllSections() {
    var sections = document.getElementsByClassName("content");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
}

// Reservation Form
document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    var data = {};
    formData.forEach(function(value, key) {
        data[key] = value;
    });

    alert("Thank you, " + data.name + "! Your reservation for " + data.date + " has been successfully made.");
});