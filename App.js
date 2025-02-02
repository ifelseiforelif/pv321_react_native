import {
  Text,
  StatusBar,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  StyleSheet,
  ActivityIndicator, //INLINE STYLES AND StyleSheet API
  Alert,
  TextInput,
} from "react-native";
import React, { useState } from "react";
const logo = require("./assets/cat.png");

export default function App() {
  const [name, setName] = useState("");
  const styles = StyleSheet.create({
    txt: {
      fontSize: 40,
      fontWeight: "bold",
      color: "white",
    },
    btn: {
      backgroundColor: "orange",
      borderRadius: 10,
      borderColor: "black",
    },
    btnPartial: {
      padding: 20,
      borderWidth: 4,
    },
    my_input: {
      backgroundColor: "lightblue",
      width: 150,
    },
  });
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
          gap: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
          Hello From {"\n"} <Text>React Native</Text>
        </Text>
        <Image source={logo} style={{ width: "50%", height: "30%" }} />
        {/* <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMi5koFKVvPVX5LJd6fbhKVeXXoFyTofNy-A&s",
          }}
          style={{ width: "70%", height: "30%" }}
        /> */}
        <Text>{name}</Text>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.my_input}
          placeholder="Your name"
          secureTextEntry={true}
          keyboardType="phone-pad"
          multiline={true}
          numberOfLines={2}
          maxLength={10}
          autoFocus={true}
        />
        <Button
          title="Click"
          color="#770098"
          onPress={() => {
            Alert.alert("Title", "Message", [
              { text: "Cancel", onPress: () => console.log("cancel") },
            ]);
          }}
          disabled={false}
          accessibilityLabel=""
          testID=""
        />

        <Pressable
          style={[styles.btn, styles.btnPartial]}
          delayLongPress={5000}
          onPress={() => console.log("Clicked text...")}
          onPressIn={() => console.log("Press in...")}
          onPressOut={() => console.log("Press out...")}
          onLongPress={() => console.log("Pressing >=5000ms")}
          android_ripple={{ color: "red", radius: 100 }}
          // hitSlop={20}
          hitSlop={{ top: 30, bottom: 10, left: 20, right: 35 }}
        >
          <Text style={styles.txt}>Text for click</Text>
        </Pressable>
        <View style={{ flexDirection: "row" }}>
          <ActivityIndicator size={"small"} color="black" />
          <ActivityIndicator size={"large"} color="blue" />
          <ActivityIndicator size={"small"} color="yellow" />
          <ActivityIndicator size={"large"} color="blue" />
        </View>
        {/* <ScrollView>
          <Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham. Where can I get some? There are many variations of passages
            of Lorem Ipsum available, but the majority have suffered alteration
            in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage of
            Lorem Ipsum, you need to be sure there isn't anything embarrassing
            hidden in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </Text>
        </ScrollView> */}
      </ImageBackground>
      <StatusBar hidden={false} />
    </View>
  );
}
