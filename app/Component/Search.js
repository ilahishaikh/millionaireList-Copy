import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,Switch,Button,TextInput
  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import ic_tick from '../assets/ic_tick.png'
import CardStack, { Card } from 'react-native-card-stack-swiper';
import rotating from '../assets/rotating.png'
import ic_messagemin from '../assets/ic_messagemin.png'
import user_profilemin from '../assets/user_profilemin.png'
import LinearGradient from 'react-native-linear-gradient';
import searchgolden from '../assets/searchgolden.png'
import directional from '../assets/directional.png'
import marsmin from '../assets/marsmin.png'
// import sound from '../assets/sound.png'
import lovelymin from '../assets/lovelymin.png'
// import coffee from '../assets/coffee.png'
// import body from '../assets/body.png'
// import place from '../assets/place.png'
// import glassmin from '../assets/glassmin.png'
// import ic_camera from '../assets/ic_camera.png'
// import ic_linked_in from '../assets/ic_linked_in.png'
// import education from '../assets/education.png'
// import ic_up_quotes from '../assets/education.png'
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from 'reanimated-bottom-sheet'
// import msgmin from '../assets/msgmin.png'
// import flash from '../assets/flash.png'
// import ic_reswipe from '../assets/ic_reswipe.png'
import Slider from '@react-native-community/slider';


export default class App extends React.Component{
   constructor(props) {
        super(props);
        this.state = {
            whichoccupation:'No',
            whichlanguage:'No',
            whichlookingfor:'No',
            whichdrinkorsmoke:'no',
            whichlocation:'No',
            whichpreference:'no',
            sliderValue: 15,
            sliderValue2:30
        };
      }

selectOccupation(tmp1)
      {
               
                this.setState({
           whichoccupation: tmp1
        });
      }
      selectLanguage(tmp1)
      {
               
                this.setState({
           whichlanguage: tmp1
        });
      }
      selectLookingfor(tmp1)
      {
               
                this.setState({
           whichlookingfor: tmp1
        });
      }
      selectDrinkorsmoke(tmp1)
      {
               
                this.setState({
           whichdrinkorsmoke: tmp1
        });
      }
selectLocation(tmp1)
      {
               
                this.setState({
           whichlocation: tmp1
        });
      }
selectPreference(tmp1)
      {
               
                this.setState({
           whichpreference: tmp1
        });
      }

