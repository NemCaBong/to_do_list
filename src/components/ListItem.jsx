import React from "react";
import handleCheck from "./List";
const ListItem = (props) => {
	const { item } = props;
	return (
		<div className="item_list">
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
					defaultValue={item.title}
					style={{
						textDecoration: item.checked ? "line-through" : "none",
					}}
				/>
				<input
					type="text"
					id="item_list_subtitle"
					defaultValue={item.description}
				/>

				<div className="item_list_link">
					<i className="fa-solid fa-link"></i>
					<input
						type="text"
						id="item_list_link"
						defaultValue={item.link}
					/>
				</div>
			</div>

			<div className="item_list_action">
				<i className="fa-solid fa-chevron-up"></i>
				<i className="fa-solid fa-chevron-down"></i>
				<i className="fa-solid fa-trash"></i>
			</div>
		</div>
	);
};

export default ListItem;
