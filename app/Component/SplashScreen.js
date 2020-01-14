import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "../Container";
import  bgImage from '../assets/app_back_img.png'
import app_logomin from '../assets/app_logomin.png'
import { LinearTextGradient } from "react-native-text-gradient";
import LinearGradient from 'react-native-linear-gradient';
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
class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      titleText: "Enjoy all the " ,
      
      bodyText: 'premium features',
    };

  }
   componentDidMount() {
 
   // setTimeout(this.props.navigation.navigate("EmployeeId"),1000);
    this.props.navigation.navigate("EmployeeId") ;

    // if (this.props.isAuthorised) {
    //   this.props.getUsers();
    //   this.props.getEvents();
    //   SetUserContext({
    //     userId: this.props.uid,
    //     username: this.props.displayName
    //   });
    //   this.props.receiveMessages(this.props.uid);
    //   this.props.navigation.navigate("App");
    // } else {
    //   this.props.navigation.navigate("SignIn");
    // }

    // await this.getDynamicLinkListener();
    // SplashScreens.hide();
  }

//   getQueryString(field, url) {
//     const reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
//     const string = reg.exec(url);
//     return string ? string[1] : null;
//   }

//   async getDynamicLinkListener() {
//     // console.log("getDynamicLinkListener :::")

//     // FIREBASE DYNAMIC LINK HANDLER WHEN THE APP IS TERMINATED
//     firebase.links().getInitialLink().then(async (url) => {
//       //console.log("getInitialLink :::", url)
//       this.performDeepLinkingOperations(url)
//     });

//     // FIREBASE DYNAMIC LINK HANDLER WHEN THE APP IS IN FOREGROUND
//     firebase.links().onLink(async (url) => {
//       // console.log("onLink :::", url)
//       this.performDeepLinkingOperations(url)
//     });
//   }

//   // HELPER FUNCTION FOR PERFORMING SCREEN UPDATIONS 
//   async performDeepLinkingOperations(url) {
//     if (url) {
//       await this.setEventId(this.getQueryString('event_id', url), this.getQueryString('userID', url));
//       await this.setUserId(this.getQueryString('user_id', url));
//       if (ChatListContext) {
//         ChatListContext.addInviteNode();
//         ChatListContext.addEventInviteNode();
//       }
//     }
//   }

//   setUserId(userID) {
//     if (userID) {
//       AsyncStorage.setItem("firebaseDynamiclinkUserId", userID)
//     }
//   }

//   // STORING THE EVENT ID & USER ID FOR ALL EVENT INVITATIONS
//   async setEventId(eventID, userID) {
//     // console.log("eventID ::::: ", eventID + " userID    --------      " + userID)
//     if (eventID && userID) {
//       // GETTING EXISTING EVENT IDS STORED LOCALLY
//       await AsyncStorage.getItem("firebaseDynamiclinkEventId").then(async eventIDs => {


//         if (eventIDs) {
//           let _eventIDs = JSON.parse(eventIDs);
//           const filterData = _eventIDs.filter(data => data.eventID === eventID);

//           // ADDING FIRST EVENT INVITATION IN ASYNC STORE
//           if (filterData.length === 0) {
//             _eventIDs.push({ 'eventID': eventID, 'userID': userID });
//             await AsyncStorage.setItem("firebaseDynamiclinkEventId", JSON.stringify(_eventIDs))
//           }
//         } else {
//           // ADDING THE NEWLY RECEIVED EVENT INIVTATION TO THE EXISTING INVITATIONS STORED IN ASYNC STORE
//           let eventIDs = [];
//           eventIDs.push({ 'eventID': eventID, 'userID': userID });
//           await AsyncStorage.setItem("firebaseDynamiclinkEventId", JSON.stringify(eventIDs))
//         }
//       });
//     }

//   }

  render() {
    return(
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <ScrollView style={{width:"100%"}} scrollEnabled={false}>
       <View style={styles.logoContainer}>
       <Image source={app_logomin} style={styles.logo} />
       <LinearTextGradient
  style={{ fontWeight: "bold", fontSize: 72,marginBottom:"3%", }}
  locations={[0, 1]}
  colors={["#dcc642", "#896100"]}
  start={{ x: 0.5, y: 0.5 }}
  end={{ x: 1, y: 1 }}
>
        <Text style={styles.logoText}>The Glamorous side of you</Text>
     </LinearTextGradient>


          
         

      
    
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
    
    marginTop:'18%',
    alignItems: 'center'
  },
  logo: {
width: 225,
height: 225,
alignItems:"center",

resizeMode: 'contain',
  },
  logoText: {
    
    marginTop:"50%",
    color: '#ded776',
    fontSize: 15,
    fontWeight: '200',
    fontFamily:'Yananeska Personal Use',
    opacity: 0.5
  },
  linearGradient:{
   flex:1,
     height: 35,
    paddingLeft: 80,
    paddingRight: 80,
    borderRadius: 50,
    marginBottom:3,
    marginTop: "10%"
     
    },
    buttonText:{
      textAlign:'center',
      marginTop:'5%',
      fontFamily:'Roboto',
      fontSize: 15,
      
    },
    tntxtstyle1:{
      flex:1,
      height:37,
      fontSize:16,
      textAlign:"center",
      paddingTop:5,
      color:'#ded776',
      borderWidth: 2,
      borderColor: '#ded776',
      width:"100%",
      marginTop:"4%",
      borderRadius:50,
     
      
    },
    
    alreadyText:{
    marginTop:'18%',
    color:"white",
      fontSize: 15,
    fontFamily: 'Roboto',
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


const mapStateToProps = state => ({
  isAuthorised: state.auth.isAuthorised,
  uid: state.auth.uid,
  displayName: state.auth.displayName
});

const mapDispatchToProps = dispatch => ({
  receiveMessages: uid => dispatch(ChatActions.receiveMessages(uid)),
  getEvents: () => dispatch(EventActions.getEvents()),
  getUsers: () => dispatch(UserActions.getUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen);

