import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(
  key: string,
  defaultValue: T
): Response<T> {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    const theme = localStorage.getItem(key);

    if (theme) {
      setState(JSON.parse(theme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
