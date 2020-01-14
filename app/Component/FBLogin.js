import React from "react";
import { StyleSheet, View,Image,TouchableOpacity, Text} from "react-native";
import { connect } from "react-redux";


class LinkedLoginContainer extends React.Component {
  state = {
    isLoading: false
  };

 

  loginClick()
  {
    this.props.navigate("EmployeeId")();
  }


  render() {
    const { isLoading } = this.state;
    return (
      

 
      <TouchableOpacity style={styles.fbButtonStyle} activeOpacity={0.5} onPress={this.loginClick}>
 
                     
 
         <View style={styles.SeparatorLine} />

 
         <Text > login</Text>
 
       </TouchableOpacity>
       
    
    );
  }
}

const styles = StyleSheet.create({

  
 ImageIconStyle: {
    //padding: 10,
   // margin: 8,
   paddingTop:5,
   paddingLeft:10,
    height: 35,
    width: 35,
    //resizeMode : 'stretch',
   // flex:1,
    justifyContent:"center"
  
 },
  
  
 SeparatorLine :{
  
 backgroundColor : '#fff',
 width: 1,
 height: 50
  
 },
  fbButtonStyle: {
    backgroundColor: 'black',
   // marginVertical: 25,
    borderColor: "transparent",
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    //backgroundColor: '#fff',
    elevation: 2, // Android
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 25
  },
  fbButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "600",
    paddingLeft:10,
    paddingRight:10,
    //fontFamily: "Montserrat-Medium"
  }
});

const mapStateToProps = state => ({
  loading: state.auth.loading,
  isAuthorised: state.auth.isAuthorised,
  eid: state.auth.eid,
  auth: state.auth,
  uid: state.auth.uid
});

const mapDispatchToProps = dispatch => ({
  fbLogin: payload => dispatch(AuthActions.fbLogin(payload)),
  requestLogin: () => dispatch(AuthActions.requestLogin()),
  showStatusBar: (type, title, message) =>
    dispatch(StatusBarActions.showStatusBar(type, title, message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkedLoginContainer);
