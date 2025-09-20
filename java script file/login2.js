// Help icon
document.querySelector('.help-icon').addEventListener('click', function() {
    alert('Need help? Contact support at support@aapdamitra.com');
});

// Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Simulate login process
    const btn = document.querySelector('.signin-btn');
    btn.textContent = 'Signing In...';
    btn.disabled = true;

    setTimeout(() => {
        alert('Login functionality would be implemented here');
        btn.textContent = 'Sign In';
        btn.disabled = false;
    }, 2000);
});

// Social button handlers
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const provider = this.textContent.trim();
        alert(`${provider} login would be implemented here`);
    });
});

// Floating animation
const card = document.querySelector('.signin-card');
let mouseX = 0, mouseY = 0;
let cardX = 0, cardY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = (e.clientY / window.innerHeight) * 2 - 1;
});

function animateCard() {
    cardX += (mouseX * 5 - cardX) * 0.1;
    cardY += (mouseY * 5 - cardY) * 0.1;

    card.style.transform = `translateX(${cardX}px) translateY(${cardY}px)`;
    requestAnimationFrame(animateCard);
}

animateCard();
