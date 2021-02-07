import useSWR from "swr";

import { ErrorFetch } from "../@types/ErrorFetch";

const fetcher = async (url: string) => {
	const response = await fetch(url);

	if (response.status !== 200) {
		const error = {
			status: response.status,
			statusText: response.statusText,
		};

		throw error;
	}

	const data = await response.json();

	return data;
};

export function useFetch<Data = any, Error = ErrorFetch>(url: string) {
	const { data, error, mutate } = useSWR<Data, Error>(url, fetcher, {
		errorRetryCount: 5,
		errorRetryInterval: 3000,
	});

	return { data, error, mutate };
}
