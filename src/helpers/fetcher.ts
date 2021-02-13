export const fetcher = async (url: string) => {
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
