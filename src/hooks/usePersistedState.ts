import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(key: string, initial: T): Response<T> {
	const [state, setState] = useState<T>(initial);

	useEffect(() => {
		const storageValue = localStorage.getItem(key);

		if (storageValue) {
			setState(JSON.parse(storageValue));
		}
	}, [key]);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState];
}
