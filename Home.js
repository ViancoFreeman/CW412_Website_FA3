const searchBar = document.getElementById('search');
searchBar.addEventListener('focus', () => {
    searchBar.placeholder = '';
});
searchBar.addEventListener('blur', () => {
    searchBar.placeholder = 'Search...';
});

const searchDropdown = document.querySelector('.search-dropdown');

searchDropdown.addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    console.log('Selected:', selectedOption);
    // Add your logic here for what happens when an option is selected
});
