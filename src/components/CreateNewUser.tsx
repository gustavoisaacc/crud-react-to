import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUserAction } from "../hook/useUserAction";
import { useEffect, useState } from "react";
import { useAppSelector } from "../hook/store";

function CreateNewUser({ id, setId }) {
	const user = useAppSelector((state) => state.users);
	const { addUser } = useUserAction();

	const [state, setState] = useState({
		name: "",
		email: "",
		github: "",
	});
	console.log(state);

	useEffect(() => {
		if (id) {
			setState(user.filter((item) => item.id === id));
		}
	}, [id]);

	const handelChange = (e) => {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		addUser({
			name,
			email,
			github,
		});

		form.reset();
	};

	return (
		<Card className="my-5">
			<Title>Crear Nuevo usuario</Title>
			<form onSubmit={handelChange} className="grid gap-5 ">
				<TextInput
					placeholder="Ingresa el Nombre"
					name="name"
					value={state.name}
				/>
				<TextInput placeholder="Ingresa el Email" name="email" />
				<TextInput placeholder="Ingresa el Gitub" name="github" />
				<div className="btn">
					<Button type="submit">Crear Usuario</Button>
				</div>
			</form>
		</Card>
	);
}

export default CreateNewUser;
