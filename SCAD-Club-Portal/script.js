/* ==============================
   SCAD CLUB PORTAL
   Demo / Prototype JavaScript
   ============================== */


/* ---------- STUDENT LOGIN ---------- */

function studentLogin(event) {

    event.preventDefault();

    const username =
        document.getElementById("studentUsername").value.trim();

    const password =
        document.getElementById("studentPassword").value.trim();

    if (username === "student" && password === "student123") {

        localStorage.setItem("studentLoggedIn", "true");

        window.location.href = "student-dashboard.html";

    } else {

        alert("Invalid student username or password.");

    }

}


/* ---------- ADMIN LOGIN ---------- */

function adminLogin(event) {

    event.preventDefault();

    const username =
        document.getElementById("adminUsername").value.trim();

    const password =
        document.getElementById("adminPassword").value.trim();

    if (username === "admin" && password === "admin123") {

        localStorage.setItem("adminLoggedIn", "true");

        window.location.href = "admin-dashboard.html";

    } else {

        alert("Invalid admin username or password.");

    }

}


/* ---------- EVENT REGISTRATION ---------- */

function registerEvent(eventName) {

    let registrations =
        JSON.parse(localStorage.getItem("registrations")) || [];

    const existing =
        registrations.find(
            item =>
                item.student === "Sri Bharathi" &&
                item.event === eventName
        );

    if (existing) {

        alert("You are already registered for this event.");

        return;

    }

    registrations.push({

        student: "Sri Bharathi",

        registerNumber: "SCAD001",

        department: "CSE",

        year: "2nd Year",

        section: "C",

        event: eventName,

        date: new Date().toLocaleDateString()

    });

    localStorage.setItem(
        "registrations",
        JSON.stringify(registrations)
    );

    alert(
        "Registration successful!\n\nEvent: " +
        eventName
    );

    updateRegistrationCount();

}


/* ---------- STUDENT REGISTRATION COUNT ---------- */

function updateRegistrationCount() {

    const registrations =
        JSON.parse(localStorage.getItem("registrations")) || [];

    const countElement =
        document.getElementById("registrationCount");

    if (countElement) {

        countElement.textContent =
            registrations.length;

    }

}


/* ---------- SHOW REGISTRATIONS ---------- */

function showRegistrations() {

    const registrations =
        JSON.parse(localStorage.getItem("registrations")) || [];

    if (registrations.length === 0) {

        alert("No registrations found.");

        return;

    }

    let message =
        "MY REGISTRATIONS\n\n";

    registrations.forEach((item, index) => {

        message +=
            (index + 1) +
            ". " +
            item.event +
            "\n" +
            "Student: " +
            item.student +
            "\n" +
            "Department: " +
            item.department +
            "\n" +
            "Year: " +
            item.year +
            "\n" +
            "Section: " +
            item.section +
            "\n\n";

    });

    alert(message);

}


/* ---------- ADMIN: VIEW STUDENTS ---------- */

function showStudents() {

    const registrations =
        JSON.parse(localStorage.getItem("registrations")) || [];

    let message =
        "STUDENT MANAGEMENT\n\n";

    message +=
        "Registered students: " +
        registrations.length +
        "\n\n";

    if (registrations.length === 0) {

        message +=
            "No student registrations yet.";

    } else {

        registrations.forEach((item, index) => {

            message +=
                (index + 1) +
                ". " +
                item.student +
                " | " +
                item.department +
                " | " +
                item.year +
                " | Section " +
                item.section +
                "\n";

        });

    }

    alert(message);

}


/* ---------- ADMIN: VIEW REGISTRATIONS ---------- */

function showAdminRegistrations() {

    showRegistrations();

}


/* ---------- ADMIN: ADD EVENT DEMO ---------- */

function addDemoEvent() {

    const eventName =
        prompt("Enter new event name:");

    if (!eventName) {

        return;

    }

    let events =
        JSON.parse(localStorage.getItem("adminEvents")) || [];

    events.push({

        name: eventName,

        createdAt:
            new Date().toLocaleDateString()

    });

    localStorage.setItem(
        "adminEvents",
        JSON.stringify(events)
    );

    alert(
        "Event added successfully!\n\n" +
        eventName
    );

}


/* ---------- ADMIN: ANNOUNCEMENT ---------- */

function addAnnouncement() {

    const title =
        prompt("Enter announcement title:");

    if (!title) {

        return;

    }

    const message =
        prompt("Enter announcement details:");

    if (!message) {

        return;

    }

    let announcements =
        JSON.parse(
            localStorage.getItem("announcements")
        ) || [];

    announcements.push({

        title: title,

        message: message,

        date:
            new Date().toLocaleDateString()

    });

    localStorage.setItem(
        "announcements",
        JSON.stringify(announcements)
    );

    alert(
        "Announcement published successfully!"
    );

}


/* ---------- ADMIN MESSAGE ---------- */

function showAdminMessage() {

    alert(
        "Management module is ready for integration.\n\n" +
        "This prototype can later be connected to a " +
        "database and backend."
    );

}


/* ---------- PAGE LOAD ---------- */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateRegistrationCount();

    }
);
function openPoster(imageSrc) {
    const modal = document.getElementById("posterModal");
    const preview = document.getElementById("posterPreview");

    preview.src = imageSrc;
    modal.classList.add("show");
}

function closePoster() {
    const modal = document.getElementById("posterModal");
    modal.classList.remove("show");
}
// Timeline Scroll Animation
const timelineItems = document.querySelectorAll(".timeline-item");

function revealTimeline() {
    timelineItems.forEach((item) => {
        if (item.getBoundingClientRect().top < window.innerHeight - 100) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealTimeline);
window.addEventListener("load", revealTimeline);
// Live Poll
function submitPoll() {
    const selected = document.querySelector('input[name="poll"]:checked');
    const result = document.getElementById("pollResult");

    if (!selected) {
        result.textContent = "Please select an option before voting.";
        return;
    }

    result.textContent =
        "✓ Your vote for \"" + selected.value + "\" has been recorded!";
}