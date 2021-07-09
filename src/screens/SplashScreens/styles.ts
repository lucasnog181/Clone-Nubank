import { StyleSheet } from "react-native";

export const sx = StyleSheet.create({
  background: {
    width: "100%",
    resizeMode: "stretch",
    flex: 1,
  },

  content: {
    marginTop: 80,
    marginHorizontal: 30,
    justifyContent: "space-between",
    flex: 1,
  },

  Logo: {
    width: 70,
    height: 50,
  },

  contentTitle: {
    marginBottom: 60,
    width: "100%",
  },

  Title: {
    fontSize: 28,
    color: "#FFFF",
    textAlign: "left",
  },

  TouchableOpacity: {
    marginTop: 30,
    backgroundColor: "#FFFF",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },

  TouchableOpacityTitle: {
    fontSize: 14,
    color: "#820AD1",
    fontWeight: "700",
  },

  TouchableOpacityNext: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  TouchableOpacityNextTitle: {
    color: "#FFFF",
    fontWeight: "600",
    fontSize: 15,
  },

  contentModal: {
    width: "100%",
    height: 820,
    backgroundColor: "#FFFF",
  },

  containerModal: {
    padding: 20,
  },

  ViewTextModal: {
    marginLeft: 10,
  },

  titleModal: {
    marginTop: 35,
    fontSize: 23,
  },

  InputModal: {
    marginTop: 18,
    marginLeft: 5,
    fontSize: 18,
  },

  ButtonModal: {
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
    height: 50,
    justifyContent: "center",
    borderTopColor: "rgba(196, 196, 196, 0.31)",
    borderTopWidth: 1,
  },

  desable: {
    color: "#C4C4C4",
    fontWeight: "600",
  },

  active: {
    color: "#3F13BB",
    fontWeight: "600",
  },
});
