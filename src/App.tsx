import "./App.css";

import List from "./components/List";
import Nav from "./components/Nav";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
	console.log("wesolu");
	return (
		<>
			<LanguageProvider>
				<Nav />
				<List />
			</LanguageProvider>
		</>
	);
}

export default App;
