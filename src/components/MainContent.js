import React from 'react';

function MainContent() {
	const date = new Date()
	const hours = date.getHours()
	let timeOfDay
	const styles = {
		fontSize: 30

	}
		if (hours < 12) {
		timeOfDay = "morning"
		styles.color = "#ac513f"
	} else if (hours >= 12 && hours < 17) {
		timeOfDay = "afternoon"
		styles.color = "#4c6bbe"
	} else {
		timeOfDay = "night"
		styles.color = "#0f1f4f"
	}
	return (
		<main className="maincontent">
			<h1 style={styles}>Good {timeOfDay}</h1>
		</main>
		)
}



export default MainContent;