import { Text } from "react-native";
//props.children

export default function FuncComp({ name, age, children }) {
  return (
    <Text style={{ fontSize: 26, color: "white" }}>
      Hello, {name}! Your age is {age} {children}
    </Text>
  );
}

FuncComp.defaultProps = {
  name: "empty name",
  age: 90,
};
