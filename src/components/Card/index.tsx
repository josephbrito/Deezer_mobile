import React, { useState, useEffect } from "react";
import { Button, Image, Pressable, Text, View } from "react-native";
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
  const [sound, setSound] = useState<any>();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: preview },
      { shouldPlay: false }
    );
    setSound(sound);

    await sound.playAsync();
  };

  const stopSong = async () => {
    await sound.stopAsync();
    setSound(null);
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <View style={styles.container}>
        <Image source={{ uri: album.cover_big }} style={styles.image} />
        <View style={styles.content}>
          <Text style={[styles.text, styles.name_artist]}>{artist.name}</Text>
          <Text style={[styles.text, styles.name_song]}>{title}</Text>

          <Pressable onPress={sound ? stopSong : playSound}>
            <Text
              style={[
                styles.text,
                styles.button_song,
                sound ? { color: "#FE5F55" } : { color: "#6B9AC4" },
              ]}
            >
              {sound ? "Stop" : "Play"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Card;
