import useSWR from "swr";

const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (response.status !== 200) {
    const error = {
      status: response.status,
      message: response.statusText,
    };

    throw error;
  }

  const data = await response.json();

  return data;
};

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(url, fetcher, {
    errorRetryCount: 3,
    errorRetryInterval: 5000,
    revalidateOnReconnect: true,
  });

  return { data, error, mutate };
}
