document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in effect when the page loads
    document.body.classList.add('fade-in');

    // Handle anchor click events for smooth page transitions
    document.querySelectorAll('a').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            const target = this.getAttribute('href');

            if (target) {
                event.preventDefault(); // Prevent immediate navigation

                // Add fade-out effect before navigating
                document.body.classList.add('fade-out');

                // Delay navigation to allow the fade-out effect
                setTimeout(function() {
                    window.location.href = target;
                }, 500); // Adjust delay to match fade-out duration
            }
        });
    });
});