    renderInner = () => (

      
        <View style={styles.panel}>
          
    <View style={{flex:1,justifyContent:'center'}}>
      <LinearGradient
           start={{ x: 0.0, y: 0.5 }} end={{ x: 0, y: 0.5 }}
           
           colors={['#dcc642', '#896100']}  >
    <View style={{justifyContent:'center', padding:15}}>
    
              <Text style={styles.fontstyle}>Sexual Preferences </Text> 
        <View style={{justifyContent:'center', flexDirection:'row'}}>
         <LinearGradient style={{flexDirection:'row',width:'90%',alignItems:'center',justifyContent:'center',height:40,borderRadius:15,marginTop:10,justifyContent:'space-around'}}
           
           colors={['#dcc642', '#896100']}  >

            {/* <TouchableOpacity 
          style={styles.btnstyle}
          activeOpacity = { .5 }
         onPress={this.selectPreference.bind(this,'Straight')}
       >
       
           
 {
                      ispreference?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
               <Text style={styles.straighttext}>Straight   </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Straight   </Text>
                    }
  </TouchableOpacity> */}
               <Text style={styles.straighttext}>Straight   </Text>
               <Text style={styles.straighttext}>Gay   </Text>  
                  <Text style={styles.straighttext}>Bisexual</Text> 
        </LinearGradient>
    
        </View> 
    <View style={{flexDirection:'row'}}>
      <Text style={styles.fontstyle1}>Show People within </Text> 
        <Text style={{color:'white',marginTop:10,left:8,fontSize:15,fontFamily:'FontAwesome'}}>79 km </Text> 
       </View>
       <Slider
          maximumValue={100}
          minimumValue={0}
          thumbTintColor={'rgb(252, 228, 149)'}
          minimumTrackTintColor={'#d3d3d3'}
          maximumTrackTintColor={'rgb(252, 228, 149)'}
          minimumTrackImage={require('../assets/slider.png')}
          minimumTrackImage={require('../assets/slider.png')}
          step={13}
          value={this.state.sliderValue}
          onValueChange={(sliderValue) => this.setState({ sliderValue })}
          style={{alignSelf: 'center', width: "90%", height: 30,borderWidth:1, transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
}}
        />
        {/* <View style={{justifyContent:'center', flexDirection:'row', padding:15}}>
         <LinearGradient style={{flexDirection:'row',width:'80%',justifyContent:'center',height:10,borderRadius:50}}
           
           colors={['#dcc642', '#896100', '#f2eb80']}  >
               
        </LinearGradient>
    
        </View> */}
      <View style={{flexDirection:'row'}}>
      <Text style={styles.fontstyle}>Age limit</Text> 
        <Text style={{color:'white',marginTop:3,left:8}}>28 years </Text> 
    
       </View>
       <Slider
          maximumValue={100}
          minimumValue={0}
          thumbTintColor={'rgb(252, 228, 149)'}
          minimumTrackTintColor={'#d3d3d3'}
          maximumTrackTintColor={'rgb(252, 228, 149)'}
          minimumTrackImage={require('../assets/slider.png')}
          minimumTrackImage={require('../assets/slider.png')}
          step={13}

          
          value={this.state.sliderValue}
          onValueChange={(sliderValue) => this.setState({ sliderValue })}
          style={{alignSelf: 'center', width: "90%", height: 30,borderWidth:1, transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
}}
        />
    
        {/* <View style={{justifyContent:'center', flexDirection:'row', padding:15}}>
         <LinearGradient style={{flexDirection:'row',width:'80%',justifyContent:'center',height:10,borderRadius:50}}
           
           colors={['#dcc642', '#896100', '#f2eb80']}  >
               
        </LinearGradient>
    
        </View> */}
        <View style={{flexDirection:'row'}}>
      <Text style={styles.fontstyle}>Show my age</Text> 
                          <Switch style={{left:190}}
                        onValueChange ={(switchValue)=>this.setState({switchValue})}/> 
    
       </View>
    <View style={{flexDirection:'row',marginTop:10}}>
      <Text style={styles.fontstyle}>Contact Preferences</Text> 
    
    
       </View>
    
        <View style={{flexDirection:'row',marginTop:10}}>
      <Text style={{color:'white',fontSize:15,fontFamily:'FontAwesome'}}>enable email notification</Text> 
                          <Switch style={{left:135}}
                        onValueChange ={(switchValue)=>this.setState({switchValue})}/> 
    
       </View>
    <View style={{flexDirection:'row',marginTop:10}}>
      <Text style={{color:'white',fontSize:15,fontFamily:'FontAwesome'}}> Recive monthly Newsletter</Text> 
                          <Switch style={{left:120}}
                        onValueChange ={(switchValue)=>this.setState({switchValue})}/> 
    
       </View>
    <View style={{flexDirection:'row',marginTop:10}}>
      <Text style={styles.fontstyle}>About</Text>
       </View>
        <View style={{marginTop:10}}>
      <Text style={{color:'white',fontSize:15,fontFamily:'FontAwesome'}}>Term of use</Text> 
                          
      <Text style={{color:'white',marginTop:10,fontSize:15,fontFamily:'FontAwesome'}}>Privacy policy</Text> 
      <Text style={{color:'white',marginTop:10,fontSize:15,fontFamily:'FontAwesome'}}> Get support</Text> 
    
    
       </View>
       <View style={{flexDirection:'row',marginTop:10}}>
      <Text style={styles.fontstyle}>Account</Text> 
    
    
       </View>
    
        <View style={{marginTop:10}}>
      <Text style={{color:'white',fontSize:15,fontFamily:'FontAwesome'}}>Change Email Address</Text> 
                          
      <Text style={{color:'white',marginTop:10,fontSize:15,fontFamily:'FontAwesome'}}>Change Password</Text> 
        <Text style={{color:'white',marginTop:10,fontSize:15,fontFamily:'FontAwesome'}}> Logout</Text> 
    
    
       </View>
    
    </View>
     </LinearGradient>
      
     </View>
    
         
        </View>
      )
    
