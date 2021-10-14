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

function isVisible(element) {
	let rectangle = element.getBoundingClientRect();
	//console.log(-rectangle.height);
	return rectangle.top <= 60 && -rectangle.height + 60 <= rectangle.top;
}
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
			menuAnchor.setAttribute("id", "anchor" + i);
			menuListItem.appendChild(menuAnchor);
			navBarUlElement.appendChild(menuListItem);
			//	console.log("im working bitch");
			// change this later to use innerHTML with concatination
		}
	}
}

// Add class 'active' to section when near top of viewport

function scrollHandler() {
	for (let i = 1; i <= allSectionElements.length; i++) {
		//looping over section with each scroll
		let ID = "section" + i;
		let element = document.getElementById(ID);
		let visible = isVisible(element); //output from isVIsible function will determine whether current section is top-most section or not
		if (visible == true) {
			element.classList.add("your-active-class");
		} else {
			element.classList.remove("your-active-class");
			//this will make sure that all the OTHER non-active sections dont have the active class with every loop
		}
		//for debugging purposes
		//console.log(i, ID, visible, element.getBoundingClientRect());
	}
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.body.onload = buildNavMenu(allSectionElements);

// Scroll to section on link click
for (let j = 1; j <= allSectionElements.length; j++) {
	document.getElementById("anchor" + j).addEventListener("click", function (e) {
		e.preventDefault();
		document.getElementById("section" + j).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
		for (i = 1; i <= allSectionElements.length; i++) {
			if (i == j) {
				document.getElementById("anchor" + i).classList.add("menu__selected");
			} else {
				document.getElementById("anchor" + i).classList.remove("menu__selected");
			}
			console.log(i, j);
		}
		// document.getElementById("anchor" + j).classList.add("menu__selected");
	});
}

// Set sections as active
document.addEventListener("scroll", function (e) {
	scrollHandler();
});
