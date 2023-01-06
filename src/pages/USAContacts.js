import MyModal from "../components/MyModal/MyModal";
import PageLayout from "../components/PageLayout/PageLayout";

const USAContacts = () => {
	return (
		<PageLayout>
			<MyModal title={"USA contacts"} fetchParams={{ countryId: 226 }} />
		</PageLayout>
	);
};

export default USAContacts;
