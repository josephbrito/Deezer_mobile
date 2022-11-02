import { createContext, useContext, useState } from "react";
import { IProps, IChildren } from "./types";

const textContext = createContext<IProps>({} as IProps);

export function TextProvider({ children }: IChildren) {
  const [text, setText] = useState<string>("");

  return (
    <textContext.Provider value={{ text, setText }}>
      {children}
    </textContext.Provider>
  );
}

export function useText() {
  const { text, setText } = useContext(textContext);

  return { text, setText };
}
