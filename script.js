// Simple script to enhance user experience
// Currently adds smooth scrolling for internal links (already handled by CSS scroll-behavior)
// Additional interactive features can be added here.

document.addEventListener('DOMContentLoaded', function () {
    // Example: Log a message when the CTA button is clicked
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function (e) {
            console.log('CTA button clicked!');
        });
    }
});