import { StyleSheet } from "react-native";
import { style_global } from "../../../global/style_global";

export const styles = StyleSheet.create({
  conatiner: {
    height: "10%",
    backgroundColor: style_global.colors.background.dark_purple,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  image: {
    width: 62,
    height: 14,
  },

  logo_search: {
    height: 20,
    width: 20,
  },

  input_container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(255, 255, 255, .1)",
    justifyContent: "space-evenly",
    width: "55%",
  },

  input: {
    height: 30,
    padding: 5,
    color: style_global.colors.text.white,
  },
});
