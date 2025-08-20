import { Countdown } from "./components/countdown.tsx";
import { Heading } from "./components/Heading.tsx";
import { Logo } from "./components/logo.tsx";
import { Form } from "./components/form.tsx";
import { Menu } from "./components/menu.tsx";

function App() {
	return (
		<>
			<Heading>
				<Logo></Logo>
			</Heading>
			<Heading>
				<Menu></Menu>
			</Heading>
			<Heading>
				<Countdown></Countdown>
			</Heading>

			<Heading>
				<Form></Form>
			</Heading>

		</>
	);
}

export default App;
