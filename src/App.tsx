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
                <h2> teste!!</h2>
			</div>
		</>
	);
}

export default App;
