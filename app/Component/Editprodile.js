import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "../Container";

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
  Switch,
  Dimensions
  
} from "react-native";
import bgImage from '../assets/app_back_img.png';
import LinearGradient from 'react-native-linear-gradient';
// import img from '../assets/ic_more_options.png'
import sound_waves_black from '../assets/sound_waves_black.png'
import editicon from '../assets/ic_edit.png'
import ic_twitter from '../assets/ic_twitter.png'
import ic_linked_inmin from '../assets/ic_linked_inmin.png'
import ic_www from '../assets/ic_www.png'
import ic_cameramin from '../assets/ic_cameramin.png'
import ic_add from '../assets/plus_symbole.png'
import ic_up_quotes from '../assets/ic_up_quotes.png'
import * as Progress from 'react-native-progress';

class Editprodile extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      titleText: "Enjoy all the1 " ,
      
      bodyText: 'premium features',
      SwitchValue:false
    };

  }
  showAlert = () =>
  {
  
    this.props.navigation.navigate('SignIn');
  }
render(){
  return(
      <ImageBackground  style={styles.backgroundContainer}>
      <ScrollView style={{width:"100%"}}>   
      <LinearGradient 
       start={{ x: 0.0, y: 0.5 }} end={{ x: 0, y: 0.5 }}
       
       colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>
MILLIONAIRE LIST  </Text>
</LinearGradient>
<View style={styles.mainContainer}>


<Image
  source={{ uri: 'https://imagizer.imageshack.com/img924/9084/H33H0z.jpg' }}
  style={styles.circleImageLayout}
/>


<TouchableOpacity
                style={styles.editprofile}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >
                    <Image 
    source={editicon} style={{backgroundColor:'black'}}  
    style={{width: 30, height: 30,marginBottom:30}} 
/>
               
</TouchableOpacity>


<Image
  source={{ uri: 'https://imagizer.imageshack.com/img924/9084/H33H0z.jpg' }}
  style={styles.circleImageLayout1}
/>
<View style={styles.circleImageLayoutView}>
<Text style={{marginTop:100,fontSize:15,fontFamily:'FontAwesome'}} >My Name</Text>
</View>



{/* <View style={styles.container2}> */}
<View style={{flex:1,marginTop:10,alignItems:'center',justifyContent:'space-evenly'}}>
        
        <Progress.Bar progress={0.5} width={300} color="#ded776" height={20} borderRadius={50} 	 />
        <Text style={styles.text1}>70% profile completed</Text>
        </View>
{/* <TouchableOpacity
                style={styles.profilecompleteprogrss}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  > */}
                 
{/* </TouchableOpacity> */}

<Image 
    source={sound_waves_black}  
    style={{width: 50, height: 50}} 
/>
{/* </View> */}

<View style={styles.container3}>
 <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Show  income</Text>

 <Switch style={{marginLeft:190}}
      onValueChange={(value) => this.setState({SwitchValue: value})}
      value={this.state.SwitchValue} />
{/*<TouchableOpacity
                style={styles.edit}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >
               
</TouchableOpacity>*/}
</View>

<View style={styles.container3}>
 <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Show looking for</Text>
 <Switch style={{marginLeft:175}}
      onValueChange={(value) => this.setState({SwitchValue: value})}
      value={this.state.SwitchValue} />
</View>

</View>


<View style={styles.container4}>
  
 <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Birthdate:</Text>
 <TextInput  style={{height:35,marginTop:10,width:180,backgroundColor:'black',borderRadius:5,marginLeft:5,color : "white",fontFamily:'FontAwesome',fontSize:15}}
     />

<TouchableOpacity
                style={styles.edit}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >
               
               <Image 
    source={editicon} style={{backgroundColor:'black',justifyContent:'flex-end'}}  
    style={{width: 30, height: 30}} 
/>
</TouchableOpacity>
 
</View>


<View style={styles.container5}>
 <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>"2 individual with same passion makes me happy"</Text>
</View>

<View style={styles.container4}>
 <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Location:</Text> 
 <TextInput  style={{height:35,marginTop:10,width:180,backgroundColor:'black',borderRadius:5,marginLeft:5,color : "white",fontFamily:'FontAwesome',fontSize:15}}
     />


<TouchableOpacity
              
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >
               
</TouchableOpacity>
</View>
       
<View style={styles.container4}>
 <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Income:</Text> 
 <TextInput  style={{height:35,marginTop:10,width:180,backgroundColor:'black',borderRadius:5,marginLeft:5,color : "white",fontFamily:'FontAwesome',fontSize:15}}
     />


<TouchableOpacity
                style={{left:45,
                //alignItems:'center',
              alignSelf:'flex-end',}}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >
    
    <Image 
    source={editicon} style={{backgroundColor:'black'}}  
    style={{width: 30, height: 30}} 
/>             
</TouchableOpacity>
</View>

<View style={styles.container4}>
 <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Looking for:</Text> 
 <TextInput  style={{height:35,marginTop:10,width:140,backgroundColor:'black',borderRadius:5,marginRight:25,color : "white",fontFamily:'FontAwesome',fontSize:15}}
     />


<TouchableOpacity
                style={styles.edit}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >

<Image 
    source={editicon} style={{backgroundColor:'black',justifyContent:'flex-end'}}  
    style={{width: 30, height: 30}} 
/>         
</TouchableOpacity>
</View>


<View style={styles.container4}>
 <Text style={{fontFamily:'FontAwesome',fontSize:15}}>Smoking</Text> 
 <TextInput  style={{height:35,marginTop:10,width:90,backgroundColor:'black',borderRadius:5,marginLeft:5,color : "white",fontFamily:'FontAwesome',fontSize:15}}
     />
 <Text style={{left:10,fontFamily:'FontAwesome',fontSize:15}}>Drinking</Text> 
 <TextInput  style={{height:35,marginTop:10,width:90,backgroundColor:'black',borderRadius:5,marginLeft:15,color : "white",fontFamily:'FontAwesome',fontSize:15}}
     />

<TouchableOpacity
                style={{left:3,
                 
                //alignItems:'center',
              alignSelf:'flex-end',}}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >
    
    <Image 
    source={editicon} style={{backgroundColor:'black',justifyContent:'flex-end'}}  
    style={{width: 30, height: 30}} 
/>             
</TouchableOpacity>
</View>



<View style={styles.container4}>
 <Text style={{fontFamily:'FontAwesome',fontSize:15}}>Industry:</Text> 
 <TextInput  style={{height:35,marginTop:10,width:140,backgroundColor:'black',borderRadius:5,marginLeft:5,color : "white",fontFamily:'FontAwesome',fontSize:15}}
     />
 

<TouchableOpacity
                style={{left:60,
                  
              alignSelf:'flex-end',}}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >
    
    <Image 
    source={editicon} style={{backgroundColor:'black',justifyContent:'flex-end'}}  
    style={{width: 30, height: 30}} 
/>          
</TouchableOpacity>
</View>



<View style={styles.container4}>
 <Text style={{fontFamily:'FontAwesome',fontSize:15,marginRight:10}}>Privious Organization:</Text> 
 <TextInput  style={{height:35,marginTop:10,width:140,backgroundColor:'black',borderRadius:5,marginRight:10,color : "white",fontFamily:'FontAwesome',fontSize:15}}
     /> 
 

<TouchableOpacity
                style={{left:10,
                 marginTop:10,
              
              alignSelf:'flex-end',}}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >
                                             <Image 
    source={ic_add} style={{borderRadius:5,
      width:25,
      height:25,
    }}  
    style={{width: 25, height: 25}} 
/>


</TouchableOpacity>
</View>



<View style={styles.container4}>
 <Text style={{fontFamily:'FontAwesome',fontSize:15}}>Education:</Text> 
 <TextInput  style={{height:35,marginTop:10,width:140,backgroundColor:'black',borderRadius:5,marginLeft:5,color : "white",fontFamily:'FontAwesome',fontSize:15}}
     />
 

<TouchableOpacity
                style={{left:55,
                 
              alignSelf:'flex-end',}}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >
                                <Image 
    source={ic_add} style={{borderRadius:5,
      width:25,
      height:25,
    }}  
    style={{width: 25, height: 25}} 
/>

</TouchableOpacity>
</View>


<View style={styles.container4}>
 <Text style={{fontFamily:'FontAwesome',fontSize:15}}>Prefer to meet:</Text> 
 <TextInput  style={{height:35,marginTop:10,width:150,backgroundColor:'black',borderRadius:5,marginLeft:5,color : "white",fontFamily:'FontAwesome',fontSize:15}}
     /> 
 

<TouchableOpacity
                style={{left:35,
                
              alignSelf:'flex-end',}}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >
                                <Image 
    source={ic_add} style={{borderRadius:5,
      width:25,
      height:25,
    }}  
    style={{width: 25, height: 25}} 
/>

</TouchableOpacity>
</View>



<View style={styles.container4}>
  <View style={{
    flex:1,
    
                 // width:35,
                  height:35,
                //marginTop:10,
               // borderRadius:100,
               // backgroundColor:'#ded776',
              alignItems:'center',
             }}>


  <View  style={{
    //flex:1,
                 
                marginTop:9,
                
              alignItems:'center',
              marginRight:50
             }}>


         <Image 
    source={ic_linked_inmin} style={{backgroundColor:'black'}}  
    style={{width: 40, height: 40}} 
/>
    
  </View>
         </View>
  
 
  <View style={{
    flex:2,
    flexDirection:'row',alignItems:'center' }}>
           
           <Text style={{marginTop:25,fontFamily:'FontAwesome',fontSize:15}}>Add LinkedIn:</Text>

<TouchableOpacity
                style={{
                
              alignSelf:'flex-end',
            left:118
            }}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >
                              <Image 
    source={ic_add} style={{borderRadius:5,
      width:25,
      height:25,
    }}  
    style={{width: 25, height: 25}} 
/>
  
</TouchableOpacity>

</View>


</View>


{/*website disign */} 



<View style={styles.container4}>
  <View style={{
    flex:1,
    
                 // width:35,
                  height:35,
                //marginTop:10,
               // borderRadius:100,
               // backgroundColor:'#ded776',
              alignItems:'center',
             }}>


  <View  style={{
    //flex:1,
                 
                marginTop:9,
                
              alignItems:'center',
              marginRight:50
             }}>
         
         <Image 
    source={ic_www} style={{backgroundColor:'black'}}  
    style={{width: 40, height: 40}} 
/>
  </View>
         </View>
   
  <View style={{
    flex:2,
    flexDirection:'row',alignItems:'center' }}>
           
           <Text style={{marginTop:25,fontFamily:'FontAwesome',fontSize:15}}>Add Website:</Text>

<TouchableOpacity
                style={{
              
                //alignItems:'center',
              alignSelf:'flex-end',
            left:120
            }}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >
                                <Image 
    source={ic_add} style={{borderRadius:5,
      width:25,
      height:25,
    }}  
    style={{width: 25, height: 25}} 
/>

</TouchableOpacity>

</View>


</View>




{/* twitter disign */} 



<View style={styles.container4}>
  <View style={{
    flex:1,
    
                 // width:35,
                  height:35,
                
              alignItems:'center',
             }}>


  <View  style={{
    //flex:1,
                marginTop:9,
             
              alignItems:'center',
              marginRight:50
             }}>
    


    <Image 
    source={ic_twitter} style={{backgroundColor:'black'}}  
    style={{width: 40, height: 40}} 
/>
  </View>
         </View>
   
  <View style={{
    flex:2,
    flexDirection:'row',alignItems:'center' }}>
           
           <Text style={{marginTop:25,fontFamily:'FontAwesome',fontSize:15}}>Add Twitter:</Text>

<TouchableOpacity
                style={{
                
              alignSelf:'flex-end',
            left:128
            }}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >

                 <Image 
    source={ic_add} style={{borderRadius:5,
      width:25,
      height:25,
    }}  
    style={{width: 25, height: 25}} 
/>
           
</TouchableOpacity>

</View>


</View>



{/* Instagram disign */} 



<View style={styles.container4} > 
  <View style={{
    flex:1,
    
                 // width:35,
                  height:35,
                //marginTop:10,
               // borderRadius:100,
               // backgroundColor:'#ded776',
              alignItems:'center',
              
             }}>


  <View  style={{
    //flex:1,
             
                marginTop:9,
             
              alignItems:'center',
              marginRight:50
             }}>
    
    <Image 
    source={ic_cameramin} style={{backgroundColor:'black'}}  
    style={{width: 40, height: 40}} 
/>
  </View>
         </View>
   
  <View style={{
    flex:2,
    flexDirection:'row',alignItems:'center',marginBottom:20 }}>
           
           <Text style={{marginTop:25,fontFamily:'FontAwesome',fontSize:15}}>Add  Instagram:</Text>

<TouchableOpacity
                style={{
                  
              alignSelf:'flex-end',
            left:105
            }}
                   activeOpacity = { .5 }
                   onPress={ this.ButtonClickCheckFunction }
                  >
                 <Image 
    source={ic_add} style={{borderRadius:5,
      width:25,
      height:25,
    }}  
    style={{width: 25, height: 25}} 
/>
</TouchableOpacity>

</View>


</View>




      </ScrollView>    
      </ImageBackground>
    );

};
}

