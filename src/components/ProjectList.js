import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
	console.log(projects);
	const showList = projects.map((item) => (
		<ProjectItem
			key={item.id}
			name={item.name}
			about={item.about}
			technologies={item.technologies}
		/>
	));
	return (
		<div id="projects">
			<h2>My Projects</h2>
			<div id="project-list">
				{/* render ProjectItem components here */}
				{showList}
			</div>
		</div>
	);
}

export default ProjectList;
