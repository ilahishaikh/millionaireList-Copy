import React, { Component } from 'react';
import { connect } from "react-redux";

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    TextInput,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Image,propTypes,
} from 'react-native';
import LinkedLoginContainer from './LinkedLoginContainer.js'
class YourOwnComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick1 = this.handleClick1.bind(this);
   
    
      }
    
      handleClick1 = () => {
        console.log(this);
        this.props.onChange();

    }
      
    render(){
        return (
            <View>
                <ScrollView>
                    <Text style={styles.txtcreate} > Create an account to save your information: </Text>
        <TextInput style={styles.tntxtstyle}  placeholder="Email address"
        placeholderTextColor = "gray"  /> 
        <TextInput style={styles.tntxtstyle}  placeholder="Password"
        placeholderTextColor = "gray"  /> 
        <TextInput style={styles.tntxtstyle}  placeholder="Confirm Password"
        placeholderTextColor = "gray"  /> 
        <TouchableOpacity
                  style={styles.buttonContainer}
                   activeOpacity = { .5 }
                   onPress={ this.handleClick1 }
                  >
                 <Text style={styles.TextStylechadd}> Sign In </Text>
                 </TouchableOpacity>
        </ScrollView>
</View>

        )
        
    }
}
const styles = StyleSheet.create({
    tntxtstyle:{
        paddingLeft: 20,
          color:'white',
          backgroundColor:'white',
          width:'100%',
         //  marginLeft:'5%',
        //   paddingLeft:'5%',
          //marginRight:'10%',
          marginTop:20,
          borderRadius:50,
          borderWidth:2,
          borderColor:'gray'
    },
    txtcreate:{
        fontFamily:'FontAwesome',
        fontSize:15,
        textAlign:'center',
        padding:10
    },
    buttonContainer:{
        flex: 1,
            height:40,
            width:"50%",
          
           
            paddingTop:10,
            paddingBottom:20,
            marginLeft:'25%',
           // marginRight:10,
          
            borderRadius:10,
            borderColor: '#17202A',
            borderWidth: 1,
            //flexDirection: 'row',
            paddingLeft:"3%",
            paddingRight:"3%",
            marginTop:20,
            backgroundColor:'#17202A',
    },
    TextStylechadd:{
        textAlign:'center',
        color:'white'
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
  )(YourOwnComponent);
