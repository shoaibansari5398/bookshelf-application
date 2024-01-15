import React, { useState } from "react";
import { book_data } from "./data";

const Card = ({ card,setData }) => {
	const {id, title, author, image, status } = card


	const handleUpdateBookStatus = (e) => {
		const updatedData = book_data.map(book => book.id == id ? (book.status = e.target.value) : book)
		setData(updatedData)
	}


	return (
		<div className="max-w-[300px] rounded overflow-hidden shadow-lg mx-5">
			<img className="w-full" src={image} />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{title}</div>
				<div className="flex ">
					<p className="text-gray-700 text-base">{author}</p>
					<select
						id="dropdown"
						value={status}
						onChange={handleUpdateBookStatus}
						className="border-2 border-gray-300 rounded-md px-1"
					>
						<option value="Read"> Read</option>
						<option value="Currently Reading">Currently Reading</option>
						<option value="Want to Read">Want to Read</option>
					</select>
					<options></options>
				</div>
			</div>
		</div>
	);
};

export default Card;
