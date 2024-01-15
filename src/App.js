import Navbar from "./Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import { useState } from "react";




function App() {
	const [data,setData] = useState([])
  return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Home data={data} setData={setData} />}
					></Route>
					<Route
						path="/search"
						element={<Search data={data} setData={setData} />}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
