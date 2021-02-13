import useSWR from "swr";

import { fetcher } from "helpers/fetcher";

export function useFetch<Data = any, Error = any>(url: string) {
	const { data, error, mutate } = useSWR<Data, Error>(url, fetcher, {
		errorRetryCount: 5,
		errorRetryInterval: 3000,
	});

	return { data, error, mutate };
}
