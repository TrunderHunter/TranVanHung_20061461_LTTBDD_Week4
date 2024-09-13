import React, { useState } from "react";
import { View, Text, Button } from "react-native";

// const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1;

export default function App() {
  const [arrNumbers, setArrNumbers] = useState<number[]>([1, 2, 3]);

  return (
    <View>
      <Button
        title="Increase Array one"
        onPress={() => {
          let newArr = [...arrNumbers].map((x) => x + 1);
          setArrNumbers(newArr);
        }}
      />
      {arrNumbers.map((item, index) => (
        <Text
          key={index}
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            margin: 20,
          }}
        >
          {item}
        </Text>
      ))}
    </View>
  );
}
