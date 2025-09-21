// Handle page navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId + '-page').classList.add('active');

    // Update navigation
    document.querySelectorAll('.nav-item').forEach(nav => {
        nav.classList.remove('active');
    });

    // Find and activate the correct nav item
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(nav => {
        const navText = nav.querySelector('span:last-child').textContent.toLowerCase();
        if (navText === pageId.toLowerCase()) {
            nav.classList.add('active');
        }
    });
}

// Loading animation for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.stat-card, .donation-card, .volunteer-card, .activity-item');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});
