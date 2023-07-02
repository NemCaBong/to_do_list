import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
	const { tasks, setTasks, isChecked } = props;

	function handleCheck(id) {
		// using optional chaining to avoid error
		const newTasks = tasks?.map((item) => {
			if (item.id === id) {
				item.checked = !item.checked;
			}
			return item;
		});
		setTasks(newTasks);
	}

	function handleDelete(id) {
		const newTasks = tasks?.filter((item) => item.id !== id);
		setTasks(newTasks);
	}

	function handleUpTask(id) {
		const arr = [...tasks];
		let index = arr?.findIndex((item) => item.id === id);

		if (index > 0) {
			// swap the position of the 2 elems in the arr
			[arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
		}

		setTasks(arr);
	}

	function handleDownTask(id) {
		const arr = [...tasks];
		let index = arr?.findIndex((item) => item.id === id);

		if (index < tasks.length - 1) {
			[arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
		}

		setTasks(arr);
	}

	return (
		<div className="list">
			{tasks.length > 0 &&
				tasks?.map((item, index) => (
					<ListItem
						key={item.id}
						item={item}
						handleCheck={handleCheck}
						handleDelete={handleDelete}
						isChecked={isChecked}
						index={index}
						length={tasks.length}
						handleUpTask={handleUpTask}
						handleDownTask={handleDownTask}
					/>
				))}
		</div>
	);
};

export default List;
