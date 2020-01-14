import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import Container from "../Container";

class Loading extends Component {
  render() {
    return (
      <Container
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator />
      </Container>
    );
  }
}

export default Loading;
