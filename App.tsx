import React, { useState } from "react";
import { View, Text, Button } from "react-native";

// const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1;

export default function App() {
  // const [diceRolls, setDiceRolls] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);

  return (
    <View>
      <Button
        title="Increase Count"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          margin: 20,
        }}
      >
        {count}
      </Text>
    </View>
  );
}
