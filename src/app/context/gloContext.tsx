"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type gloContext = {
  apiKey: string;
  setApiKey: Dispatch<SetStateAction<string>>;
};

type gloContextProps = {
  children: ReactNode;
};

export const gloContext = createContext<gloContext | null>(null);

export default function GloContextProvider({ children }: gloContextProps) {
  const [apiKey, setApiKey] = useState<string>("");

  // Get API key from local storage
  useEffect(() => {
    const apiKeyFromLocalStore = JSON.parse(
      localStorage.getItem("API_KEY") || "{}"
    );
    if (apiKeyFromLocalStore.length > 0) setApiKey(apiKeyFromLocalStore);
  }, []);

  const value = {
    apiKey,
    setApiKey,
  };

  return (
    <gloContext.Provider value={{ ...value }}>{children}</gloContext.Provider>
  );
}

export function useGloContext() {
  const context = useContext(gloContext);

  if (context?.apiKey === undefined) throw new Error("Error");

  return { ...context };
}
