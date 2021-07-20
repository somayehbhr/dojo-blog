import "./App.css";
import { Navbar } from "./cpomponents/Navbar";
import { Home } from "./cpomponents/Home";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="content">
				<Home />
			</div>
		</div>
	);
}

export default App;
