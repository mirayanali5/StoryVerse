import { StyleSheet } from "react-native";

const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 85,
  },
  header: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "baseline",
    marginBottom: 55,
  },
  categoryButton: {
    backgroundColor: "#d44f02",
    padding: 15, //box size
    borderRadius: 98, // roundness
    marginVertical: 15,//spaces between boxes
    alignItems: "center",
  },
  categoryButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreenStyles;
