import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const MotivationalMessage = () => {
  const messages = [
    "Every workout counts! 💪",
    "Keep pushing your limits! 🔥",
    "You are stronger than you think! 💪💥",
    "Consistency is key to success! ⏳📈",
    "Small steps lead to big changes! 🚶‍♀️➡️🏅",
    "You've got this! 🔥🔥",
    "Push harder, go stronger! 💪👏",
    "Every step gets you closer! 🏃‍♀️🎯",
    "Celebrate your wins! 🎉🌟",
    "Stay consistent, stay unstoppable! 📈🏆"
];


  const [message, setMessage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: "center",
  },
  message: {
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "cursive",
    color: "#333",
    textAlign: "center",
  },
});

export default MotivationalMessage;