      renderHeader = () => (
        <View style={styles.header}>

      
        <View style={styles.panelHeader}>
            
            <View style={styles.panelHandle} />
    
    
                  </View> 
        </View>
      )
  render(){
    var isoccupation= false;
    var banking= false;
    var startups= false;
    var investor= false;
    var fintech= false;
    var english= false;
    var hindi= false;
    var german= false;
    var french= false;
    var dating= false;
    var reationship= false;
    var hookup= false;
    var yes= false;
    var no= false;
    var chainsmoker= false;
    var ocassionally= false;
    var newyork= false;
    var uk= false;
    var parisarea= false;
    var ispreference= false;
    var gay= false;
    var bisexual= false;
       if(this.state.whichoccupation=='Finance'){
         isoccupation=true
       }
       else if(this.state.whichoccupation=='Banking'){
         banking=true
       }else if(this.state.whichoccupation=='Startups'){
         startups=true
       }
       else if(this.state.whichoccupation=='Investor'){
         investor=true
       }
       else if(this.state.whichoccupation=='Fintech'){
         fintech=true
       }

        if(this.state.whichlanguage=='English'){
         english=true
       }
       else if(this.state.whichlanguage=='Hindi'){
         hindi=true
       }else if(this.state.whichlanguage=='German'){
         german=true
       }
       else if(this.state.whichlanguage=='French'){
         french=true
       }

if(this.state.whichlookingfor=='Dating'){
         dating=true
       }
       else if(this.state.whichlookingfor=='Relationship'){
         reationship=true
       }else if(this.state.whichlookingfor=='Hookup'){
         hookup=true
       }
       if(this.state.whichdrinkorsmoke=='Yes'){
         yes=true
       }
       else if(this.state.whichdrinkorsmoke=='No'){
         no=true
       }else if(this.state.whichdrinkorsmoke=='Chain Smoker'){
         chainsmoker=true
       }
       else if(this.state.whichdrinkorsmoke=='Ocassionally'){
         ocassionally=true
       }
       if(this.state.whichlocation=='New York Area'){
         newyork=true
       }
       else if(this.state.whichlocation=='United Kingdom'){
         uk=true
       }else if(this.state.whichlocation=='Paris Area'){
         parisarea=true
       }
       if(this.state.whichpreference=='Straight'){
         ispreference=true
       }
       else if(this.state.whichpreference=='Gay'){
         gay=true
       }else if(this.state.whichpreference=='Bisexual'){
         bisexual=true
       }

      // alert(this.state.whichdrinkorsmoke);
   
    return (

<View style={{ flex: 1 }}>


  
{/*search*********************************************************** */}

<View style={{flex:6,justifyContent:'center'}}>
       <ScrollView>
<View style={{justifyContent:'center', padding:10}}>

          <Text style={{fontSize:20,fontFamily:'FontAwesome',fontWeight:'bold'}}>Occupation </Text>
    <View style={{justifyContent:'center', flexDirection:'row',marginTop:15}}>
 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      <TouchableOpacity 
          style={styles.btnstyle}
          activeOpacity = { .5 }
         onPress={this.selectOccupation.bind(this,'Finance')}
       >   
 {
                      isoccupation?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Finance   </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Finance   </Text>
                    }
  </TouchableOpacity>
     <TouchableOpacity 
          style={styles.btnstyle}
          activeOpacity = { .5 }
          onPress={this.selectOccupation.bind(this,'Banking')}
       >
       {
                      banking?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Banking   </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Banking   </Text>
                    }
  </TouchableOpacity>
     <TouchableOpacity 
          style={styles.btnstyle}
          activeOpacity = { .5 }
          onPress={this.selectOccupation.bind(this,'Startups')}
       >
       {
                     startups?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Startups   </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Startups   </Text>
                    }
  </TouchableOpacity>
  <TouchableOpacity 
          style={styles.btnstyle}
          activeOpacity = { .5 }
          onPress={this.selectOccupation.bind(this,'Investor')}
       >
       {
                      investor?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Investor   </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Investor   </Text>
                    }
  </TouchableOpacity>
     <TouchableOpacity 
          style={styles.btnstyle}
          activeOpacity = { .5 }
          onPress={this.selectOccupation.bind(this,'Fintech')}
       >
       {
                      fintech?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Fintech   </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Fintech   </Text>
                    }
  </TouchableOpacity>    
 </ScrollView>
    </View>
</View>    
<View style={{justifyContent:'center', padding:15}}> 
          <Text style={{fontSize:20,fontFamily:'FontAwesome',fontWeight:'bold'}}>Languages </Text>
    <View style={{justifyContent:'center', flexDirection:'row',marginTop:15}}>
 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
>
      <TouchableOpacity 
          style={styles.btnstyle}
          activeOpacity = { .5 }
          onPress={this.selectLanguage.bind(this,'English')}
       >
           {
                      english?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>English   </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>English   </Text>
                    }
  </TouchableOpacity>
     <TouchableOpacity 
          style={styles.btnstyle}
          activeOpacity = { .5 }
          onPress={this.selectLanguage.bind(this,'Hindi')}
       >
       {
                      hindi?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Hindi   </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Hindi   </Text>
                    }
  </TouchableOpacity>
     <TouchableOpacity 
          style={styles.btnstyle}
          activeOpacity = { .5 }
          onPress={this.selectLanguage.bind(this,'German')}
       >
       {
                     german?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>German   </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>German   </Text>
                    }
  </TouchableOpacity>
  <TouchableOpacity 
          style={styles.btnstyle}
          activeOpacity = { .5 }
          onPress={this.selectLanguage.bind(this,'French')}
       >
       {
                      french?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>French   </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>French   </Text>
                    }
  </TouchableOpacity>
 </ScrollView>
    </View>
</View>    
<View style={{justifyContent:'center', padding:15}}> 

          <Text style={{fontSize:20,fontFamily:'FontAwesome',fontWeight:'bold'}}>Looking for </Text>
    <View style={{justifyContent:'center', flexDirection:'row',marginBottom:15,marginTop:15}}>
      <TouchableOpacity 
          style={styles.btnstyle}
          activeOpacity = { .5 }
          onPress={this.selectLookingfor.bind(this,'Dating')}
       >
       {
                      dating?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Dating   </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Dating   </Text>
                    }
  </TouchableOpacity>
     <TouchableOpacity 
          style={{width:100,borderWidth:1,height:40,justifyContent:'center',alignItems:'center',borderRadius:50,marginRight:8}}
          activeOpacity = { .5 }
          onPress={this.selectLookingfor.bind(this,'Relationship')}
       >
 {
                      reationship?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtRelationship}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome',marginLeft:10}}>Relationship   </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome',marginLeft:10}}>Relationship   </Text>
                    }
  </TouchableOpacity>
     <TouchableOpacity 
          style={styles.btnstyle}
          activeOpacity = { .5 }
          onPress={this.selectLookingfor.bind(this,'Hookup')}
       >
 {
                      hookup?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Hookup   </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Hookup   </Text>
                    }
  </TouchableOpacity>
    </View>
