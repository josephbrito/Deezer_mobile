import { createContext, useContext, useState } from "react";
import { IData, DEFAULT_VALUE, IChildren } from "../types";

const DataContext = createContext<IData>(DEFAULT_VALUE);

export function DataProvider({ children }: IChildren) {
  const [datas, setDatas] = useState<string>("");

  return (
    <DataContext.Provider value={{ datas, setDatas }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const { datas, setDatas } = useContext(DataContext);

  return { datas, setDatas };
}
