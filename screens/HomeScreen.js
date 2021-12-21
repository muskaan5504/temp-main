import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Home/Header";
import { db } from "../firebase";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <Header navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
