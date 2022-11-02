import React from "react";
import { View } from "react-native";
import Header from "../Header";
import Main from "../Main";

const Layout: React.FC = () => {
  return (
    <View style={{ height: "100%" }}>
      <Header />
      <Main />
    </View>
  );
};

export default Layout;
