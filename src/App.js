import React, { useEffect, useState } from "react";
import HeaderList from "./components/HeaderList";
import List from "./components/List";
import FooterList from "./components/FooterList";
import Loader from "./components/Loader";

import "./App.css";
const App = () => {
	const [isChecked, setChecked] = useState(false);
	const [loading, setLoading] = useState(false);
	const [tasks, setTasks] = useState([
		{
			id: 1,
			title: "Task 1",
			description: "Description 1",
			link: "Link 1",
			checked: false,
		},
	]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://apitodonitc.onrender.com/api/tasks",
				{
					method: "GET",
				}
			).then((data) => data.json());

			setTasks(response.data);
		};

		fetchData();
	}, []);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<main className="content">
					<HeaderList />
					<List
						tasks={tasks}
						setTasks={setTasks}
						isCheck={isChecked}
					/>
					<FooterList
						tasks={tasks}
						setTasks={setTasks}
						isCheck={isChecked}
						setChecked={setChecked}
					/>
				</main>
			)}
		</>
	);
};

export default App;