</View>
{/* <View style={{ padding:15,flexDirection:'row'}}> 

  <Text style={{fontSize:20,fontFamily:'FontAwesome'}} >Profile match 80%</Text> 
   {/* <Text style={{left:8}}>28 years </Text> 
   </View> */}
<View style={{ padding:15}}>
   <Text style={{textAlign:'left',fontSize:20,fontFamily:'FontAwesome',marginLeft:5,fontWeight:'bold'}}>Profile match : {this.state.sliderValue}</Text>
    <Slider
          maximumValue={100}
          minimumValue={0}
          thumbTintColor={'rgb(252, 228, 149)'}
          minimumTrackTintColor={'#d3d3d3'}
          maximumTrackTintColor={'rgb(252, 228, 149)'}
          minimumTrackImage={require('../assets/slider.png')}
          minimumTrackImage={require('../assets/slider.png')}
          step={13}
          value={this.state.sliderValue2}
          onValueChange={(sliderValue2) => this.setState({ sliderValue2 })}
          style={{alignSelf: 'center', width: "100%", height: 30,borderWidth:1, transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
}}
        />
</View>

    {/* <View style={{justifyContent:'center', flexDirection:'row', padding:15}}>
     <LinearGradient style={{flexDirection:'row',width:'90%',justifyContent:'center',height:20,borderRadius:50}}
       
       colors={['#dcc642', '#896100', '#f2eb80']}  >
           
    </LinearGradient>

    </View> 
<View style={{ padding:15,flexDirection:'row'}}> 

  <Text style={{fontSize:20,fontFamily:'FontAwesome'}} >People show within 80 km</Text> 
    <Text style={{left:8}}>28 years </Text> 
   </View>
    <View style={{justifyContent:'center', flexDirection:'row', padding:15}}>
     <LinearGradient style={{flexDirection:'row',width:'90%',justifyContent:'center',height:20,borderRadius:50}}
       
       colors={['#dcc642', '#896100', '#f2eb80']}  >
           
    </LinearGradient>

    </View>*/}
    <View style={{ padding:15}}>
    <Text style={{textAlign:'left',fontSize:20,fontFamily:'FontAwesome',marginLeft:5,fontWeight:'bold'}}>People show within 2km {this.state.sliderValue1}</Text>
    <Slider
          maximumValue={100}
          minimumValue={0}
          thumbTintColor={'rgb(252, 228, 149)'}
          maximumTrackTintColor={'rgb(252, 228, 149)'}
          minimumTrackImage={require('../assets/slider.png')}
          minimumTrackImage={require('../assets/slider.png')}
          step={1}
          value={this.state.sliderValue3}
          onValueChange={(sliderValue3) => this.setState({ sliderValue3 })}
          style={{ alignSelf: 'center', width: "100%", height: 30,borderWidth:1, transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
        />
</View>
<View style={{justifyContent:'center', padding:15}}> 
          <Text style={{fontSize:20,fontFamily:'FontAwesome',fontWeight:'bold'}}>Drink or Smoke </Text>
    <View style={{justifyContent:'center', flexDirection:'row',marginTop:15}}>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
<TouchableOpacity 
          style={styles.btnstyle}
          activeOpacity = { .5 }
          onPress={this.selectDrinkorsmoke.bind(this,'Yes')}
       >
       {
                      yes?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Yes   </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Yes   </Text>
                    }
  </TouchableOpacity>
      <TouchableOpacity 
          style={styles.btnstyle}
          activeOpacity = { .5 }
          onPress={this.selectDrinkorsmoke.bind(this,'No')}
       >
       {
                      no?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>No   </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>No   </Text>
                    }
  </TouchableOpacity>
   <TouchableOpacity 
          style={{width:110,borderWidth:1,height:40,justifyContent:'center',alignItems:'center',borderRadius:50,marginRight:8}}
          activeOpacity = { .5 }
          onPress={this.selectDrinkorsmoke.bind(this,'Chain Smoker')}
       >
       {
                      chainsmoker?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtRelationship}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome',marginLeft:5}}>Chain Smoker   </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome',marginLeft:5}}>Chain Smoker   </Text>
                    }
  </TouchableOpacity>
     <TouchableOpacity 
          style={{width:100,borderWidth:1,height:40,justifyContent:'center',alignItems:'center',borderRadius:50,marginRight:8}}
          activeOpacity = { .5 }
          onPress={this.selectDrinkorsmoke.bind(this,'Ocassionally')}
       >
       {
                      ocassionally?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtRelationship}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome',marginLeft:5}}>Ocassionally </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome',marginLeft:5}}>Ocassionally  </Text>
                    }
  </TouchableOpacity>
  </ScrollView>
    </View>
