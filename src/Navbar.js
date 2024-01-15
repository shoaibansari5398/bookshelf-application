import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="flex justify-center mt-5 text-xl">
			<Link to="/">
				<h3 className="cursor-pointer">Home || </h3>
			</Link>
			<Link to="/search">
				<h3 className="cursor-pointer">Search</h3>
			</Link>
		</div>
	);
};

export default Navbar;
