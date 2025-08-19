import { Heading } from "./components/Heading.tsx";
import { Logo } from "./components/logo.tsx";
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
		</>
	);
}

export default App;
