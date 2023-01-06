import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
	return (
		<div className="text-center">
			<Spinner className="mx-auto" animation="border" role="status" />
		</div>
	);
};

export default Loader;
