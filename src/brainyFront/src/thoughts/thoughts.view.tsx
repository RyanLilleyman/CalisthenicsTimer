import React from "react";
import {
  View, Text, StyleSheet, ScrollView, Dimensions} from "react-native";

const Thoughts = () => {
  const { width, height } = Dimensions.get("window");
  const styles = StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      width: width,
      height: height,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f2f2f2",
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#333",
    },
  });
  
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.text}>Thoughts</Text>
      </View>
    </ScrollView>
  );
};


export default Thoughts;
