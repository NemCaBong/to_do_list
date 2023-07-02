import React from "react";
const ListItem = (props) => {
	const {
		index,
		item,
		length,
		handleCheck,
		handleDelete,
		handleUpTask,
		handleDownTask,
		isChecked,
	} = props;
	return (
		<div
			className="item_list"
			style={{
				display: isChecked && item.checked ? "none" : "flex",
			}}
		>
			<div className="item_list_checkbox">
				<input
					type="checkbox"
					id="item_list_checkbox"
					onClick={() => handleCheck(item.id)}
				/>
			</div>

			<div className="item_list_content">
				<input
					type="text"
					id="item_list_title"
					placeholder="Title ..."
					defaultValue={item.title}
					style={{
						textDecoration: item.checked ? "line-through" : "none",
					}}
				/>
				<input
					type="text"
					id="item_list_subtitle"
					defaultValue={item.description}
					placeholder="Description ..."
				/>

				<div className="item_list_link">
					<i className="fa-solid fa-link"></i>
					<input
						type="text"
						id="item_list_link"
						defaultValue={item.link}
						placeholder="Link ..."
					/>
				</div>
			</div>

			<div div className="item_list_action">
				<i
					className="fa-solid fa-chevron-up"
					style={{
						opacity: index === 0 ? "0.2" : "1",
					}}
					onClick={() => handleUpTask(item.id)}
				></i>
				<i
					className="fa-solid fa-chevron-down"
					style={{
						opacity: index === length - 1 ? "0.2" : "1",
					}}
					onClick={() => handleDownTask(item.id)}
				></i>
				<i
					className="fa-solid fa-trash"
					onClick={() => handleDelete(item.id)}
				></i>
			</div>
		</div>
	);
};

export default ListItem;
