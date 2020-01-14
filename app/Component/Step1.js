import { connect } from "react-redux";
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TextInput,
  Image,
  TouchableHighlight,TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import bgImage from '../assets/app_back_img.png';
 import img from '../assets/male_not.png'
 import img1 from '../assets/female.png'
import selectmale from '../assets/male_selected.png'
import selectfemale from '../assets/female_selected.png'
import LinearGradient from 'react-native-linear-gradient';

//import MapView from 'react-native-maps'
class Step1 extends React.Component {
    constructor(props) {
        super(props);
      //  initState = 
         this.state = {
            whichselected:'No',
          titleText: "Select some info to see who are  " ,
          baseText: "there for you",
          alreadyText:'Already on Millionaire list? Sign in',
          whenText:'when you sign in with ml you agree',
          withText:'with our t&c and privacy policy'
        };
         //  this.handlerButtonOnClick = this.handlerButtonOnClick.bind(this);
    
      }
      
      handlerButtonOnClick(tmp1){
       
        this.setState({
           whichselected: tmp1
        });
      }
      showAlert = () =>
      {
        if(this.state.whichselected=='No')
        {
          alert('Please Select any one field')
        }
        else
        {
            this.props.navigation.navigate('Step2');
        }
     
        
      }
        render(){
          var ismale=false
          var isfemale=false;
         
        if(this.state.whichselected=='Male'){
    ismale=true;
        }
        else if(this.state.whichselected=='Female'){
          isfemale=true;
        }
        return (
    
          <ImageBackground source={bgImage} style={styles.backgroundContainer}>
           <ScrollView style={{width:"100%" }} scrollEnabled={false}>
           <View style={styles.baseText}>
            <Text style={styles.titleText} onPress={this.onPressTitle}>
              {this.state.titleText}  
            </Text>
<Text style={styles.titleText} onPress={this.onPressTitle}>
                {this.state.baseText}
            </Text>
          </View>
          <View style={styles.underlineview}></View>
           <View style={styles.container}> 
                  <TouchableHighlight onPress={this.handlerButtonOnClick.bind(this,'Male')} >
                     { ismale?(<Image source={selectmale} style={{width:120,height:120,marginRight:10}}  />):(<Image source={img} style={{width:120,height:120,marginRight:10}}  />)
                     }              
                
                    </TouchableHighlight>
                   <View style={{position: 'absolute', top: 100, left: 0, right: 130, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color:'#dcc642',fontSize:15,fontFamily:'FontAwesome'}}>Male</Text>
    </View>
     <TouchableHighlight onPress={this.handlerButtonOnClick.bind(this,'Female')}
            >
                     { isfemale?(<Image source={selectfemale} style={{width:120,height:120}}  />):(<Image source={img1} style={{width:120,height:120}}  />)
                     }  
                    </TouchableHighlight> 
                    <View style={{position: 'absolute', top: 0, left: 140, right: 3, bottom: -100, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color:'#dcc642',fontSize:15,fontFamily:'FontAwesome'}}>Female</Text>
    </View>         
                    </View>
                    <TouchableOpacity onPress={this.showAlert} style={{width:'100%'}} >
    <LinearGradient 
           start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
           colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradient}>
          <Text style={styles.buttonText}> Next </Text>
    </LinearGradient>
    </TouchableOpacity>
               <View style={styles.underlineview1} ></View>
    <LinearGradient 
           start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
           colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradient1}>
          <Text style={styles.buttonText1}> Sign Up With LinkedIn </Text>
    </LinearGradient>
           <View style={{  
             marginTop:'20%',
    color:"white",
      fontSize: 15,
    fontFamily: 'Roboto',
    textAlign:"center"}}>
             <Text  style={{color:"white",textAlign:"center"}}  >
             Already on Millionaire list? <Text style={{color:"#ded776"}}  >
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
      baseText: {
        fontFamily:'FontAwesome',
        color:'#ded776',
        marginTop:'10%',
       paddingLeft:"5%",
        fontSize: 18,
        textAlign:"left",
      },
      titleText: {
        fontFamily:'FontAwesome',
        color:'#ded776',
          fontSize: 18,
      },
      underline:{
       height:2,
       marginLeft:10,
       marginRight:10,
     },
      underlineview:{
       height:2,
       marginLeft:20,
       marginRight:10,
       marginTop:10,
       backgroundColor:'#ded776',
     },

     underlineview1:{
      height:2,
      marginLeft:20,
      marginRight:10,
      marginTop:15,
      backgroundColor:'white',
    },
     container: {
            flex: 1,
            height:200,
            marginTop:'12%',
            paddingLeft:"17%",
             justifyContent: 'flex-start',
            flexDirection: 'row',
        },
        MaleText:{
          color:'#ded776',
          height:20,
          marginTop:'50%',
        },
          linearGradient:{
        flex:1,
        width:"90%",
         height: 35,
        marginLeft:'5%',
        paddingTop:8,
        borderRadius: 50,    
      },
      buttonText:{
         textAlign:'center',
          fontFamily:'FontAwesome',
          fontSize: 17,
      },
      underline1:{
        height:5,
       marginLeft:20,
       marginRight:20,
       marginTop:10
      },
      linearGradient1:{
        flex:1,
        width:"90%",
         height: 35,
         marginLeft:'5%',
        borderRadius: 50,
        marginTop: 40
      },
      buttonText1:{
        textAlign:'center',
          marginTop:'2%',
          fontFamily:'Roboto',
          fontSize: 17,
      },
      alreadyText:{
    marginTop:'18%',
    color:"white",
    fontSize: 15,
    fontFamily:'FontAwesome',
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
        fontFamily: 'Roboto',
        marginTop:5,
        textAlign:"center"
      },
      imagepress:{
        alignItems: 'center',
        backgroundColor: '#dcc642',
        padding: 5
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
)(Step1);
