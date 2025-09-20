document.addEventListener('DOMContentLoaded', () => {
  const termsCheckbox = document.getElementById('termsCheckbox');
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const termsWarning = document.getElementById('termsWarning');

  // Enable/disable buttons when checkbox is toggled
  termsCheckbox.addEventListener('change', () => {
    if (termsCheckbox.checked) {
      loginBtn.disabled = false;
      registerBtn.disabled = false;
      termsWarning.style.display = 'none';
    } else {
      loginBtn.disabled = true;
      registerBtn.disabled = true;
    }
  });

  // Login click
  loginBtn.addEventListener('click', () => {
    if (!termsCheckbox.checked) {
      termsWarning.style.display = 'block';
      return;
    }
    window.location.href = 'login2.html';
  });

  // Register click
  registerBtn.addEventListener('click', () => {
    if (!termsCheckbox.checked) {
      termsWarning.style.display = 'block';
      return;
    }
    window.location.href = 'registration.html';
  });
});

// Show Terms
function showTerms() {
  alert('📄 Terms of Service\n\nThis would open the terms page or modal.');
}

// Show Privacy
function showPrivacy() {
  alert('🔒 Privacy Policy\n\nThis would open the privacy policy page or modal.');
}
