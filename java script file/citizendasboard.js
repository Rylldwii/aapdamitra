let currentPage = 'home';

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId + '-page').classList.add('active');

    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(nav => {
        const navText = nav.querySelector('span:last-child').textContent.toLowerCase();
        if (pageId === navText) nav.classList.add('active');
    });

    currentPage = pageId;
}

// Profile image upload
const avatar = document.getElementById("profileAvatar");
const profileImage = document.getElementById("profileImage");
const uploadInput = document.getElementById("uploadImage");

avatar.addEventListener("click", () => uploadInput.click());
uploadInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImage.src = e.target.result;
            localStorage.setItem("profileImage", e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

// Load saved image
window.addEventListener("DOMContentLoaded", () => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) profileImage.src = savedImage;
});

// Toast notification
function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 4000);
}

// Example actions
function emergencySOS() { showToast("🚨 EMERGENCY SOS ACTIVATED! Authorities notified.", "error"); }
function quickSOS(type) { showToast(`${type} alert sent!`, "success"); }
function submitReport(event) { event.preventDefault(); showToast("Incident report submitted successfully!", "success"); event.target.reset(); }
function requestHelp(type) { showToast(`${type} request submitted.`, "info"); }
function contactCenter(center) { showToast(`Contacting ${center} center...`, "info"); }
function volunteer(type) { showToast(`Thanks for volunteering in ${type}!`, "success"); }
function donate() { showToast("Redirecting to secure donation portal...", "info"); }
function accessRecovery() { showToast("Connecting to recovery services...", "info"); }
function learnMore(topic) { showToast(`Opening ${topic} info...`, "info"); }
function editProfile() { showToast("Opening profile editor...", "info"); }
function notificationSettings() { showToast("Opening notification preferences...", "info"); }
function locationSettings() { showToast("Opening location settings...", "info"); }
function emergencyContacts() { showToast("Opening emergency contacts manager...", "info"); }
function privacyPolicy() { showToast("Opening Privacy Policy...", "info"); }
function termsOfService() { showToast("Opening Terms of Service...", "info"); }
function helpSupport() { showToast("Opening Help & Support...", "info"); }
function aboutApp() { showToast("Citizen Safety Dashboard v2.1.0", "info"); }
function logout() { showToast("Logged out successfully. Stay safe!", "warning"); }

// Initial page load
showPage('home');

function notificationSettings() { showToast("Opening notification preferences...", "info"); }
function locationSettings() { showToast("Opening location settings...", "info"); }
function emergencyContacts() { showToast("Opening emergency contacts manager...", "info"); }
function privacyPolicy() { showToast("Opening Privacy Policy...", "info"); }
function termsOfService() { showToast("Opening Terms of Service...", "info"); }
function helpSupport() { showToast("Opening Help & Support...", "info"); }
function logout() { showToast("Logged out successfully. Stay safe!", "warning"); showPage('home'); }
function aboutApp() { showToast("Citizen Safety Dashboard v2.1.0", "info"); }

// Initial page load
showPage('home');