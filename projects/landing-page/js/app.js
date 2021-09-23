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
//var theSectionsArray=[document.getElementById('section1'),document.getElementById('section2'),document.getElementById('section3'),document.getElementById
//('section4')]
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
			// change this later to use innerHTML with concatination
		}
	}
}

document.body.onload = buildNavMenu(allSectionElements);

// Add class 'active' to section when near top of viewport

function checkSectionInView(element) {
	var rectangle = element.getBoundingClientRect();
	console.log(-rectangle.height);
	return (
		// rectangle.top >= 0 &&
		// rectangle.left >= 0 &&
		// rectangle.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		// rectangle.right <= (window.innerWidth || document.documentElement.clientWidth)
		rectangle.top <= 0 && -rectangle.height <= rectangle.top
	);
}

function scrollHandler() {
	for (let i = 1; i <= allSectionElements.length; i++) {
		let ID = "section" + i;
		let idBefore = "section" + (i - 1);
		let element = document.getElementById(ID);
		let visible = checkSectionInView(element);
		if (visible == true) {
			//document.getElementById(idBefore).classList.remove("acive");
			element.classList.add("your-active-class");
		} else {
			element.classList.remove("your-active-class");
		}
		console.log(i, ID, visible, element.getBoundingClientRect());
	}
}

document.addEventListener("scroll", function (e) {
	scrollHandler();
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
