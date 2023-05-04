
  
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
document.querySelector('#return-to-top').addEventListener('click', () => {
  /* Circle animation */
  document.querySelector('#return-to-top').animate(
    { transform: ['rotate(90deg)', 'rotate(540deg)'] },
    { duration: 1500, easing: 'cubic-bezier(0.37, 0.48, 0.31, 1.47)', fill: 'forwards' }
  );
  
  /* Scroll to top */
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
const element = document.getElementsByClassName('bnz-banking-text');

    window.addEventListener('scroll', function() {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < window.innerHeight) {
        // element is in view, move it to the left
        element.style.left = '-50px';
      }
    });
    const textDivs = document.querySelectorAll('.bnz-banking-text');

    textDivs.forEach(div => {
      div.style.transform = 'translateX(100%)';
      div.style.opacity = '0';
    });
    
    let delay = 0;
    
    textDivs.forEach(div => {
      setTimeout(() => {
        div.style.transform = 'translateX(0)';
        div.style.opacity = '1';
      }, delay);
      delay += 500;
    });
    document.addEventListener('DOMContentLoaded', () => {
        const navLinks = document.querySelectorAll('.nav-list a');
        const firstNavLink = navLinks[2];
        applyHoverEffect(firstNavLink);
      });
      
      function applyHoverEffect(link) {
        const hoverStyle = {
          color: '#5a5a5a',
          borderColor: '#fffefd',
          borderWidthBefore: '0 0 1px 1px',
          borderWidthAfter: '1px 1px 0 0',
          widthBeforeAfter: '100%',
          heightBeforeAfter: '100%',
          borderRadiusBeforeAfter: '5px',
          transitionDuration: '0.5s'
        };
      
        const defaultStyle = {
          color: '',
          borderColor: '',
          borderWidthBefore: '',
          borderWidthAfter: '',
          widthBeforeAfter: '',
          heightBeforeAfter: '',
          borderRadiusBeforeAfter: '',
          transitionDuration: ''
        };
      
        const span = link.querySelector('span');
        const btnBefore = link.querySelector('.btnBefore');
        const btnAfter = link.querySelector('.btnAfter');
      
        span.style.color = hoverStyle.color;
        btnBefore.style.borderColor = hoverStyle.borderColor;
        btnBefore.style.borderWidth = hoverStyle.borderWidthBefore;
        btnAfter.style.borderColor = hoverStyle.borderColor;
        btnAfter.style.borderWidth = hoverStyle.borderWidthAfter;
        btnBefore.style.width = hoverStyle.widthBeforeAfter;
        btnBefore.style.height = hoverStyle.heightBeforeAfter;
        btnAfter.style.width = hoverStyle.widthBeforeAfter;
        btnAfter.style.height = hoverStyle.heightBeforeAfter;
        btnBefore.style.borderRadius = hoverStyle.borderRadiusBeforeAfter;
        btnAfter.style.borderRadius = hoverStyle.borderRadiusBeforeAfter;
        btnBefore.style.transitionDuration = hoverStyle.transitionDuration;
        btnAfter.style.transitionDuration = hoverStyle.transitionDuration;
      
        setTimeout(() => {
          span.style.color = defaultStyle.color;
          btnBefore.style.borderColor = defaultStyle.borderColor;
          btnBefore.style.borderWidth = defaultStyle.borderWidthBefore;
          btnAfter.style.borderColor = defaultStyle.borderColor;
          btnAfter.style.borderWidth = defaultStyle.borderWidthAfter;
          btnBefore.style.width = defaultStyle.widthBeforeAfter;
          btnBefore.style.height = defaultStyle.heightBeforeAfter;
          btnAfter.style.width = defaultStyle.widthBeforeAfter;
          btnAfter.style.height = defaultStyle.heightBeforeAfter;
          btnBefore.style.borderRadius = defaultStyle.borderRadiusBeforeAfter;
          btnAfter.style.borderRadius = defaultStyle.borderRadiusBeforeAfter;
          btnBefore.style.transitionDuration = defaultStyle.transitionDuration;
          btnAfter.style.transitionDuration = defaultStyle.transitionDuration;
        }, 1000);
      }   