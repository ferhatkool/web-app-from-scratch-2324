document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelectorAll('.toggle');
    const defaultDiv = document.querySelector('.default');

    toggle.forEach(button => {
        button.addEventListener('click', function() {
        // Toggle the display style of the content div
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            document.querySelectorAll('.content').forEach(content => {
                if (content !== targetContent) {
                    content.style.display = 'none';
                }
            });

            if (targetContent.style.display === 'none') {
                targetContent.style.display = 'flex';
                defaultDiv.style.display = 'none';
            } else {
                targetContent.style.display = 'none';
                defaultDiv.style.display = 'flex';
            }
        });
    });
});