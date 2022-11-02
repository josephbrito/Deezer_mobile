import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { IData } from "../../services/types";

import { styles } from "./styles";

const Sound = require("react-native-sound");

Sound.setCategory("Playback");

Sound.setCategory("Playback");

var audio = new Sound(
  "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
  null,
  (error: any) => {
    if (error) {
      console.log("failed to load the sound", error);
      return;
    }
    // if loaded successfully
    console.log(
      "duration in seconds: " +
        audio.getDuration() +
        "number of channels: " +
        audio.getNumberOfChannels()
    );
  }
);

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
