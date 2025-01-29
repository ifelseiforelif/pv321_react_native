import { Text, StatusBar, View, Image, ImageBackground } from "react-native";
import React from "react";
const logo = require("./assets/cat.png");

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
        }}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 40,
          backgroundColor: "#647810",
          gap: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
          Hello From {"\n"} <Text>React Native</Text>
        </Text>
        <Image source={logo} style={{ width: "50%", height: "30%" }} />
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMi5koFKVvPVX5LJd6fbhKVeXXoFyTofNy-A&s",
          }}
          style={{ width: "70%", height: "30%" }}
        />
      </ImageBackground>
      <StatusBar hidden={true} />
    </View>
  );
}
