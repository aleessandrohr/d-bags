import useSWR from "swr";

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(
    url,
    async (url) => {
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
    },
    {
      errorRetryCount: 5,
      errorRetryInterval: 5000,
      revalidateOnReconnect: true,
    }
  );

  return { data, error, mutate };
}