</View>
<View style={{ padding:15,flexDirection:'row'}}> 
  <Text style={{fontSize:20,fontFamily:'FontAwesome',fontWeight:'bold'}} >Location</Text> 
   {/* <Text style={{left:8}}>28 years </Text> */} 
   </View>
    <View style={{justifyContent:'center', flexDirection:'row', padding:15}}>
    <TextInput style={{width:'100%',borderWidth:1,borderRadius:50}}> </TextInput>
    </View>
 <View style={{justifyContent:'center', padding:15}}> 
    <View style={{justifyContent:'center', flexDirection:'row'}}>
 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      <TouchableOpacity 
          style={styles.btnstyle1}
          activeOpacity = { .5 }
          onPress={this.selectLocation.bind(this,'New York Area')}
       >
       {
                      newyork?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtRelationship}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>New York Area </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>New York Area  </Text>
                    }
  </TouchableOpacity>
     <TouchableOpacity 
          style={styles.btnstyle1}
          activeOpacity = { .5 }
          onPress={this.selectLocation.bind(this,'United Kingdom')}
       >
 {
                      uk?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtRelationship}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome',marginLeft:5}}>United Kingdom </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome',marginLeft:5}}>United Kingdom  </Text>
                    }
  </TouchableOpacity>
     <TouchableOpacity 
          style={styles.btnstyle1}
          activeOpacity = { .5 }
          onPress={this.selectLocation.bind(this,'Paris Area')}
       >
 {
                      parisarea?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtRelationship}>
               <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Paris Area </Text>
       </LinearGradient>):   <Text style={{fontSize:15,fontFamily:'FontAwesome'}}>Paris Area  </Text>
                    }
  </TouchableOpacity>
 </ScrollView>
    </View>
