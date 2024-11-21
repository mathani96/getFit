import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    setIsRunning(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.timerBox}>
        <Text style={styles.timerText}>{timeLeft}s</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={startTimer}>
        <Text style={styles.buttonText}>Start Timer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  timerBox: {
    width: "80%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007AFF",
    borderRadius: 10,
  },
  timerText: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#28a745",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Timer;
