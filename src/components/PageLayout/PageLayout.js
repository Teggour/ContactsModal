import { Container, Nav, Navbar } from "react-bootstrap";

const PageLayout = ({ children }) => {
	return (
		<div>
			<div className="page-header">
				<Navbar bg="light" expand="lg">
					<Container>
						<Navbar.Brand
							href="/"
							className="d-flex justify-content-between align-items-center"
						>
							<img
								alt=""
								src="/logo.svg"
								width="24"
								height="24"
								className="d-inline-block me-2"
							/>{" "}
							Contacts Tech Task
						</Navbar.Brand>

						<Navbar.Toggle aria-controls="basic-navbar-nav" />

						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="/">Home</Nav.Link>

								<Nav.Link href="/all">All</Nav.Link>

								<Nav.Link href="/usa">USA</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>

			<div className="page-main">
				<Container>{children}</Container>
			</div>

			<div className="page-footer">
				<Container></Container>
			</div>
		</div>
	);
};

export default PageLayout;
