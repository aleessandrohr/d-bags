import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export const usePersistedState = <T>(key: string, value: T): Response<T> => {
	const [state, setState] = useState<T>(value);

	useEffect(() => {
		const storageValue = localStorage.getItem(key);

		if (storageValue) setState(JSON.parse(storageValue));
	}, [key]);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState];
};
