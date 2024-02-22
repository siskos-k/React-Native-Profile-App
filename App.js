import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handlePress = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const openLinkedIn = () => {
    Linking.openURL(
      "https://www.linkedin.com/in/konstantinos-siskos-3620911b1/?originalSubdomain=gr",
    );
  };
  const openGitHub = () => {
    Linking.openURL("https://github.com/siskos-k");
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#151515" : "white" },
      ]}
    >
      <Image source={require("./assets/flip.png")} style={styles.profilePic} />
      <View style={{ height: 30 }}></View>
      <Text
        style={{
          fontSize: 30,
          color: isDarkTheme ? "white" : "black",
          fontWeight: "bold",
        }}
      >
        K. Siskos
      </Text>
      <Text style={{ fontSize: 15, color: isDarkTheme ? "white" : "black" }}>
        Front-End Developer
      </Text>
      <View style={{ height: 30 }}></View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            { borderColor: isDarkTheme ? "white" : "black" },
          ]}
        >
          <Icon
            name="rocket"
            size={20}
            color={isDarkTheme ? "white" : "black"}
            style={styles.icon}
          />
          <Text
            style={[
              styles.buttonText,
              { color: isDarkTheme ? "white" : "black" },
            ]}
          >
            Personal Projects
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { borderColor: isDarkTheme ? "white" : "black" },
          ]}
        >
          <Icon
            name="code"
            size={20}
            color={isDarkTheme ? "white" : "black"}
            style={styles.icon}
          />
          <Text
            style={[
              styles.buttonText,
              { color: isDarkTheme ? "white" : "black" },
            ]}
          >
            My Blog
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={openLinkedIn}
          style={[
            styles.button,
            { borderColor: isDarkTheme ? "white" : "black" },
          ]}
        >
          <Icon
            name="linkedin"
            size={20}
            color={isDarkTheme ? "white" : "black"}
            style={styles.icon}
          />
          <Text
            style={[
              styles.buttonText,
              { color: isDarkTheme ? "white" : "black" },
            ]}
          >
            LinkedIn
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={openGitHub}
          style={[
            styles.button,
            { borderColor: isDarkTheme ? "white" : "black" },
          ]}
        >
          <Icon
            name="github"
            size={20}
            color={isDarkTheme ? "white" : "black"}
            style={styles.icon}
          />
          <Text
            style={[
              styles.buttonText,
              { color: isDarkTheme ? "white" : "black" },
            ]}
          >
            GitHub
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { borderColor: isDarkTheme ? "white" : "black" },
          ]}
        >
          <Icon
            name="university"
            size={20}
            color={isDarkTheme ? "white" : "black"}
            style={styles.icon}
          />
          <Text
            style={[
              styles.buttonText,
              { color: isDarkTheme ? "white" : "black" },
            ]}
          >
            CV
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.changeButton,
            { borderColor: isDarkTheme ? "red" : "blue" },
          ]}
          onPress={handlePress}
        >
          <Icon
            name="pencil"
            size={20}
            color={isDarkTheme ? "white" : "black"}
            style={styles.icon}
          />
          <Text
            style={[
              styles.buttonText,
              { color: isDarkTheme ? "white" : "black" },
            ]}
          >
            Change Theme
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textDecorationColor: "yellow",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    width: 280,
    height: 60,
  },
  changeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    width: 200,
    height: 60,
  },
  buttonText: {
    fontSize: 16,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  icon: {
    margin: 5,
    marginEnd: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
