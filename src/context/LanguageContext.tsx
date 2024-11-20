import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState("fr");
	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}

export const useLanguage = () => {
	const value = useContext(LanguageContext);
	if (value == null) {
		throw new Error("useLanguage has to be used within <LanguagProvider>");
	}
	return value;
};
