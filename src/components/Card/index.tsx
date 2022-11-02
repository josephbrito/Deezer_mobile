import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { IData } from "../../services/types";

import { styles } from "./styles";

const Card: React.FC<IData> = ({
  id,
  title,
  preview,
  link,
  album,
  artist,
  duration,
}: IData) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <Image source={{ uri: album.cover_big }} style={styles.image} />
        <View style={styles.content}>
          <Text style={[styles.text, styles.name_artist]}>{artist.name}</Text>
          <Text style={[styles.text, styles.name_song]}>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;
