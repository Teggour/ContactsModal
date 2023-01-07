import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import axiosInstance from "../../axios/mainAxiosInstance";
import Loader from "../Loader/Loader";
import useDebounce from "../../hooks/useDebounce";
import Contact from "../Contact/Contact";

const MyModal = ({ title, fetchParams = {} }) => {
	const [show, setShow] = useState(false);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(10);
	const [contacts, setContacts] = useState([]);
	const [onlyEven, setOnlyEven] = useState(false);
	const [search, setSearch] = useState("");
	const [isFetching, setIsFetching] = useState(false);

	const debouncedSearch = useDebounce(search);

	const history = useHistory();

	const handleClose = () => history.push("/");
	const handleShow = () => setShow(true);

	const loadContacts = async () => {
		setIsFetching(true);

		const {
			data: { contacts: contactsAPI, total: totalAPI },
		} = await axiosInstance.get("", {
			params: {
				page: page,
				companyId: 171,
				...fetchParams,
				...(debouncedSearch.length ? { query: debouncedSearch } : {}),
			},
		});

		const newContacts = Object.values(contactsAPI);

		setTotal(totalAPI);

		setPage((page) => page + 1);

		setContacts((contacts) => [...contacts, ...newContacts]);

		setIsFetching(false);
	};

	const filtredItems = onlyEven
		? contacts.filter(({ id }) => id % 2 === 0)
		: contacts;

	useEffect(() => {
		handleShow();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		loadContacts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedSearch]);

	return (
		<Modal
			show={show}
			onHide={handleClose}
			scrollable={true}
			fullscreen={true}
		>
			<Modal.Header closeButton={true}>
				<div className="d-flex flex-column align-items-center w-100">
					<Modal.Title className="mb-1">{title}</Modal.Title>

					<Form>
						<Form.Group>
							<Form.Control
								type="text"
								placeholder="Searh..."
								value={search}
								onChange={({ target: { value } }) => {
									setSearch(value);
									setPage(1);
									setContacts([]);
								}}
							/>
						</Form.Group>
					</Form>
				</div>
			</Modal.Header>

			<Modal.Body id="scrollableModalBody">
				<InfiniteScroll
					dataLength={contacts.length}
					next={loadContacts}
					hasMore={contacts.length < total}
					loader={<Loader />}
					scrollableTarget="scrollableModalBody"
					endMessage={
						<p className="text-center">
							<b>Yay! You have seen it all</b>
						</p>
					}
					style={{ overflowY: "hidden" }}
				>
					{filtredItems.length ? (
						filtredItems.map((contact) => (
							<Contact key={contact.id} contact={contact} />
						))
					) : !isFetching ? (
						<p className="text-center">
							<b>No data...</b>
						</p>
					) : null}
				</InfiniteScroll>
			</Modal.Body>

			<Modal.Footer>
				<Form>
					<Form.Check
						type="switch"
						id="only-even-switch"
						label="OnlyEven"
						checked={onlyEven}
						onChange={() => setOnlyEven((prev) => !prev)}
					/>
				</Form>

				<Button variant="close-custom" onClick={handleClose}>
					Close
				</Button>

				<Button variant="all" onClick={() => history.push("/all")}>
					All contacts
				</Button>

				<Button variant="usa" onClick={() => history.push("/usa")}>
					USA contacts
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default MyModal;
