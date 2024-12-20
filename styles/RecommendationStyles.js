import { StyleSheet } from "react-native";

const RecommendationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  header: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
  resultItem: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  poster: {
    width: 150,
    height: 225,
    borderRadius: 8,
  },
  noImage: {
    width: 150,
    height: 225,
    borderRadius: 8,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  noImageText: {
    color: "#fff",
    fontSize: 14,
  },
  resultTitle: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  pageButton: {
    width: 40,
    height: 40,
    borderRadius: 45,
    backgroundColor: "#d44f02",
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#555",
  },
  buttonImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  pageIndicator: {
    color: "#fff",
    fontSize: 16,
  },
  noResults: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
});

export default RecommendationStyles;
