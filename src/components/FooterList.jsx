import React from "react";

const FooterList = (props) => {
	const { task, setTasks, isChecked, setChecked } = props;
	function handleAddNewTask() {
		const newTask = {
			id: task.length + 1,
			title: "",
			description: "",
			link: "",
			checked: false,
		};
		setTasks((prev) => [...prev, newTask]);
	}
	function handleToggleIsCheck() {}
	return (
		<div className="footer">
			<div className="footer_show">
				<i className="fa-solid fa-eye"></i>

				<p>Completed of</p>
			</div>

			<div className="footer_left">
				<p>+ Add task</p>
				onClick={handleAddNewTask}
			</div>
		</div>
	);
};

export default FooterList;
