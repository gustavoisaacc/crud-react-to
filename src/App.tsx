import "./App.css";
import CreateNewUser from "./components/CreateNewUser";
import { ListOfUsesrs } from "./components/ListOfUsers";

function App() {
	// const [id, setId] = useState<UserId>("");
	return (
		<>
			<ListOfUsesrs />
			<CreateNewUser />
		</>
	);
}

export default App;
