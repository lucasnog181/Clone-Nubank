import { StyleSheet } from "react-native";

export const sx = StyleSheet.create({
  cardContainer: {
    width: "90%",
    height: 200,
    marginTop: 20,
    backgroundColor: "#FFFF",
    marginHorizontal: 20,
    borderRadius: 6,
    padding: 20,
  },

  cardTitleContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  Icons: {
    marginRight: 10,
  },

  CardTitle: {
    color: "gray",
    fontSize: 18,
  },

  CardDescription: {
    color: "gray",
    fontSize: 16,
  },

  CardButton: {
    marginTop: 17,
    width: 140,
    padding: 10,
    borderColor: "#5A2894",
    borderWidth: 0.5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  CardButtonText: {
    fontSize: 11,
    textTransform: "uppercase",
    color: "#5A2894",
    fontWeight: "700",
  },

  AccountValue: {
    marginTop: 10,
    fontSize: 32,
    fontWeight: "600",
    color: "#0099FF",
  },

  Value: {
    marginTop: 7,
    fontSize: 32,
    fontWeight: "600",
    color: "#0099FF",
  },

  contentLimit: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  Limit: {
    fontSize: 14,
    color: "gray",
  },

  LimitValues: {
    marginLeft: 5,
    color: "#009999",
    fontSize: 16,
    fontWeight: "700",
  },
});
