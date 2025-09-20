let currentStep = 1;
let selectedRole = null;

// Role selection
document.querySelectorAll('.role-card').forEach(card => {
  card.addEventListener('click', function () {
    document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
    this.classList.add('selected');
    selectedRole = this.dataset.role;
    document.getElementById('continueBtn').disabled = false;
  });
});

// Step navigation
function goToStep1() {
  currentStep = 1;
  document.getElementById('step1').style.display = 'block';
  document.getElementById('step2').style.display = 'none';
  document.getElementById('progressFill').style.width = '50%';
}

function goToStep2() {
  if (!selectedRole) return;
  currentStep = 2;
  document.getElementById('step1').style.display = 'none';
  document.getElementById('step2').style.display = 'block';
  document.getElementById('progressFill').style.width = '100%';
  configureFormForRole(selectedRole);
}

function configureFormForRole(role) {
  const formTitle = document.getElementById('formTitle');
  const specialCodeSection = document.getElementById('specialCodeSection');
  const codeTitle = document.getElementById('codeTitle');
  const codeDescription = document.getElementById('codeDescription');
  const specialCodeInput = document.getElementById('specialCodeInput');

  if (role === 'citizen') {
    formTitle.textContent = 'Citizen Registration Details';
    specialCodeSection.style.display = 'none';
    specialCodeInput.removeAttribute('required');
  } else if (role === 'authority') {
    formTitle.textContent = 'Authority Registration Details';
    specialCodeSection.style.display = 'block';
    codeTitle.innerHTML = '<div class="special-code-icon">🏛️</div> Authority Verification Code';
    codeDescription.textContent = 'Enter your official authority code provided by your government department.';
    specialCodeInput.placeholder = 'Enter Authority Code (e.g., GOV-2024-XXXX)';
    specialCodeInput.setAttribute('required', 'true');
  } else if (role === 'ngo') {
    formTitle.textContent = 'NGO Registration Details';
    specialCodeSection.style.display = 'block';
    codeTitle.innerHTML = '<div class="special-code-icon">🤝</div> NGO Verification Code';
    codeDescription.textContent = 'Enter your NGO registration code to verify your organization.';
    specialCodeInput.placeholder = 'Enter NGO Code (e.g., NGO-REG-XXXX)';
    specialCodeInput.setAttribute('required', 'true');
  }
}

function handleBack() {
  if (currentStep === 2) {
    goToStep1();
  } else {
    if (confirm('Are you sure you want to leave registration?')) {
      window.history.back();
    }
  }
}

// Form validation
document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const registrationData = Object.fromEntries(formData.entries());
  registrationData.role = selectedRole;

  // Validate empty fields
  for (let [key, value] of Object.entries(registrationData)) {
    if (!value.trim()) {
      alert(`⚠ Please fill in the ${key} field.`);
      return;
    }
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(registrationData.email)) {
    alert('⚠ Please enter a valid email address.');
    return;
  }

  // Special code validation
  if (selectedRole === 'authority' && !/^GOV-\d{4}-[A-Z0-9]+$/i.test(registrationData.specialCode)) {
    alert('⚠ Authority code must be in format: GOV-YYYY-XXXX');
    return;
  }
  if (selectedRole === 'ngo' && !/^NGO-REG-[A-Z0-9]+$/i.test(registrationData.specialCode)) {
    alert('⚠ NGO code must be in format: NGO-REG-XXXX');
    return;
  }

  alert(`🎉 Registration successful!\nWelcome ${registrationData.fullName}!`);
  this.reset();
  selectedRole = null;
  
  goToStep1();
  document.getElementById('continueBtn').disabled = true;
});
