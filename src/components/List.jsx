import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
	const { tasks, setTasks } = props;

	function handleCheck(id) {
		const newTasks = tasks.map((item) => {
			if (item.id === id) {
				item.checked = !item.checked;
			}
			return item;
		});
		setTasks(newTasks);
	}

	return (
		<div>
			{tasks.map((item, index) => (
				<ListItem
					key={item.id}
					item={item}
					handleCheck={handleCheck(item.id)}
				/>
			))}
		</div>
	);
};

export default List;
