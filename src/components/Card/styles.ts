import { StyleSheet } from "react-native";
import { style_global } from "../../../global/style_global";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 170,
    backgroundColor: "rgba(0, 0, 0, .7)",
    flexDirection: "row",
    padding: 20,
    marginVertical: 20,
  },

  content: {
    marginLeft: 40,
  },

  text: {
    color: style_global.colors.text.white,
  },

  name_artist: {
    fontWeight: "bold",
    fontSize: 20,
  },

  name_song: {
    maxWidth: 200,
  },

  image: {
    width: 130,
    height: "100%",
  },

  button_song: {
    marginTop: 20,
    fontSize: 20,
    color: style_global.colors.text.blue,
  },
});
