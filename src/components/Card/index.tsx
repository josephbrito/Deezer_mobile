import React, { useState, useEffect } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Audio } from "expo-av";

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
  const [song, setSong] = useState<any>();

  const playSong = async () => {
    const { sound: playbackObject } = await Audio.Sound.createAsync(
      { uri: preview },
      { shouldPlay: true }
    );
    setSong(playbackObject);
    await playbackObject.unloadAsync();
  };

  useEffect(() => {
    return song
      ? () => {
          console.log("Unloading Sound");
          song.unloadAsync();
        }
      : undefined;
  }, [song]);

  return (
    <Pressable onPress={() => playSong()}>
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
