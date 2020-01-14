
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import bgImage from '../assets/app_back_img.png';
// import img from '../assets/male_not.png'
// import img1 from '../assets/female.png'
import selectmale from '../assets/male_selected.png'
import selectfemale from '../assets/female_selected.png'
import LinearGradient from 'react-native-linear-gradient';
import ic_tickmin from '../assets/ic_tickmin.png'
import ic_messagemin from '../assets/ic_messagemin.png'
import user_profilemin from '../assets/user_profilemin.png'

export default class App extends React.Component{

 navigateToMessage = () =>
  {
   this.props.navigation.navigate('msglist');
  }
  navigateToEdit= () =>
  {
   this.props.navigation.navigate('Editprodile');
  }
     
  navigateToHome= () =>
  {
   this.props.navigation.navigate('Home');
  }
    render(){
      
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <LinearGradient 
       start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
       colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradient1}>
     <TouchableOpacity
                  style={styles.buttonContainer}
                   activeOpacity = { .5 }
                   onPress={ this.navigateToEdit }
                  >
  <Image source={user_profilemin} style={styles.tickimage1  } />
  </TouchableOpacity>  
  <Text style={styles.texaccount2}> 
  your profile</Text>
  <View style={styles.rightcontainer}>
  <TouchableOpacity
                  style={styles.buttonContainer}
                   activeOpacity = { .5 }
                   onPress={ this.navigateToEdit }
                  >
  <Image source={ic_messagemin} style={styles.tickimage2  } />
  </TouchableOpacity>
</View>
</LinearGradient>
      <LinearGradient 
       start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
       colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradient}>
         <TouchableOpacity
                  style={styles.buttonContainer}
                   activeOpacity = { .5 }
                   onPress={ this.navigateToHome }
                  >
  <Image source={ic_tickmin} style={styles.tickimage  } />
  </TouchableOpacity>
  <Text style={styles.texaccount}> Your Account has been succssfuly submitted. You will recive an confirmation email within 48 hrs.
  </Text>
  <Text style={styles.texaccount}> 
  Till then setup your profile</Text>
</LinearGradient>
</ImageBackground>
  );
};
}

const styles = StyleSheet.create({
  linearGradient:{
    flex: 1,
    marginTop:200,
    marginBottom:100,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft:20,
    marginRight:20,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 19
  },
  texaccount:{
    fontFamily:'FontAwesome',
    fontSize:15,
    marginTop:20
  },
  tickimage:{
    width:100,
    height:100,
  },
  backgroundContainer:{
    flex:1
  },
  linearGradient1:{
    flexDirection:'row',
    height:60,
  },
  tickimage1:{
    height:40,
    width:40,
    marginTop:10,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft:20,
    marginRight:20,
  },
  texaccount2:{
    fontFamily:'FontAwesome',
    fontSize:15,
    flexDirection:'row',
    marginTop:20,
    fontSize:15,
    paddingRight: 15,
    marginRight:20,
    color:'white'
  },
  tickimage2:{
   height:30,
    width:40,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight:20,
  },
  rightcontainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center'
  }
});

