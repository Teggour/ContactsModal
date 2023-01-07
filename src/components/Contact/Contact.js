import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

const Contact = ({ contact }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Card body={true} className="my-3" onClick={handleShow}>
				<p>
					<b>ID:</b> {contact.id}
				</p>

				<p>
					<b>User ID:</b> {contact.user_id}
				</p>

				<p>
					<b>Master contact ID:</b> {contact.master_contact_id}
				</p>

				<p>
					<b>Email:</b> {contact.email}
				</p>

				<p>
					<b>Phone:</b> {contact.phone_number}
				</p>
			</Card>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Contact info</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<div className="mx-auto my-3">
						<p>ID: {contact.id}</p>
						<p>User ID: {contact.user_id}</p>
						<p>Master contact ID: {contact.master_contact_id}</p>
						<p>Email: {contact.email}</p>
						<p>Phone: {contact.phone_number}</p>
					</div>
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
