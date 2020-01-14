import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import colors from "../themes/colors";

class Container extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        {this.props.children}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkPrimaryColor
    
  }
});

export default Container;
