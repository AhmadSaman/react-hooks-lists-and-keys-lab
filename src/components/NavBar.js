import React from "react";

function NavBar() {
	const links = ["home", "about", "projects"];

	const showLinks = links.map((link) => (
		<a href={`#${link}`} key={link}>
			{link}
		</a>
	));

	return (
		<nav>
			{/* display an <a> tag for each link here */}
			{showLinks}
		</nav>
	);
}

export default NavBar;