const styles = StyleSheet.create({
 
  container5:{
    flex:1,
    justifyContent:'center'
    ,
    width:'100%',
    alignItems:'center',
    borderTopWidth:1,
    padding:8,
    marginTop:15
  }
  ,container4:{
    flex:1,
    justifyContent:'center'
    ,
    width:'100%',
    alignItems:'center',
    borderTopWidth:1,
  //  padding:14,
    marginTop:15,
    flexDirection:'row'
  }
  ,

  container3:{
    flex:1,
    flexDirection:'row'
    
    ,
    width:'100%',
    //alignItems:'center',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop:15
  }
  ,
  container2:{
    flex:1,
    justifyContent:'center'
    ,
    width:'100%',
    alignItems:'center',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop:15
  }
  ,


  editprofile:
  {
   // backgroundColor:'#ded776',
    alignItems:'center',
    position:'absolute',
    right:7,
    
    
  
    
  },
  edit:
  { left:40,
    borderRadius:100,
     backgroundColor:'#ded776',
    //alignItems:'center',
  alignSelf:'flex-end',
  //flex:1,
  
  //flexDirection:'row'
  
    
  }
  ,
  profilecompleteprogrss:
  {
      height:20,
      width:'100%',
    borderRadius:50,
    backgroundColor:'#ded776',
    alignItems:'center'
  
    
  }
  ,
  circleImageLayout1: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2
    ,
    position:'absolute',
    borderWidth:3,
    borderColor: '#ded776',
    top:1
    
  
  },
 
  circleImageLayoutView: {
    width: '100%',
    height: 100,
    borderRadius: 100 / 2
    ,
    position:'absolute',
    //borderWidth:3,
    //borderColor: '#ded776',
    top:1,
    alignItems:'center',
    
  
  },
  
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop:1,
    
  
    
  },
  circleImageLayout: {
    width: '100%',
    height: 200,
   // borderRadius:90,
    
  },
  text1: {
    fontSize: 15,
    textAlign: 'center',
    color:'black'
    ,
    
    

  },
  text: {
    marginTop: 30,
    fontSize: 40,
    color: '#0250a3',
    fontWeight: 'bold',
  },
    backgroundContainer: {
    flex: 1,
  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    
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
        width:"50%",
    
        justifyContent: "space-between",
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
)(Editprodile);
