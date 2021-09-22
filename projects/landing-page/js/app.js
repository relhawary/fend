/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
var allSectionElements = document.getElementsByTagName("section");
var navBarUlElement = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

function buildNavMenu(sections) {
	if (sections.length > 0) {
		for (let i = 1; i <= sections.length; i++) {
			let menuListItem = document.createElement("li");
			let menuAnchor = document.createElement("a");
			let link = "#section" + i;
			menuAnchor.setAttribute("href", link);
			menuAnchor.textContent = "SECTION " + i;
			menuAnchor.setAttribute("class", "menu__link");
			menuListItem.appendChild(menuAnchor);
			navBarUlElement.appendChild(menuListItem);
			//	console.log("im working bitch");
		}
	}
}

document.body.onload = buildNavMenu(allSectionElements);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
