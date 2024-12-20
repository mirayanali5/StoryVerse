// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import  HomeScreenStyles from "../styles/HomeScreenStyles";

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={HomeScreenStyles.container}>
//       <Text style={HomeScreenStyles.header}>
//       Your Next Favorite – Movies, Shows, & Books Await!
//       </Text>
//       <TouchableOpacity
//         style={HomeScreenStyles.categoryButton}
//         onPress={() =>
//           navigation.navigate("GenreSelection", { category: "Movies" })
//         }
//       >
//         <Text style={HomeScreenStyles.categoryButtonText}>Movies</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={HomeScreenStyles.categoryButton}
//         onPress={() =>
//           navigation.navigate("GenreSelection", { category: "TV Shows" })
//         }
//       >
//         <Text style={HomeScreenStyles.categoryButtonText}>TV Shows</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={HomeScreenStyles.categoryButton}
//         onPress={() =>
//           navigation.navigate("GenreSelection", { category: "Books" })
//         }
//       >
//         <Text style={HomeScreenStyles.categoryButtonText}>Books</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default HomeScreen;

  

import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import HomeScreenStyles from "../styles/HomeScreenStyles";

// Import the image from the assets folder
const backgroundImage = require("../assets/wall.jpg");

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={HomeScreenStyles.container}>
      <Text style={HomeScreenStyles.header}>
      Find Your Next Favorite!
      </Text>
      <TouchableOpacity
        style={HomeScreenStyles.categoryButton}
        onPress={() =>
          navigation.navigate("GenreSelection", { category: "Movies" })
        }
      >
        <Text style={HomeScreenStyles.categoryButtonText}>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={HomeScreenStyles.categoryButton}
        onPress={() =>
          navigation.navigate("GenreSelection", { category: "TV Shows" })
        }
      >
        <Text style={HomeScreenStyles.categoryButtonText}>TV Shows</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={HomeScreenStyles.categoryButton}
        onPress={() =>
          navigation.navigate("GenreSelection", { category: "Books" })
        }
      >
        <Text style={HomeScreenStyles.categoryButtonText}>Books</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default HomeScreen;
