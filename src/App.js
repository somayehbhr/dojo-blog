import "./App.css";
import { Navbar } from "./cpomponents/Navbar";
import { Home } from "./cpomponents/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Create } from "./cpomponents/Create";
import { BlogDetails } from "./cpomponents/BlogDetails";
import { NotFound } from "./cpomponents/NotFound";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/create">
							<Create />
						</Route>
						<Route path="/blogs/:id">
							<BlogDetails />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
