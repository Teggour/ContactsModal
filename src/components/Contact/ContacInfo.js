import { ListGroup } from "react-bootstrap";

const ContacInfo = ({ contact }) => {
	return (
		<ListGroup>
			<ListGroup.Item>
				<b>ID:</b> {contact.id}
			</ListGroup.Item>

			<ListGroup.Item>
				<b>User ID:</b> {contact.user_id}
			</ListGroup.Item>

			<ListGroup.Item>
				<b>Master contact ID:</b> {contact.master_contact_id}
			</ListGroup.Item>

			<ListGroup.Item>
				<b>Email:</b> {contact.email}
			</ListGroup.Item>

			<ListGroup.Item>
				<b>Phone:</b> {contact.phone_number}
			</ListGroup.Item>
		</ListGroup>
	);
};

export default ContacInfo;
