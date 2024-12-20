// import { StyleSheet } from "react-native";

// const DetailScreenStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#121212",
//     padding: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#121212",
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#121212",
//   },
//   backdropImage: {
//     width: "100%",
//     height: 200,
//     marginBottom: 20,
//   },
//   title: {
//     color: "#fff",
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   rating: {
//     color: "#FFD700",
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   subTitle: {
//     color: "#ccc",
//     fontSize: 16,
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   sectionHeader: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   overview: {
//     color: "#ccc",
//     fontSize: 14,
//     textAlign: "justify",
//     lineHeight: 20,
//   },
//   castItem: {
//     width: 100,
//     marginRight: 10,
//     alignItems: "center",
//   },
//   castImage: {
//     width: 80,
//     height: 120,
//     borderRadius: 8,
//   },
//   castPlaceholder: {
//     width: 80,
//     height: 120,
//     borderRadius: 8,
//     backgroundColor: "#333",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   castPlaceholderText: {
//     color: "#777",
//     fontSize: 12,
//   },
//   castName: {
//     color: "#fff",
//     fontSize: 12,
//     marginTop: 5,
//     textAlign: "center",
//   },
//   castRole: {
//     color: "#ccc",
//     fontSize: 10,
//     textAlign: "center",
//   },
// });

// export default DetailScreenStyles;

import { StyleSheet } from "react-native";

const DetailScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
    padding: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
  },
  backdropImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: "#ffb800",
    marginBottom: 5,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
  overview: {
    fontSize: 14,
    color: "#ddd",
    lineHeight: 22,
  },
  castList: {
    paddingBottom: 10,
  },
  castContainer: {
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 15,
  },
  castImage: {
    width: 90,
    height: 120,
    borderRadius: 8,
    marginBottom: 5,
  },
  castName: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    width: 90,
    flexWrap: "wrap",
  },
  castSection: {
    marginBottom: 20, // Add some gap after the "Cast" section
  },
});

export default DetailScreenStyles;
