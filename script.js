
function injectHeader() {
    // Create the <header> tag.
    const header = document.createElement('header');
    header.classList.add('grid-container');
    header.id = 'grid-header';

    // Create <div>s for the name banner.
    const nameBanner = document.createElement('div');
    nameBanner.id = 'name-banner';

    const nameBox = document.createElement('div');
    nameBox.id = 'name-box';

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.textContent = 'Abdur Rehman Nasir';

    // Correct inheritance relations.
    nameBox.appendChild(nameDiv);
    nameBanner.appendChild(nameBox);

    // Create grid for containing navigation tabs.
    const navigationGrid = document.createElement('div');
    navigationGrid.classList.add('grid-container', 'navigation-grid');

    // Array of navigation tabs with corresponding IDs. ID will be used for onClick() events.
    const tabs = [
        { text: 'About', id: 'nav-about' },
        { text: 'CV', id: 'nav-cv' },
        { text: 'Projects', id: 'nav-projects' },
        { text: 'Contact Me', id: 'nav-contact' }
    ];

    tabs.forEach(tabInfo => {
        const tab = document.createElement('div');
        tab.classList.add('navigation-tabs');
        tab.id = tabInfo.id;  // Set unique ID for each tab
        tab.textContent = tabInfo.text;
        navigationGrid.appendChild(tab);
    });

    // Append everything to the header.
    header.appendChild(nameBanner);
    header.appendChild(navigationGrid);

    // Inject the header into the body of the page.
    document.body.insertBefore(header, document.body.firstChild);
}

injectHeader();

// OnClick events for each navigation tab.
document.getElementById("nav-about").onclick = toAboutPage;
document.getElementById("nav-cv").onclick = toCVPage;
document.getElementById("nav-projects").onclick = toProjectsPage;
document.getElementById("nav-contact").onclick = toContactPage;

// Checks which page you're on, and changes navigation bar tab to white accordingly.
switch (window.location.href) {
    case "http://127.0.0.1:5500/index.html":
        document.getElementById("nav-about").style.color = 'white';
        break;
    case "http://127.0.0.1:5500/cv.html":
        document.getElementById("nav-cv").style.color = 'white';
        break;
    case "http://127.0.0.1:5500/projects.html":
        document.getElementById("nav-projects").style.color = 'white';
        break;
    case "http://127.0.0.1:5500/contact.html":
        document.getElementById("nav-contact").style.color = 'white';
        break;
}


function injectFooter() {
    // Create the <footer> tag.
    const footer = document.createElement('footer');

    // Create the <p> tag.
    const footerText = document.createElement('p');
    footerText.innerHTML = '&copy; 2024 Abdur Rehman Nasir. All rights reserved.';

    // Append the paragraph to the footer.
    footer.appendChild(footerText);

    // Inject the footer at the end of the body.
    document.body.appendChild(footer);
}

// Call function after DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
    injectFooter();
});



// Main working section for function definitions.


function toAboutPage() {
    location.href = "index.html";
}

function toCVPage() {
    location.href = "cv.html";
}

function toProjectsPage() {
    location.href = "projects.html";
}

function toContactPage() {
    location.href = "contact.html";
}



