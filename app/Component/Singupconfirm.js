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
import LinearGradient from 'react-native-linear-gradient';
import bgImage from '../assets/app_back_img.png';

class Singupconfirm extends React.Component {
   state = {
  username: null,
  password: null,
  confirmpwd: null
}
//On click of submit button alert will appear
  _onSubmit() {
    const { username, password,confirmpwd } = this.state;
    Alert.alert('Button has been pressed!');
  }
 
    constructor(props) {
        super(props);
        this.handleClick1 = this.handleClick1.bind(this);
   
    
      }
    
      handleClick1 = () => {
        console.log(this);
        this.props.onChange();


    }
    showAlert = () =>
    {
  
   
     this.props.navigation.navigate('Verification');
    }
      
    render(){
        return (
          <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <View style={{width:'100%',height:'99%',marginTop:'20%'}}>
          <Text style={styles.TextStyle} >Create an account to save your information : </Text> 

          <View  style={{backgroundColor:'#ded776',height:2,width:'90%',marginTop:10,marginLeft:'5%'}}></View>
            {/* <View style={{backgroundColor:'black',width:'100%',flex:1}}> */}
                <ScrollView>
                    
        <View style={{marginTop:40}}> 
        <Text style={{color:'#dcc642',fontSize:15,fontFamily:'FontAwesome',marginLeft:20}} > USERNAME </Text>           
        <TextInput  style={styles.tntxtstyle} 
        onChangeText={value => this.setState({ username: value })} /> 
        <Text style={{color:'#dcc642',fontSize:15,fontFamily:'FontAwesome',marginLeft:20,marginTop:20}} > PASSWORD </Text>           
        <TextInput  style={styles.tntxtstyle} 
        onChangeText={value => this.setState({ password: value })}
          secureTextEntry={true}
         /> 
        <Text style={{color:'#dcc642',fontSize:15,fontFamily:'FontAwesome',marginLeft:20,marginTop:20}} > CONFIRM PASSWORD </Text>           
        <TextInput  style={styles.tntxtstyle}  
        onChangeText={value => this.setState({ confirmpwd: value })}
        secureTextEntry={true}/> 
        {/* <TextInput style={styles.tntxtstyle}  placeholder="Password"
        placeholderTextColor = "#dcc642"  /> 
        <TextInput style={styles.tntxtstyle}  placeholder="Confirm Password"
        placeholderTextColor = "#dcc642"  />  */}
        </View>
        <LinearGradient 
       start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
       
       colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradient}>
          <TouchableOpacity
              style={styles.describebtnStyle}
              activeOpacity = { .5 }
              onPress={ this.showAlert }
           >
  <Text style={styles.buttonText}>
Sign  In  </Text>

</TouchableOpacity> 

</LinearGradient>
<View  style={{backgroundColor:'white',height:2,width:'90%',marginTop:30,marginLeft:'5%'}}></View>
<Text style={{color:'#dcc642',fontSize:25,fontFamily:'FontAwesome',textAlign:'center',marginTop:100}}> millionaire list</Text>
        </ScrollView>
        
</View>
</ImageBackground>

        )
        
    }
}
const styles = StyleSheet.create({
    tntxtstyle:{
      flex:1,
      fontFamily:'FontAwesome',
      fontSize:15,
         height:40,
        paddingLeft: 20,
          color:'#dcc642',
          backgroundColor:'#484848',
          width:'90%',
           marginLeft:'5%',
        //   paddingLeft:'5%',
          //marginRight:'10%',
          marginTop:10,
          borderRadius:50,
          borderWidth:2,
          //borderColor:'gray'
    },
    txtcreate:{
      color:'#dcc642',
      fontFamily:'FontAwesome',
      fontSize:16,
      marginTop:90,
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
    },
    linearGradient:{

      flex:1,
      width:'90%',
      marginLeft:20,
           height: 40,
           marginTop:20,
          paddingLeft: 80,
          paddingRight: 80,
          borderRadius: 50,
          //marginBottom:1,
          //marginTop: "-1%",
      //textTransform: 'none'
        },
        buttonText:{
      
           textAlign:'center',
           
            marginTop:'5%',
            fontFamily:'FontAwesome',
            fontSize: 20,
           
      
        },
        backgroundContainer: {
    flex: 1,
  
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyle:{
          color:'#ded776',
          fontSize:20,
          width:'90%',
          marginLeft:'5%',
          fontFamily:'FontAwesome'
        },

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
  )(Singupconfirm);
