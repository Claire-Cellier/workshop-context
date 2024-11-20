import { useLanguage } from "../context/LanguageContext";

function Toggle() {
	const { setLanguage } = useLanguage();

	const handleToggle = (event) => {
		setLanguage(event.target.value);
	};
	return (
		<>
			<select id="lang" name="lang" onChange={handleToggle}>
				<option value="fr">FR</option>
				<option value="en">EN</option>
				<option value="cs">CS</option>
				<option value="hu">HU</option>
				<option value="ko">KO</option>
			</select>
		</>
	);
}

export default Toggle;
