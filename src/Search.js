import React, { useState } from "react";
import { book_data } from "./data";
import Card from "./Card";

const Search = ({data,setData}) => {
	const [search, setSearch] = useState([]);

	const handleSearch = (e) => {

		const searchData = book_data.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase()));
		setSearch(searchData);
	}

	return (
		<div className="flex justify-center items-center">
			<div className="py-5">
				<input
					onChange={handleSearch}
					className="border-2 border-gray-300 rounded-md px-5 py-1"
					placeholder="Search Book Here"
				/>
				<div className="flex pt-5">
					{search.map((book) => (
						<Card card={book} setData={setData}/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Search;
