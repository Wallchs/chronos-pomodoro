import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading.tsx";
function App() {
	return (
		<>
			<Heading>
				<button className="p-auto m-auto">
					<TimerIcon />
				</button>
			</Heading>
			<div className="is-flex is-justify-content-center">
				<p>um novo texto aqui!</p>
			</div>
		</>
	);
}

export default App;
