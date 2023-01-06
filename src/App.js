import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import AllContacts from "./pages/AllContacts";
import USAContacts from "./pages/USAContacts";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Homepage} />

				<Route path="/home">
					<Redirect to="/" />
				</Route>

				<Route path="/homepage">
					<Redirect to="/" />
				</Route>

				<Route path="/all" component={AllContacts} />

				<Route path="/usa" component={USAContacts} />

				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
