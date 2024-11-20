import data from "../data.json";

import Card from "./Card";

import { useLanguage } from "../context/LanguageContext";

function List() {
	const { language } = useLanguage();

	return (
		<>
			{data[language].monuments.map((monument) => (
				<Card key={monument.id} monument={monument} />
			))}
		</>
	);
}

export default List;