</View> 
<View  style={{flex:1,flexDirection:'row',justifyContent:'center',marginLeft:30}}>
<View  style={{flex:1}}>
 <LinearGradient style={{borderRadius:10,width:120,height:40,alignItems:'center',justifyContent:'center',marginBottom:10}}
       start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
       colors={['#dcc642', '#896100', '#f2eb80']}  >
       <Text style={{fontSize:15,fontFamily:'FontAwesome',textAlign:'center',alignItems:'center',justifyContent:'center'}}>Clear all</Text>
</LinearGradient>
</View>
<View  style={{flex:1}}>
  <LinearGradient style={{borderRadius:10,width:120,height:40,alignItems:'center',justifyContent:'center',marginBottom:10}}
       start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
       colors={['#dcc642', '#896100', '#f2eb80']}  >
       <Text style={{fontSize:15,fontFamily:'FontAwesome',textAlign:'center',alignItems:'center',justifyContent:'center'}}>Search now</Text>
</LinearGradient>
</View>
</View>
</ScrollView>
 </View>
{/*search*********************************************************** */}

 <View style={{ flex: 1,
    backgroundColor: '#F5FCFF',zIndex:50}}>
        <BottomSheet
          snapPoints = {[50, 300, 50]}
          renderContent = {this.renderInner}
          renderHeader = {this.renderHeader}
      styles = {{zIndex:50}}
       
        />
       </View> 
        {/* <Button
          title="OPEN BOTTOM SHEET"
          onPress={() => {
            this.RBSheet.close();
          }}
        /> */}
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          duration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >

<View style={{flex:2,justifyContent:'center'}}>
  <LinearGradient style={{flex:1,borderTopLeftRadius:30,borderTopRightRadius:30}}
       start={{ x: 0.1, y: 0.1 }} end={{ x: 0.5, y: 0.5 }}
       colors={['#dcc642', '#896100', '#f2eb80']}  >
       <ScrollView>
<View style={{justifyContent:'center', padding:15}}>
          <Text style={styles.fontstyle}>Sexual Preferences </Text>
    <View style={{justifyContent:'center', flexDirection:'row', padding:15}}>
     <LinearGradient style={{flexDirection:'row',width:'80%',justifyContent:'center',height:30,borderRadius:50}}
       colors={['#dcc642', '#896100', '#f2eb80']}  >
           <Text>Straight   </Text>
           <Text>Gray   </Text>  
              <Text>Bisexual</Text> 
    </LinearGradient>
    </View>
