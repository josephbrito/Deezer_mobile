import React from "react";

export interface IProps {
  text: string;
  setText: (value: string) => void;
}

export interface IChildren {
  children: React.ReactNode;
}

// types for data

export interface IData {
  datas: string;
  setDatas: (value: string) => void;
}

export const DEFAULT_VALUE = {
  datas: "",
  setDatas: () => {},
};
