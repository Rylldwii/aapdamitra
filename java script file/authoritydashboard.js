// Menu toggle functionality
function toggleMenu() {
  alert('Menu functionality would be implemented here');
}

// SOS Alert interactions
document.addEventListener('DOMContentLoaded', function () {
  // Acknowledge / Respond / Details buttons
  document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();

      if (this.textContent === 'Acknowledge') {
        this.textContent = 'Acknowledged';
        this.style.background = '#27ae60';
        this.disabled = true;

        const timeElement = this.closest('.alert-card').querySelector('.alert-time');
        timeElement.classList.remove('pulse-animation');
        timeElement.textContent = 'Acknowledged';
        timeElement.style.background = 'rgba(39, 174, 96, 0.2)';
        timeElement.style.color = '#27ae60';

        setTimeout(() => {
          alert('SOS Alert acknowledged successfully!');
        }, 500);

      } else if (this.textContent === 'Respond') {
        alert('Responding to SOS alert...');
        this.textContent = 'Responding...';
        this.disabled = true;

      } else if (this.textContent.includes('Details')) {
        showAlertDetails();
      }
    });
  });

  // Bottom nav interactions
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');

      const pageName = this.querySelector('.nav-label').textContent;
      if (pageName !== 'Dashboard') {
        alert(`Navigating to ${pageName} page...`);
      }
    });
  });

  // Resource card interactions
  document.querySelectorAll('.resource-card').forEach(card => {
    card.addEventListener('click', function () {
      const resourceType = this.querySelector('.resource-label').textContent;
      const resourceCount = this.querySelector('.resource-number').textContent;
      alert(`${resourceCount} ${resourceType} available\n\nClick to view detailed resource information.`);
    });
  });

  // Auto-refresh alerts simulation
  setInterval(() => {
    console.log('Checking for new alerts...');
  }, 30000);

  // Simulate real-time updates
  setTimeout(() => {
    addNewAlert();
  }, 10000);
});

function showAlertDetails() {
  const details = `
    Alert Details:

    📍 Location: Near Sector 15, Chandigarh
    👤 Contact: Ravi Sharma (+91 98765 43210)
    🚨 Priority: High
    ⏰ Time: Just now
    📝 Description: Citizen requires immediate assistance
    🔄 Status: Pending response

    Emergency services have been notified.
  `;
  alert(details);
}

function addNewAlert() {
  const alertsContainer = document.querySelector('.sos-alerts');
  const newAlert = document.createElement('div');
  newAlert.className = 'alert-card moderate-priority';
  newAlert.style.animation = 'slideIn 0.5s ease-out';

  newAlert.innerHTML = `
    <div class="alert-header">
      <div class="alert-priority">
        <div class="priority-badge moderate">SOS</div>
        <div class="priority-info">
          <h3>New SOS Request</h3>
          <p>Medical assistance needed</p>
        </div>
      </div>
      <div class="alert-time pulse-animation">NEW</div>
    </div>
    <div class="alert-details">
      <div class="detail-item">
        <svg class="detail-icon" viewBox="0 0 24 24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span>Sector 17, Chandigarh</span>
      </div>
    </div>
    <div class="alert-actions">
      <button class="action-btn btn-primary">Respond</button>
      <button class="action-btn btn-secondary">Details</button>
    </div>
  `;

  alertsContainer.appendChild(newAlert);

  // Add animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-100%); }
      to { opacity: 1; transform: translateX(0); }
    }
  `;
  document.head.appendChild(style);

  // Show notification
  setTimeout(() => {
    alert('🚨 New SOS Alert received!\n\nLocation: Sector 17, Chandigarh\nType: Medical assistance needed');
  }, 1000);
}
