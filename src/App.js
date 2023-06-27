import React, { useState } from "react";
import HeaderList from "./components/HeaderList";
import List from "./components/List";
import FooterList from "./components/FooterList";
import ListItem from "./components/ListItem";

const App = () => {
	const [task, setTasks] = useState([
		{
			id: 1,
			title: "Task 1",
			description: "Description 1",
			link: "Link 1",
			checked: false,
		},
		{
			id: 2,
			title: "Task 2",
			description: "Description 2",
			link: "Link 2",
			checked: false,
		},
		{
			id: 3,
			title: "Task 3",
			description: "Description 3",
			link: "Link 3",
			checked: false,
		},
	]);
	const [isChecked, setChecked] = useState(false);
	return (
		<div>
			<HeaderList />
			<List />
			<ListItem />
			<FooterList tasks={task} />
		</div>
	);
};

export default App;
