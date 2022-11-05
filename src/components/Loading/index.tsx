import React from "react";
import { Text, View, ActivityIndicator } from "react-native";

import { styles } from "./styles";

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} />
    </View>
  );
};

export default Loading;
