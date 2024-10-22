import { StatusBar, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-pextrabold">Aora</Text>
      <StatusBar style="auto" />
      <Link href="/Profile" style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
  );
};

export default App;
