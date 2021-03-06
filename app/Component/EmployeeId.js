import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "../Container";

// import { Button} from 'native-base';


//import SplashScreens from 'react-native-splash-screen'
//import { AsyncStorage, View,Text } from 'react-native'
//import { ChatActions, UserActions, EventActions } from "../../redux/actions";
//import Container from "../../components/Container";
//import SetUserContext from "../../util/Sentry";
//import firebase from "react-native-firebase";
//import { ChatListContext } from "../Chat/ChatList";
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
import bgImage from '../assets/app_back_img.png';
import LinearGradient from 'react-native-linear-gradient';
import ic_more_optionsmin from '../assets/ic_more_optionsmin.png'

class EmployeeId1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      titleText: "Enjoy all the " ,
      
      bodyText: 'premium features',
    };

  }
  showAlert = () =>
  {
  
    this.props.navigation.navigate('SignIn');
  }
render(){
  return(
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <ScrollView style={{width:"100%"}}>   
      <LinearGradient 
      start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
       
       colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>
MILLIONAIRE LIST  </Text>
</LinearGradient>
<Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}{'\n'}
        </Text>
        <Text numberOfLines={5}>
          {this.state.bodyText}
        </Text>
      </Text>
     
      
        <View style={styles.container}>
               
                <Image source={ic_more_optionsmin}  />
          </View>
               <View style={styles.container1}>
               
            
               {/* <View style={styles.buttonContainer}>
               <Button title="Skip"  color="red" />
               
                </View> */}

               
                <View style={styles.buttonContainer}>
                {/* <Button title="Next" onPress={this.showAlert} color="red"   uppercase={false} />  */}
 <TouchableOpacity style={{backgroundColor: "red",height:40,width:'40%',alignItems:'center',justifyContent:'center',borderRadius:5}}>
                    <Text style={{ fontFamily:'FontAwesome',fontSize:15,color:  "white" }}>Skip</Text>

               </TouchableOpacity>

              <TouchableOpacity style={{backgroundColor: "red",height:40,width:'40%',alignItems:'center',justifyContent:'center',borderRadius:5}} onPress={this.showAlert}>
                    <Text style={{ fontFamily:'FontAwesome',fontSize:15,color:  "white" }}>Next</Text>

               </TouchableOpacity>
               
              </View>
               </View>

      </ScrollView>    
      </ImageBackground>
    );

};
}

const styles = StyleSheet.create({
    backgroundContainer: {
    flex: 1,
  
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient:{

flex:1,
     height: 50,
    paddingLeft: 80,
    paddingRight: 80,
    //borderRadius: 50,
    //marginBottom:1,
    //marginTop: "-1%",
//textTransform: 'none'
  },
  buttonText:{

textAlign:'center',
      marginTop:'6%',
      fontFamily:'Roboto',
      fontSize: 20,
     

  },
  baseText: {
    
    //fontWeight:'bold',
    marginTop:50,
      color:"white",
      fontSize: 20,
    fontFamily: 'Roboto',
    textAlign:"center",
    
    
  },
  titleText: {
    //marginTop:20,
    color:"white",
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  container: {
        
        marginTop:'100%',
        
         justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    container1: {
        flex: 1,
       
        
         justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    buttonContainer: {
        flex: 1,
        //width:"50%",
        flexDirection:'row',
         marginTop:1,
        justifyContent: "space-around",
        paddingLeft:"5%",
        paddingRight:"5%",

    },
    img:{
      flex:1,
      width:30,
      //width: 350,
      //height:"20%",

      height:30,
      paddingLeft:"90%",
      //marginBottom:"-90%",
       
    resizeMode: 'contain',
      }   


  
});



const mapStateToProps = state => ({
  loading: state.auth.loading,
  uid: state.auth.uid
});

const mapDispatchToProps = dispatch => ({
  setEmployeeId: (uid, eid) => dispatch(AuthActions.setEmployeeId(uid, eid)),
  showStatusBar: (type, message) =>
    dispatch(StatusBarActions.showStatusBar(type, message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeId1);
