import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import ContacInfo from "./ContacInfo";

const Contact = ({ contact }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Card body={true} className="my-3" onClick={handleShow}>
				<ContacInfo contact={contact} />
			</Card>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Contact info</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<ContacInfo contact={contact} />
				</Modal.Body>

				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Contact;
