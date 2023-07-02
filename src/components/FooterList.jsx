import React from "react";

const FooterList = (props) => {
	const { tasks, setTasks, isChecked, setChecked } = props;
	function handleAddNewTask() {
		const newTask = {
			id: tasks.length + 1,
			title: "",
			description: "",
			link: "",
			checked: false,
		};
		setTasks((prev) => [...prev, newTask]);
	}
	function handleToggleIsCheck() {
		setChecked(!isChecked);
	}
	return (
		<div className="footer">
			<div className="footer_show" onClick={handleToggleIsCheck}>
				{isChecked ? (
					<i className="fa-solid fa-eye-slash"></i>
				) : (
					<i className="fa-solid fa-eye"></i>
				)}
				<i className="fa-solid fa-eye"></i>

				<p>
					Completed {tasks.filter((item) => item.checked).length} of{" "}
					{tasks.length}
				</p>
			</div>

			<div className="footer_left" onClick={handleAddNewTask}>
				<p>+ Add task</p>
			</div>
		</div>
	);
};

export default FooterList;
