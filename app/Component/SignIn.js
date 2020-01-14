import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import  bgImage from '../assets/app_back_img.png'
import app_logomin from '../assets/app_logomin.png'
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from "react-native-text-gradient";
//import { WebView } from 'react-native-webview';
import LinkedInModal from 'react-native-linkedin'

class DemoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
     alreadyText:'Already on Millionaire list? Sign in',
      whenText:'when you sign in with ml you agree',
      withText:'with our t&c and privacy policy.'
    };
  }
//Dont change  
  componentDidMount() {
 
   };
  getQueryString(field, url) {
    const reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    const string = reg.exec(url);
    return string ? string[1] : null;
  }
   showAlert = () =>
  {
    this.props.navigation.navigate('Step1');
  }
  navigate = (screenName, params) => () =>
  this.props.navigation.navigate(screenName, params);

  render() {
         
      return(
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <ScrollView style={{width:"100%"}} scrollEnabled={false}>
         <View style={styles.logoContainer}>
         <Image source={app_logomin} style={styles.logo} />
         <LinearTextGradient
    style={{ fontWeight: "bold", fontSize: 72,marginBottom:"5%" }}
    locations={[0, 1]}
    colors={["#dcc642", "#896100"]}
    start={{ x: 0.5, y: 0.5 }}
    end={{ x: 1, y: 1 }}
  >
          <Text style={styles.logoText}>The Glamorous side of you</Text>
       </LinearTextGradient>
       <LinearGradient 
       start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0 }}
       colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradient}>
        <LinkedInModal 
          ref={this.linkedRef}
          clientID="81w4okjs5xnyak"
          clientSecret="5IDCPONSBStsVwmV"
          redirectUri="https://example.com/auth/callback"
          onSuccess={token => console.log(token)}
        />
  {/* <TouchableOpacity activeOpacity={0.8} onPress={this.linkedRef.current.logoutAsync()}> */}
  <Text style={styles.buttonText}>
  
  </Text>
  {/* </TouchableOpacity> */}
</LinearGradient>
<TouchableOpacity onPress={this.showAlert} style={{width:'100%'}} >
<Text style={styles.tntxtstyle1} 

             > Create My Account</Text>
             </TouchableOpacity>
            
            <View style={styles.underline}></View>
            <View style={styles.alreadyText}>
             <Text style={{fontSize:15,fontFamily:'FontAwesome',color:"white"}}  >
             Already on Millionaire list? <Text style={{fontSize:15,fontFamily:'FontAwesome',color:"#ded776"}}  >
           Sign in
</Text>
</Text></View>
<View style={styles.whenText}>
<Text style={styles.whenText} onPress={this.onPressTitle}>
          {this.state.whenText}
</Text>
<Text style={styles.withText} onPress={this.onPressTitle}>
with our  <Text style={{color:"#ded776"}}  >t&c</Text>  and  <Text style={{color:"#ded776"}}  >privacy policy</Text>
</Text>
</View>
       </View>
       </ScrollView>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer:{
    width:"85%",
    marginLeft:"8%",
    marginTop:'20%',
    alignItems: 'center'
  },
  logo: {
width: 225,
height: 180,
alignItems:"center",
resizeMode: 'contain',
  },
  logoText: {
    flex:1,
    color: '#ded776',
    fontSize: 15,
    fontWeight: '200',
    fontFamily:'Yananeska Personal Use',
    opacity: 0.5
  },
  linearGradient:{
    width:'100%',
    marginTop:20,
     height: 35,
    paddingLeft: 80,
    paddingRight: 80,
    borderRadius: 50,
    marginBottom:3,
    },
    buttonText:{
      textAlign:'center',
      marginTop:'5%',
      fontFamily:'FontAwesome',
      fontSize: 15,
    },
    tntxtstyle1:{
      height:37,
      fontSize:16,
      textAlign:"center",
      paddingTop:5,
      color:'#ded776',
      borderWidth: 2,
      borderColor: '#ded776',
      marginTop:"4%",
      borderRadius:20,
    },
    alreadyText:{
    marginTop:'30%',
    color:"white",
    fontSize: 15,
    fontFamily: 'FontAwesome',
    textAlign:"center",
  },
  whenText:{
    color:"white",
      fontSize: 13,
    fontFamily: 'Roboto',
    marginTop:8,
    textAlign:"center"
  },
  withText:{
    color:"white",
      fontSize: 13,
      marginTop:5,
    fontFamily: 'Roboto',
    textAlign:"center"
  },

 underline:{
   marginTop:30,
   height:2,
   paddingLeft:300,
   backgroundColor:'white',
 }
  
});
// dont change
const mapStateToProps = state => ({
  loading: state.auth.loading
});

export default connect(
  mapStateToProps,
  null
)(DemoScreen);