// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import GenreSelectionStyles from "../styles/GenreSelectionStyles";

// const GenreSelectionScreen = ({ route, navigation }) => {
//   const { category } = route.params;
//   const [genres, setGenres] = useState([]);
//   const [selectedGenres, setSelectedGenres] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchGenres = async () => {
//       try {
//         let fetchedGenres = [];
//         if (category === "Books") {
//           // Predefined book genres (No need to fetch from an API)
//           fetchedGenres = [
//             { id: "fiction", name: "Fiction" },
//             { id: "nonfiction", name: "Nonfiction" },
//             { id: "fantasy", name: "Fantasy" },
//             { id: "romance", name: "Romance" },
//             { id: "thriller", name: "Thriller" },
//             { id: "mystery", name: "Mystery" },
//             { id: "science", name: "Science" },
//             { id: "history", name: "History" },
//           ];
//         } else {
//           // Fetch genres from API for Movies or TV Shows
//           const url =
//             category === "Movies"
//               ? "https://api.themoviedb.org/3/genre/movie/list?language=en"
//               : "https://api.themoviedb.org/3/genre/tv/list?language=en";

//           const response = await fetch(url, {
//             headers: {
//               accept: "application/json",
//               Authorization: `Bearer ${BEARER_TOKEN}`,
//             },
//           });

//           const data = await response.json();
//           fetchedGenres = data.genres || [];
//         }
//         setGenres(fetchedGenres);
//       } catch (error) {
//         Alert.alert("Error", "An error occurred while fetching genres.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGenres();
//   }, [category]);

//   const toggleGenre = (genreId) => {
//     if (selectedGenres.includes(genreId)) {
//       setSelectedGenres((prev) => prev.filter((id) => id !== genreId));
//     } else {
//       setSelectedGenres((prev) => [...prev, genreId]);
//     }
//   };

//   const handleSearch = () => {
//     if (selectedGenres.length === 0) {
//       Alert.alert("Error", "Please select at least one genre.");
//       return;
//     }
//     navigation.navigate("Recommendations", { category, selectedGenres });
//   };

//   return (
//     <View style={GenreSelectionStyles.container}>
//       <Text style={GenreSelectionStyles.header}>Select Genres for {category}</Text>
//       {loading ? (
//         <ActivityIndicator size="large" color="#fff" />
//       ) : (
//         <View style={GenreSelectionStyles.genreContainer}>
//           {genres.map((genre) => (
//             <TouchableOpacity
//               key={genre.id}
//               style={[
//                 GenreSelectionStyles.genreButton,
//                 selectedGenres.includes(genre.id) && GenreSelectionStyles.genreButtonSelected,
//               ]}
//               onPress={() => toggleGenre(genre.id)}
//             >
//               <Text
//                 style={[
//                   GenreSelectionStyles.genreText,
//                   selectedGenres.includes(genre.id) && GenreSelectionStyles.genreTextSelected,
//                 ]}
//               >
//                 {genre.name}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//       <TouchableOpacity style={GenreSelectionStyles.searchButton} onPress={handleSearch}>
//         <Text style={GenreSelectionStyles.searchButtonText}>Get Recommendations</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default GenreSelectionScreen;


import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GenreSelectionStyles from "../styles/GenreSelectionStyles";

const GenreSelectionScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWEyZGIwMzdkY2IzMmE0Y2E4MDMyMzI1OGNkNmY3YiIsIm5iZiI6MTczMjAzMTEyMi42MDA5OTk4LCJzdWIiOiI2NzNjYjI5MjRkNmRiMDBkOTNkNGRhYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FOQlvcvc5gQ75pouCFl3iHtwpypQ2XjLX2f1wE06S2A";  // Replace this with your actual Bearer token

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        let fetchedGenres = [];
        if (category === "Books") {
          // Predefined book genres (No need to fetch from an API)
          fetchedGenres = [
            { id: "fiction", name: "Fiction" },
            { id: "nonfiction", name: "Nonfiction" },
            { id: "fantasy", name: "Fantasy" },
            { id: "romance", name: "Romance" },
            { id: "thriller", name: "Thriller" },
            { id: "mystery", name: "Mystery" },
            { id: "science", name: "Science" },
            { id: "history", name: "History" },
          ];
        } else {
          // Fetch genres from API for Movies or TV Shows
          const url =
            category === "Movies"
              ? "https://api.themoviedb.org/3/genre/movie/list?language=en"
              : "https://api.themoviedb.org/3/genre/tv/list?language=en";

          const response = await fetch(url, {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${BEARER_TOKEN}`,
            },
          });

          const data = await response.json();
          fetchedGenres = data.genres || [];
        }
        setGenres(fetchedGenres);
      } catch (error) {
        Alert.alert("Error", "An error occurred while fetching genres.");
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, [category]);

  const toggleGenre = (genreId) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres((prev) => prev.filter((id) => id !== genreId));
    } else {
      setSelectedGenres((prev) => [...prev, genreId]);
    }
  };

  const handleSearch = () => {
    if (selectedGenres.length === 0) {
      Alert.alert("Error", "Please select at least one genre.");
      return;
    }
    navigation.navigate("Recommendations", { category, selectedGenres });
  };

  return (
    <View style={GenreSelectionStyles.container}>
      <Text style={GenreSelectionStyles.header}>Select Genres for {category}</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <View style={GenreSelectionStyles.genreContainer}>
          {genres.map((genre) => (
            <TouchableOpacity
              key={genre.id}
              style={[
                GenreSelectionStyles.genreButton,
                selectedGenres.includes(genre.id) && GenreSelectionStyles.genreButtonSelected,
              ]}
              onPress={() => toggleGenre(genre.id)}
            >
              <Text
                style={[
                  GenreSelectionStyles.genreText,
                  selectedGenres.includes(genre.id) && GenreSelectionStyles.genreTextSelected,
                ]}
              >
                {genre.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <TouchableOpacity style={GenreSelectionStyles.searchButton} onPress={handleSearch}>
        <Text style={GenreSelectionStyles.searchButtonText}>Get Recommendations</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenreSelectionScreen;
