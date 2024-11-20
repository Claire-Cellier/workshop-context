import Toggle from "./Toggle";

import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";

function Nav() {
	const { language } = useLanguage();

	return (
		<nav>
			<h1>{data[language].titre}</h1>
			<Toggle />
		</nav>
	);
}

export default Nav;
