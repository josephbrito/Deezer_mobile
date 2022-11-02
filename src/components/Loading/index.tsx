import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

import ReactLoading from "react-loading";

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "green" }}>Loading</Text>
    </View>
  );
};

export default Loading;
