
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const dropdown = document.getElementById('dropdown');

    console.log(menuButton); // add this line
    console.log(dropdown); // add this line

    menuButton.addEventListener('click', function () {
        console.log('clicked'); // add this line
        dropdown.classList.toggle('show');
    });
});
// Get all the grid-item elements
const gridItems = document.querySelectorAll('.grid-item');

// Loop through the grid-items and add a click event listener to each one
gridItems.forEach(item => {
  // Get the link from the data-link attribute
  const link = item.dataset.link;

  // Add a click event listener
  item.addEventListener('click', () => {
    // Redirect to the link
    window.location.href = link;
  });
});
const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', function() {
  if (menuButton.innerText === 'Menu ') {
    menuButton.innerText = 'Close ';
    menuButton.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16" style="vertical-align: -4px;"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
  } else {
    menuButton.innerText = 'Menu ';
    menuButton.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" style="vertical-align: -4px;"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>';
  }
});







