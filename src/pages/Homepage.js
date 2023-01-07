import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import PageLayout from "../components/PageLayout/PageLayout";

const Homepage = ({ history }) => {
	const handleRedirectTo = (redirectTo) => () => {
		history.push(redirectTo);
	};

	return (
		<PageLayout>
			<div className="d-flex flex-column align-items-center">
				<Button
					variant="all"
					className="mb-3 mt-5"
					onClick={handleRedirectTo("/all")}
				>
					All contacts
				</Button>

				<Button variant="usa" onClick={handleRedirectTo("/usa")}>
					USA contacts
				</Button>
			</div>
		</PageLayout>
	);
};

export default withRouter(Homepage);