<View style={{flexDirection:'row'}}>
  <Text style={styles.fontstyle}>Show People within </Text> 
    <Text style={{color:'white',marginTop:3,left:8}}>79 km </Text> 
   </View>
    <View style={{justifyContent:'center', flexDirection:'row', padding:15}}>
     <LinearGradient style={{flexDirection:'row',width:'80%',justifyContent:'center',height:10,borderRadius:50}}
       colors={['#dcc642', '#896100', '#f2eb80']}  >
    </LinearGradient>
    </View>
  <View style={{flexDirection:'row'}}>
  <Text style={styles.fontstyle}>Age limit</Text> 
    <Text style={{color:'white',marginTop:3,left:8}}>28 years </Text> 
   </View>
    <View style={{justifyContent:'center', flexDirection:'row', padding:15}}>
     <LinearGradient style={{flexDirection:'row',width:'80%',justifyContent:'center',height:10,borderRadius:50}}
       colors={['#dcc642', '#896100', '#f2eb80']}  >
    </LinearGradient>
    </View>
    <View style={{flexDirection:'row'}}>
  <Text style={styles.fontstyle}>Show my age</Text> 
                      <Switch style={{left:180}}
                    onValueChange ={(switchValue)=>this.setState({switchValue})}/> 

   </View>
<View style={{flexDirection:'row',marginTop:10}}>
  <Text style={styles.fontstyle}>Contact Preferences</Text> 
   </View>
    <View style={{flexDirection:'row',marginTop:10}}>
  <Text style={{color:'white'}}>enable email notification</Text> 
                      <Switch style={{left:135}}
                    onValueChange ={(switchValue)=>this.setState({switchValue})}/> 

   </View>
<View style={{flexDirection:'row',marginTop:10}}>
  <Text style={{color:'white'}}> Recive monthly Newsletter</Text> 
                      <Switch style={{left:120}}
                    onValueChange ={(switchValue)=>this.setState({switchValue})}/> 

   </View> 
<View style={{flexDirection:'row',marginTop:10}}>
  <Text style={styles.fontstyle}>About</Text> 
   </View>
    <View style={{marginTop:10}}>
  <Text style={{color:'white'}}>Term of use</Text>
  <Text style={{color:'white',marginTop:10}}>Privacy policy</Text> 
    <Text style={{color:'white',marginTop:10}}> Get support</Text> 
   </View>
   <View style={{flexDirection:'row',marginTop:10}}>
  <Text style={styles.fontstyle}>Acount</Text> 
   </View>
    <View style={{marginTop:10}}>
  <Text style={{color:'white'}}>Change Email Address</Text> 
  <Text style={{color:'white',marginTop:10}}>Change Password</Text> 
    <Text style={{color:'white',marginTop:10}}> Logout</Text> 
   </View>
</View>
</ScrollView>
 </LinearGradient>
 </View>
 </RBSheet>
    </View>
  );
};
}

