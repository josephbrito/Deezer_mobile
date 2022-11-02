import React from "react";
import { Image, SafeAreaView, TextInput, View } from "react-native";

import { isIphoneX } from "react-native-iphone-x-helper";

import { styles } from "./styles";

import DeezerLogo from "../../assets/deezer.png";
import SearchLogo from "../../assets/search.png";

import { useText } from "../../context";
import { useData } from "../../context/datas";

const Header: React.FC = () => {
  const { text, setText } = useText();
  const { setDatas } = useData();

  const handleInputChange = (e: string) => {
    setText(e);
  };

  return (
    <View
      style={
        isIphoneX() ? [styles.conatiner, { paddingTop: 30 }] : styles.conatiner
      }
    >
      <Image source={DeezerLogo} style={styles.image} />
      <SafeAreaView style={styles.input_container}>
        <Image source={SearchLogo} style={styles.logo_search} />
        <TextInput
          style={styles.input}
          placeholder="Search song or artist"
          placeholderTextColor={"#ccc"}
          value={text}
          onChangeText={handleInputChange}
          onSubmitEditing={() => setDatas(text)}
        />
      </SafeAreaView>
    </View>
  );
};

export default Header;
