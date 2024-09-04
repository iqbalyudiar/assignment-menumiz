// Get all the tab buttons and content divs
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Function to handle tab clicks
function handleTabClick(event) {
    const targetTab = event.target.dataset.tab;

    // Remove active class from all tab buttons and contents
    tabButtons.forEach(button => button.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to the clicked tab button
    event.target.classList.add('active');

    // Show the corresponding tab content
    document.getElementById(targetTab).classList.add('active');
}

// Attach click event to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick);
});

// Set the first tab as active by default
tabButtons[0].classList.add('active');
tabContents[0].classList.add('active');
