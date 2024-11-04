import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "./../../constants/Colors";

export default function LoginScreen() {
  return (
    <View>
      <Image
        source={require("./../../assets/images/login.jpg")}
        style={{ width: "100%", height: 600 }}
      />
      <View style={styles.loginContainer}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Welome to Picsify
        </Text>
        <Text
          style={{
            color: Colors.GRAY,
            textAlign: "center",
            marginTop: 15,
          }}
        >
          Create AI Art in Just on Click
        </Text>
        <View style={styles.button}>
          <Text style={{ textAlign: "center", color: "white" }}>Continue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    padding: 25,
    marginTop: -20,
    height: 600,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  button: {
    width: "100%",
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 40,
  },
});
