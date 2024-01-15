import React, { useEffect, useState } from "react";
import { book_data } from "./data";
import Card from "./Card";

const Home = ({data,setData}) => {

	const categories = data.map((category) => category.status);
	const uniqueCategories = categories.reduce((accumulator, currentValue) => {
		if (!accumulator.includes(currentValue)) {
			accumulator.push(currentValue);
		}
		return accumulator;
	}, []);

	console.log(uniqueCategories);

	useEffect(() => {
		setData(book_data);
		console.log(data);
	});

	return (
		<div className="flex flex-col justify-center items-center mt-5">
			{uniqueCategories.map((category) => (
				<div key={category} className="mt-5">
					<h2 className="text-2xl font-bold">{category}</h2>
					<br />
					<div className="flex mt-1">
						{data
							.filter((card) => card.status === category)
							.map((card, index) => (
								<Card key={index} card={card} setData={setData} />
							))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Home;
