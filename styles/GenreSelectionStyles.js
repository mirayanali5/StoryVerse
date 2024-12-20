// import { StyleSheet } from "react-native";

// const GenreSelectionStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#121212",
//     padding: 20,
//   },
//   header: {
//     color: "#fff",
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   genreContainer: {
//     flexWrap: "wrap",
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   genreButton: {
//     padding: 10,
//     margin: 5,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: "#fff",
//   },
//   genreButtonSelected: {
//     backgroundColor: "#d44f02",
//   },
//   genreText: {
//     color: "#fff",
//   },
//   genreTextSelected: {
//     fontWeight: "bold",
//   },
//   switchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginVertical: 20,
//   },
//   switchLabel: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   searchButton: {
//     backgroundColor: "#d44f02",
//     padding: 15,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   searchButtonText: {
//     color: "#000",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default GenreSelectionStyles;

import { StyleSheet } from "react-native";

const GenreSelectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f", // Dark background for modern feel
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  header: {
    color: "#fff",
    fontSize: 20, // Slightly smaller font size
    fontWeight: "600", // Professional weight for the header
    textAlign: "center",
    marginBottom: 15,
  },
  genreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  genreButton: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    margin: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#444", // Subtle border color
    backgroundColor: "#333", // Slightly dark button background
  },
  genreButtonSelected: {
    backgroundColor: "#d44f02", // Accent color for selection
    borderColor: "#d44f02", // Border color matches button
  },
  genreText: {
    color: "#fff",
    fontSize: 14, // Slightly smaller font size for text
    textAlign: "center",
  },
  genreTextSelected: {
    fontWeight: "bold", // Highlight the selected text
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15, // Tighten the margin
  },
  switchLabel: {
    color: "#fff",
    fontSize: 14,
  },
  searchButton: {
    backgroundColor: "#d44f02", // Keep the consistent accent color
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  searchButtonText: {
    color: "#fff", // Text color for contrast
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GenreSelectionStyles;
