// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "./screens/HomeScreen";
// import GenreSelectionScreen from "./screens/GenreSelectionScreen";
// import RecommendationScreen from "./screens/RecommendationScreen";
// import DetailScreen from "./screens/DetailScreen";

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="GenreSelection" component={GenreSelectionScreen} />
//         <Stack.Screen name="Recommendations" component={RecommendationScreen} />
//         <Stack.Screen name="DetailScreen" component={DetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import GenreSelectionScreen from "./screens/GenreSelectionScreen";
import RecommendationScreen from "./screens/RecommendationScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createStackNavigator();

const App = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  const handleSkip = () => {
    setSplashVisible(false);
  };

  if (isSplashVisible) {
    return (
      <ImageBackground
        source={require("./assets/start.png")} // Correct relative path to image in the assets folder
        style={styles.splashContainer}
        resizeMode="cover" // Ensures the image is fully displayed without cropping
      >
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GenreSelection" component={GenreSelectionScreen} />
        <Stack.Screen name="Recommendations" component={RecommendationScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  skipButton: {
    position: "absolute",
    bottom: "10%", // Adjust this value to move the button further down
    left: "53%", // Horizontally center the button
    marginLeft: -50, // Offsetting to align perfectly
    padding: 15,
    backgroundColor: "#ff5722",
    borderRadius: 8,
  },
  skipButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
