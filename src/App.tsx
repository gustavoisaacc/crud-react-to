import { useState } from "react";
import "./App.css";
import CreateNewUser from "./components/CreateNewUser";
import { ListOfUsesrs } from "./components/ListOfUsers";
import { UserId } from "./store/users/slice";

function App() {
	const [id, setId] = useState<UserId>("");
	console.log(id);
	return (
		<>
			<ListOfUsesrs setId={setId} />
			<CreateNewUser id={id} setId={setId} />
		</>
	);
}

export default App;
