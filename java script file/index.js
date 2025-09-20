let selectedLanguage = null;

// Auto-transition from landing to language selection (2.5s faster for mobile)
setTimeout(() => {
  const landingScreen = document.getElementById("landingScreen");
  const languageScreen = document.getElementById("languageScreen");

  landingScreen.classList.add("fade-out");

  setTimeout(() => {
    landingScreen.style.display = "none";
    languageScreen.classList.add("show");

    // Animate language options with stagger effect
    const options = document.querySelectorAll(".language-option");
    options.forEach((option, index) => {
      setTimeout(() => {
        option.classList.add("animate");
      }, index * 40); // faster stagger for low-end devices
    });
  }, 600);
}, 2500);

// Language selection functionality
document.querySelectorAll(".language-option").forEach((option) => {
  option.addEventListener("click", function () {
    document.querySelectorAll(".language-option").forEach((opt) => {
      opt.style.borderColor = "#E5E7EB";
      opt.style.background = "white";
    });

    this.style.borderColor = "#3B82F6";
    this.style.background = "#F8FAFF";

    selectedLanguage = this.dataset.lang;
    document.getElementById("continueBtn").disabled = false;
  });
});

// Continue button functionality
document.getElementById("continueBtn").addEventListener("click", function () {
  if (selectedLanguage) {
    alert(
      `Selected language: ${selectedLanguage}\n\nProceeding to the main application...`
    );
    // Replace alert with navigation or app load
  }
});
