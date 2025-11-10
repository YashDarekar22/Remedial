document.addEventListener('DOMContentLoaded', function () {
    const tabsContainer = document.getElementById('tabs');
    const tabButtons = tabsContainer.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabsContainer.addEventListener('click', function (e) {
        const clickedButton = e.target.closest('.tab-btn');
        if (!clickedButton) return;

        const tabToActivate = clickedButton.dataset.tab;

        // Deactivate all tabs
        tabButtons.forEach(button => {
            button.classList.remove('active', 'text-blue-600');
            button.classList.add('text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300', 'border-transparent');
        });
        
        // Deactivate all content
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Activate clicked tab
        clickedButton.classList.add('active', 'text-blue-600');
        clickedButton.classList.remove('text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300', 'border-transparent');

        // Activate corresponding content
        const contentToActivate = document.getElementById(tabToActivate + '-content');
        if (contentToActivate) {
            contentToActivate.classList.add('active');
        }
    });
});