const styles = StyleSheet.create({

   txtlinearGradient:{
         flex: 1,
             position:'absolute',
               height:40,
               width:80,
               marginTop:10,
               justifyContent: 'center',
               alignItems: 'center',
               borderRadius:50,
               alignItems:'center',
         },
         txtRelationship:{
           flex: 1,
             position:'absolute',
               height:40,
               width:'100%',
               marginTop:10,
               justifyContent: 'center',
               alignItems: 'center',
               borderRadius:50,
               alignItems:'center',
         },


 btnstyle1:{borderRadius:50,borderWidth:1,height:40,width:120,alignItems:'center',justifyContent:'center',marginRight:8}
  ,
  btnstyle:{borderRadius:50,borderWidth:1,height:40,width:80,alignItems:'center',justifyContent:'center',marginRight:8}
  ,
  fontstyle:{fontFamily:'FontAwesome',color:'white',fontSize:18,marginTop:5},
  fontstyle1:{fontFamily:'FontAwesome',color:'white',fontSize:18,marginTop:10},
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content:{
    flex: 5,
    marginBottom:70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  footer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer:{
    width:220,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  button:{
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    zIndex: 0,
  },
  orange:{
    width:55,
    height:55,
    borderWidth:6,
    borderColor:'rgb(246,190,66)',
    borderRadius:55,
    marginTop:-15
  },
  green:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#01df8a',
  },
  red:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#fd267d',
  },
  rotatingimage:{
    height:40,
    width:40,
  },
  rotatingcontainer:{
    flex:1,
    flexDirection:'row',
    height:70,
  },
  label1:{
    flex:1,
    marginLeft:30,
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  linearGradient1:{
    flexDirection:'row',
    height:60,
  },
  tickimage1:{
    height:40,
    width:40,
    marginTop:15,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft:20,
    marginRight:20,
  },
  soundimage:{
    height:50,
    width:50,
    marginTop:15,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:140,
  },
  lovelyimage:{
    height:20,
    width:20,
    marginTop:15,
  },
  coffeeimage:{
    height:20,
    width:20,
    marginTop:40,
    marginRight:20
  },
  texaccount2:{
    flexDirection:'row',
    marginTop:25,
    fontSize:15,
    paddingRight: 15,
    marginRight:20,
    color:'white'
  },
  tickimage2:{
   height:30,
    width:20,
    marginTop:15,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight:20,
  },
  rightcontainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  searchimage:{
    height:20,
    width:'5%',
    marginTop:25,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft:20,
    marginRight:20,
  },
  searchimage1:{
    height:30,
    width:'10%',
    marginTop:25,
    marginLeft:15,
    marginRight:15,
  },
  imgviewcontainer:{
    flexDirection:'row',
    paddingLeft:'5%',
    flex:1,
    backgroundColor:'#252525'
  },
  Txtdiscover:{
    color:'#dcc642',
    paddingLeft:'10%',
    fontSize:15,
    flex:1,
    marginTop:25
  },
  Txtdiscoverstraight:{
    color:'white',
    fontSize:18,
    flex:1,
    marginTop:25,
     marginLeft:10,
    marginRight:12,
  },
  Txtpune:{
    color:'black',
    fontSize:18,
    flex:1,
    marginTop:25,
     marginLeft:10,
    marginRight:12,
  },
  Txtdiscoversingle:{
    color:'white',
    fontSize:18,
    flex:1,
    marginTop:25,
     marginLeft:7,
    marginRight:2,
  },
  Txtoctomber:{
    color:'black',
    fontSize:18,
    flex:1,
    marginTop:25,
     marginLeft:7,
    marginRight:2,
  },
  compassimage:{
    
    height:20,
    width:'5%',
    marginTop:25,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft:45,
  },
  label:{
    flex:1,
    marginTop:-180,
    paddingLeft:20
  },
  imgviewcontainercard:{
    flexDirection:'row',
    paddingLeft:'5%',
    marginBottom:80,
    flex:1,
  },
  scrollviewcontainercard:{
    marginTop:20,
    flexDirection:'row',
    paddingLeft:'5%',
    marginBottom:80,
    flex:1,
  },
  scrollviewcontainer:{
    height:80,
    backgroundColor:'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
   panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  panel: {
    height: 600,
    backgroundColor: '#dcc642',
  },
  header: {
    backgroundColor: '#dcc642',
    paddingTop: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
      },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height:8,
    marginTop:10,
    marginBottom:10,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#318bfb',
    alignItems: 'center',
    marginVertical: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  tabbarcontainer1:{
    flex:1,
    flexDirection:'column',
  },
  headerText: {
      
      fontSize:20,
      fontFamily:'FontAwesome',
      textAlign: "center",
      margin: 5,
      color: 'black',
    },
  straighttext:{
    textAlign:'left',
    fontWeight:'bold',
    textAlign:'center',
    fontFamily:'FontAwesome',
    fontSize:15
  }
});
