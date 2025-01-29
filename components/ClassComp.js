import React, { Component } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

class ClassComp extends Component {
  static defaultProps = {
    name: "default name",
    age: 0,
  };
  render() {
    const { name, age } = this.props;
    return (
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
        My Class Component. {name}. Your age is {age}
      </Text>
    );
  }
}

ClassComp.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default ClassComp;
