import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RecommendationStyles from "../styles/RecommendationStyles";

const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWEyZGIwMzdkY2IzMmE0Y2E4MDMyMzI1OGNkNmY3YiIsIm5iZiI6MTczMjY0NDMwMy4xMjA4NzMyLCJzdWIiOiI2NzNjYjI5MjRkNmRiMDBkOTNkNGRhYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.S7iq-o-yE2c1iOwEx1LEeX0HUiuT95-EITGH7NQArg0";

const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes?q=";

const RecommendationScreen = ({ route }) => {
  const { category, selectedGenres } = route.params;
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigation = useNavigation();

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      let url = "";
      if (category === "Books") {
        const genreQuery = selectedGenres.join("+");
        url = `${GOOGLE_BOOKS_API_URL}${genreQuery}&startIndex=${(page - 1) * 10}&maxResults=10`;
      } else {
        url =
          category === "Movies"
            ? `https://api.themoviedb.org/3/discover/movie?with_genres=${selectedGenres.join(",")}&page=${page}`
            : `https://api.themoviedb.org/3/discover/tv?with_genres=${selectedGenres.join(",")}&page=${page}`;
      }

      const response = await fetch(url, {
        headers: {
          accept: "application/json",
          ...(category !== "Books" && { Authorization: `Bearer ${BEARER_TOKEN}` }),
        },
      });

      const data = await response.json();

      if (category === "Books" && data.items) {
        setResults(data.items);
        setTotalPages(Math.ceil(data.totalItems / 10));
      } else if (data.results) {
        setResults(data.results);
        setTotalPages(data.total_pages || 1);
      } else {
        Alert.alert("Error", "Failed to load recommendations.");
      }
    } catch (error) {
      console.error("Error fetching recommendations: ", error);
      Alert.alert("Error", "An error occurred while fetching recommendations.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, [category, selectedGenres, page]);

  const handlePress = (item) => {
    navigation.navigate("DetailScreen", {
      id: item.id || item.volumeInfo?.id,
      category,
    });
  };

  const renderItem = ({ item }) => {
    if (category === "Books") {
      const { title, authors, imageLinks, averageRating, ratingsCount } = item.volumeInfo;
      return (
        <TouchableOpacity style={RecommendationStyles.resultItem} onPress={() => handlePress(item)}>
          {imageLinks?.thumbnail ? (
            <Image
              source={{ uri: imageLinks.thumbnail }}
              style={RecommendationStyles.poster}
            />
          ) : (
            <View style={RecommendationStyles.noImage}>
              <Text style={RecommendationStyles.noImageText}>No Image</Text>
            </View>
          )}
          <Text style={RecommendationStyles.resultTitle}>{title}</Text>
          {authors && <Text style={RecommendationStyles.resultSubtitle}>{authors.join(", ")}</Text>}
          {averageRating && (
            <Text style={RecommendationStyles.resultRating}>
              {averageRating} ★ ({ratingsCount || 0} ratings)
            </Text>
          )}
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={RecommendationStyles.resultItem} onPress={() => handlePress(item)}>
          {item.poster_path ? (
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={RecommendationStyles.poster}
            />
          ) : (
            <View style={RecommendationStyles.noImage}>
              <Text style={RecommendationStyles.noImageText}>No Image</Text>
            </View>
          )}
          <Text style={RecommendationStyles.resultTitle}>{item.title || item.name}</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={RecommendationStyles.container}>
      <Text style={RecommendationStyles.header}>Recommendations</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : results.length > 0 ? (
        <>
          <FlatList
            data={results}
            numColumns={2}
            keyExtractor={(item, index) => item.id || index.toString()}
            columnWrapperStyle={RecommendationStyles.row}
            renderItem={renderItem}
          />
          <View style={RecommendationStyles.pagination}>
            <TouchableOpacity
              style={[RecommendationStyles.pageButton, page === 1 && RecommendationStyles.disabledButton]}
              onPress={() => page > 1 && setPage(page - 1)}
              disabled={page === 1}
            >
              <Image
                source={require("../assets/back.png")}
                style={RecommendationStyles.buttonImage}
              />
            </TouchableOpacity>

            <Text style={RecommendationStyles.pageIndicator}>
              Page {page} of {totalPages}
            </Text>

            <TouchableOpacity
              style={[RecommendationStyles.pageButton, page === totalPages && RecommendationStyles.disabledButton]}
              onPress={() => page < totalPages && setPage(page + 1)}
              disabled={page === totalPages}
            >
              <Image
                source={require("../assets/next.png")}
                style={RecommendationStyles.buttonImage}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text style={RecommendationStyles.noResults}>No recommendations found.</Text>
      )}
    </View>
  );
};

export default RecommendationScreen;
