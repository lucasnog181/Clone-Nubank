import { StyleSheet } from "react-native";

export const sx = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  contentButtons: {
    flexDirection: "row",
  },

  TitleUser: {
    fontSize: 28,
    color: "#ffff",
    fontWeight: "600",
  },

  ButtonEye: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 14,
    marginRight: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  ButtonCog: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 14,
    borderRadius: 50,
  },

  contentOpenMenu: {
    backgroundColor: "#820AD1",
    width: "91%",
    height: "100%",
    marginHorizontal: 20,
    marginTop: -55,
  },

  containerOpenMenuBank: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  BankName: {
    color: "#FFFF",
    fontSize: 18,
    marginRight: 10,
  },

  BankNumber: {
    color: "#FFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  continerButtonList: {
    marginTop: 90,
  },

  ButtonList: {
    borderBottomColor: "#999999",
    borderTopColor: "#999999",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  ButtonListText: {
    color: "#FFFF",
    fontSize: 15,
  },

  ButtonLogout: {
    marginTop: 30,
    borderColor: "#FFFF",
    borderWidth: 1,
    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },

  ButtonLogoutText: {
    color: "#FFFF",
    fontSize: 13,
    fontWeight: "bold",
  },

  contentBankOptions: {
    marginTop: 60,
    alignItems: "center",
  },

  Code: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});
