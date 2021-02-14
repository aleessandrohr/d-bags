import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function useThemeState(key: string, initial: string): Response<string> {
	const [theme, setTheme] = useState<string>(initial);

	useEffect(() => {
		const storageValue = localStorage.getItem(key);

		if (storageValue) {
			setTheme(storageValue);
		} else {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				setTheme("dark");
			} else {
				setTheme("light");
			}
		}
	}, [key]);

	useEffect(() => {
		localStorage.setItem(key, theme);
	}, [key, theme]);

	return [theme, setTheme];
}
