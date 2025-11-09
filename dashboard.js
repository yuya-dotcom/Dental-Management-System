const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });
}


// ------ APPOINTMENT - APPOINTMENT - APPOINTMENT - APPOINTMENT


const appointmentsEl = document.getElementById("appointmentValue");

const appointmentVal = parseInt(appointmentsEl.textContent, 10);

if (appointmentVal >= 20) {
    appointmentsEl.style.color = "#89AC46";
} else {
    appointmentsEl.style.color = "#ce453bff";
}


// ------ REVENUE - REVENUE - REVENUE - REVENUE

const revenueEl = document.getElementById("revenueValue");

let revenueText = revenueEl.textContent.trim();

const revenueVal = parseFloat(revenueText.replace(/[₱,]/g, ''));

if (revenueVal >= 50000) {
    revenueEl.style.color = "#89AC46";
} else {
    revenueEl.style.color = "#ca3328ff";
}


// ---- INVENTORY - INVENTORY - INVENTORY


const inventoryEl = document.getElementById("inventoryValue");
const inventoryStatusEl = document.getElementById("inventoryStatus");

const inventoryVal = parseInt(inventoryEl.textContent.replace(/\D/g, ''), 10);

if (inventoryVal === 0) {
  inventoryEl.style.color = "#ca3328"; // red
  inventoryStatusEl.textContent = "Out of Stock";
  inventoryStatusEl.style.color = "#ca3328";
} else if (inventoryVal <= 5) {
  inventoryEl.style.color = "#e67e22"; // orange
  inventoryStatusEl.textContent = "Low Stock";
  inventoryStatusEl.style.color = "#e67e22";
} else {
  inventoryEl.style.color = "#89AC46"; // green
  inventoryStatusEl.textContent = "No Low Stock";
  inventoryStatusEl.style.color = "#89AC46";
}


// ---- NEW-PATIENTS - NEW-PATIENTS - NEW-PATIENTS

const patientEl = document.getElementById("patientValue");
const patientStatusEl = document.getElementById("patientStatus");

// Remove any non-numeric characters (+, text, etc.)
const patientVal = parseInt(patientEl.textContent.replace(/\D/g, ''), 10);

// Set color and text based on patient count
if (patientVal >= 20) {
  patientEl.style.color = "#89AC46"; // green
  patientStatusEl.textContent = "Excellent Growth";
  patientStatusEl.style.color = "#89AC46";
} else if (patientVal >= 10) {
  patientEl.style.color = "#e67e22"; // orange
  patientStatusEl.textContent = "Good Week";
  patientStatusEl.style.color = "#e67e22";
} else {
  patientEl.style.color = "#ca3328"; // red
  patientStatusEl.textContent = "Low New Patients";
  patientStatusEl.style.color = "#ca3328";
}



