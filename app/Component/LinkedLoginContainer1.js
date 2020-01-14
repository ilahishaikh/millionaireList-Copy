import { connect } from "react-redux";

import React, { Component } from 'react';
import { Pages} from 'react-native-pages';
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
  
  Image,
  
  
  
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from "react-native-text-gradient";

import img from '../assets/img.png';
//import MapView from 'react-native-maps'
class LinkedLoginContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         
          //titleText: "Enjoy all the " ,
          
          //bodyText: 'premium features',
        };
      }
    
      render() {
        var markers = [{
          latitude: 42.882004, 
          longitude: 74.582748
          
    
        }];
    
      return (
       
    
        
        <Pages  indicatorPosition={'top'} indicatorColor='#FF9100'
        indicatorOpacity={0.3}
       
        >
            <View style={styles.container}>
          
            
            <ScrollView  style={{ width: '100%',marginTop:-5 }}  >
                  
               <Text style={styles.TextStyle} >Add Your Profile Info </Text> 
               <TextInput style={styles.underline}underlineColorAndroid={'#ded776'} marginTop={"1%"}value={this.state.text} />
     

            <TextInput style={styles.tntxtstyle}  placeholder="When's your birthday?"
            placeholderTextColor = "white"
            
            
            
             /> 
                
                 <TextInput style={styles.tntxtstyle1}  placeholder="Select Date" 
                 placeholderTextColor = "#ded776" 
    
    
                 /> 
                 <TextInput style={styles.tntxtstyle}  placeholder="Whats's your location?" 
                 placeholderTextColor = "white"
                 
                 /> 
                 <View style={styles.container1}>
                 <TouchableOpacity
                  style={styles.buttonContainer}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >
                 <Text style={styles.TextStylechadd}> Choose_address </Text>
                 </TouchableOpacity>
              
    
                
                 <TouchableOpacity
                  style={styles.buttonContainer}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >
                 <Text style={styles.TextStylechadd}> Current Location </Text>
                 </TouchableOpacity>
                  </View>
    
  
        
        
        
                  <TextInput style={styles.txtyourincome1}  
                 placeholderTextColor = "#ded776"
                 
                 /> 
                 <TextInput style={styles.txtyourincome}  placeholder="What's your income" 
                 placeholderTextColor = "#ded776"
                 
                 /> 
                 <TextInput style={styles.tntxtstyle}  placeholder="Select income" 
                 placeholderTextColor = "white" 
                 
                 /> 
    
                <LinearGradient 
           start={{ x: 0.5, y: 0.5 }} end={{ x: 0.10, y: 0.5 }}
           
           colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradient}>
    <Text style={styles.buttonText}>
      Next
      </Text>
    </LinearGradient>
            </ScrollView>
            
            </View>
    
            <View style={styles.container} >
            <ScrollView  style={{ width: '100%',marginTop:-5 }}  >
            <Text style={styles.TextStyle} >Add Your Profile Info </Text>
            <TextInput style={styles.underline}underlineColorAndroid={'#ded776'} marginTop={"1%"}value={this.state.text} />
    
            <Text style={styles.Textavtar}> Upload your AVTAR!</Text>
            <TextInput style={styles.tntxtstyle}  placeholder="Please upload your real poteait only"
            placeholderTextColor = "white" 
             /> 
             <Image source={img} style={styles.Image1} />
            <LinearGradient 
           start={{ x: 0.5, y: 0.5 }} end={{ x: 0.10, y: 0.5 }}
           
           colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradient1}>
    <Text style={styles.buttonText1}>
      Add more pics
      </Text>
    </LinearGradient>
    
    <View style={styles.main}>
            <View style={{flexDirection:'row', marginTop:-60, justifyContent:"space-between"}}>
              <Image
                style={{width: 100, height: 100, }}
                source={img} />
              <Image
                style={{width: 100, height: 100}}
                source={img} />
                <Image
                style={{width: 100, height: 100}}
                source={img} />
            </View>
            <View style={{flexDirection:'row', marginTop:10, justifyContent:"space-between"}}>
              <Image
                style={{width: 100, height: 100}}
                source={img} />
              <Image 
              style={{width: 100, height: 100}}
              source={img} />
              <Image
                style={{width: 100, height: 100}}
                source={img} />
            </View>
            <Text>
              <Text>{ this.addPadding() }</Text>
              <Text>
                 <Text style={{fontWeight: "bold"}}></Text>{"\n"}
              </Text>      
            </Text>
          </View>
     <LinearGradient 
           start={{ x: 0.5, y: 0.5 }} end={{ x: 0.10, y: 0.5 }}
           
           colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradient2}>
    <Text style={styles.buttonText2}>
      Next
      </Text>
    </LinearGradient>
             </ScrollView>
            
            </View>
    
    <View style={styles.container}>
    <ScrollView  style={{ width: '100%',marginTop:-5 }}  >
    
    <Text style={ styles.TextStyle4 }>Add Your Profile Info</Text>
    <TextInput style={styles.underline}underlineColorAndroid={'#ded776'} marginTop={"1%"}value={this.state.text} />
    
    <Text style={styles.TexttellusStyle}> TELL US ABOUT YOURSELF </Text>
    
     <TouchableOpacity
              style={styles.describebtnStyle}
              activeOpacity = { .5 }
              onPress={ this.ButtonClickCheckFunction }
           >
               
                <Text style={styles.TxtpotrtStyle}> How can you describe yourself? </Text>
    </TouchableOpacity>
    <TextInput style={styles.underline}underlineColorAndroid={'#ded776'} marginTop={"1%"}value={this.state.text} />
    
    <Text style={styles.occupationtext}> Occupation </Text>
          <TouchableOpacity
              style={styles.uploadpotrtbtnStyle}
              activeOpacity = { .5 }
              onPress={ this.ButtonClickCheckFunction }
           >
               
                <Text style={styles.TxtpotrtStyle}> Please enter your Occupation  </Text>
                
    </TouchableOpacity>
     <LinearGradient 
           start={{ x: 0.5, y: 0.5 }} end={{ x: 0.10, y: 0.5 }}
           
           colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradient}>
    <Text style={styles.buttonText}>
      Next
      </Text>
    </LinearGradient>
    </ScrollView>
    </View>
    
            
            {/*<View style={{ flex: 1, backgroundColor: 'blue' }} />*/}
            <View style={{ flex: 1, backgroundColor: 'purple' }} />
            
          </Pages>
          
              
      );
      }
      addPadding() {
        const padding = Array.apply(null, Array(16)).map(() => '').join('');
        return Array.apply(null, Array(8)).map(() => padding + '\n');
      }
    
    
    }
    const styles = StyleSheet.create({
        container: {
          //width:"100%",
            flex: 1,
          //width:"100%",
           backgroundColor:'black',
           //marginBottom:"20%",
           flexDirection: "row",
            paddingTop: StatusBar.currentHeight,
            
        },
        TextStyle:{
          color:'#ded776',
          fontSize:20,
         
         
          
        },
        
      tntxtstyle:{
        width:"10%",
          paddingLeft: 20,
          color:'white',
          backgroundColor:'#323232',
          width:'90%',
          marginLeft:'5%',
          //marginRight:'10%',
          marginTop:10,
          borderRadius:50,
          borderWidth:2
          //marginBottom:"20%"
    
          //textAlign: 'center',
         
        },
        
        linearGradient:{
          flex:1,
          width:'30%',
          height: 40, 
          //marginTop: 70, 
          //height:35,
         marginLeft:'35%',
         //marginRight:'60%',
         marginTop:80,
         marginBottom:80,
         borderRadius:50
         /*
         height: 50,
        paddingLeft: 80,
        paddingRight: 80,
        //borderRadius: 50,
        marginBottom:3,
        marginTop: "-2%"*/
    
         
        },
        linearGradient2:{
          flex:1,
          width:'30%',
          height: 40, 
          //marginTop: 70, 
          //height:35,
         marginLeft:'35%',
         //marginRight:'60%',
         //marginTop:50,
         //marginBottom:50,
         borderRadius:50
        },
        buttonText2:{
          textAlign:'center',
          //marginLeft:'40%',
          marginTop:'10%'
        },
        buttonText:{
          textAlign:'center',
          //marginLeft:'40%',
          marginTop:'10%'
          
        },
        Textavtar:{
          flex:1,
          fontSize:15,
          color:'#ded776',
          textAlign:'center',
          //width:'50%',
          //marginLeft:'30%',
          //marginRight:'30%',
          marginTop:10,
        },
        Image1:{
          flex:1,
          width: 170, 
          height: 170,
          //width:'58%',
          marginTop:15,
          
          //alignItems: 'center',
          marginLeft:'25%',
          marginRight:'25%',
        },
        linearGradient1:{
          width:'40%',
          
          height:30,
         marginLeft:'30%',
         //marginRight:'90%',
         marginTop:10,
         marginBottom:40,
         borderRadius:50
        },
        buttonText1:{
          textAlign:'center',
          //marginLeft:'25%',
          marginTop:'2%'
        },
        tntxtstyle1:{
          paddingLeft: 20,
          borderWidth: 1,
          borderColor: '#ded776',
          width:'90%',
          marginLeft:'5%',
          //marginRight:'10%',
          marginTop:10,
          borderRadius:50,
    
        },
        underline:{
          
          marginTop:"-2%",
          marginRight:20
        },
            container1: {
            flex: 1,
           
            width:"100%",
            paddingLeft:"2%",
            paddingRight:"2%",
    
             //justifyContent: 'center',
            flexDirection: 'row',
            //alignItems: 'center',
            
        },
        buttonContainer: {
            flex: 1,
            height:40,
            width:"90%",
            marginTop:10,
           
            paddingTop:10,
            paddingBottom:10,
            marginLeft:5,
            marginRight:5,
          
            borderRadius:50,
            borderColor: '#ded776',
            borderWidth: 1,
            //flexDirection: 'row',
            paddingLeft:"4%",
            paddingRight:"4%",
            marginTop:10,
            //marginLeft:"10%",
            //marginRight:"10%"
            
    
        },
        mapstyl:{
          //flex:1,
          height:350,
          width:300,
          marginLeft:"5%",
          //marginRight:"30%",
          marginTop:"-15%",
          paddingRight:30,
          resizeMode: 'contain',
          left: 20,
           right:-20 
      //top: 50, 
      //width: 20,
      // height: 40}
         // width:300
         
        },
        TxtpotrtStyle:{
        color:'#fff',
        textAlign:'left',
        paddingLeft:'5%'
      },
      TexttellusStyle:{
        flex: 1,
        fontSize: 20,
        marginTop:20,
        marginBottom:10,
        fontFamily: 'Gill Sans',
        backgroundColor:'black',
        color:'#ded776',
        textAlign:'center',
      },
    describebtnStyle:{
      height:90,
        flex:1,
        marginTop:30,
        //marginBottom:10,
        paddingTop:10,
        
        //paddingBottom:30,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#323232',
        borderRadius:25,
        borderWidth: 1,
        borderColor: '#808080'
      },
      TextStyle4:{
        flex: 1,
     backgroundColor:'black',
     
     color:'#ded776',
    //textAlign: 'left',
    fontSize: 22,
    
    //marginTop:10,
    
    flexDirection: 'row',
    
    textDecorationStyle: "solid",
    //textDecorationColor: "#ded776"
    //lineHeight: 30
    
      },
      baseText4:{
        fontFamily: 'Cochin',
        borderBottomColor:'#ded776',
        borderWidth:2,
      },
      occupationtext:{
        marginTop:10,
        marginBottom:20,
        fontSize:18,
        fontFamily: 'Cochin',
        textAlign:'center',
        color:'#ded776',
        //backgroundColor:'black'
    
      },
      linearGradient4:{
        flex: 1,
        marginTop:70,
        marginBottom:-70,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft:110,
        marginRight:110,
        borderRadius: 50,
        //borderBottomWidth:-100,
        borderTopWidth:50
      },
    
    buttonText4:{
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin:25,
     
        color: 'black',
        backgroundColor: 'transparent',
    },
    MainContainer3:{
      justifyContent: 'center',
      flex:1,
     //borderBottomColor: '#ded776',
     //marginBottom:50,
      //borderTopWidth:50,
      //borderBottomWidth: 100,
      
       backgroundColor:'black'
      }, 
      uploadpotrtbtnStyle:{
        //flex:1,
        marginTop:2,
        paddingTop:10,
        paddingBottom:10,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#323232',
        borderRadius:50,
        borderWidth: 2,
        borderColor: '#808080'
      },
      main: {
        flex: 1,
        margin: 30,
        resizeMode:'contain',
        //borderRadius: 40,
        //borderColor:'#ded776'
      },
    
      image: {
        //width: 600,
        //height: 110,
        position: 'absolute',
      },
      TextStylechadd:{
        textAlign:'center',
        fontSize:12,
        marginTop:1,
        color:'#ded776'
      },
      txtyourincome:{
        marginTop:"60%",
        paddingLeft: 20,
          borderWidth: 1,
          borderColor: '#ded776',
          width:'90%',
          marginLeft:'5%',
          //marginRight:'10%',
          //marginTop:10,
          borderRadius:50,
    
      },
      mapviewstyle:{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        marginTop:10,
        marginBottom:10,
        right:0,
        justifyContent:'flex-end',
        alignItems:'center',
        
      },
      map:{
        height:200,
        width:"90%",
        marginTop:320,
        marginLeft:20,
        marginRight:20,
        flex:1,
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0
      },
      txtyourincome1:{
       
      
          borderWidth: 1,
          borderColor: '#ded776',
          width:'90%',
          marginLeft:'5%',
          //marginRight:'10%',
          marginTop:10,
          borderRadius:50,
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
