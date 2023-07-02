import React from "react";

const HeaderList = () => {
	return (
		<div className="header">
			<input
				type="text"
				defaultValue="My To Do List"
				placeholder="Title"
				id="title_list"
			></input>
			<input
				type="text"
				defaultValue="Add description here ..."
				placeholder="Subtitle"
				id="desc_list"
			/>
		</div>
	);
};

export default HeaderList;
