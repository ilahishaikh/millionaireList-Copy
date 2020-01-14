import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,Switch,
  ImageBackground,
  Dimensions
  
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
// import rotating from '../assets/rotating.png'
import ic_messagemin from '../assets/ic_messagemin.png'
import user_profilemin from '../assets/user_profilemin.png'
import LinearGradient from 'react-native-linear-gradient';
// import searchgolden from '../assets/searchgolden.png'
import directional from '../assets/directional.png'
import marsmin from '../assets/marsmin.png'
import soundmin from '../assets/soundmin.png'
import lovelymin from '../assets/lovelymin.png'
import coffeemin from '../assets/coffeemin.png'
import bodymin from '../assets/bodymin.png'
import placemin from '../assets/placemin.png'
import glassmin from '../assets/glassmin.png'
import ic_cameramin from '../assets/ic_cameramin.png'
import ic_linked_inmin from '../assets/ic_linked_inmin.png'
import educationmin from '../assets/educationmin.png'
// import ic_up_quotes from '../assets/education.png'
import BottomSheet from 'reanimated-bottom-sheet'
import msgmin from '../assets/msgmin.png'
import flashmin from '../assets/flashmin.png'
import ic_reswipemin from '../assets/ic_reswipemin.png'
import william from '../assets/william.jpg'
import man1 from '../assets/man1.jpg'
import cigaretemin from '../assets/cigaretemin.png'
import * as Progress from 'react-native-progress';
import Slider from '@react-native-community/slider';

// import { TabView, SceneMap } from 'react-native-tab-view';
// const FirstRoute = () => (
//   <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
// );
 
// const SecondRoute = () => (
//   <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
// );
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
export default class Discover extends React.Component{
// state = {
//     index: 0,
//     routes: [
//       { key: 'first', title: 'First' },
//       { key: 'second', title: 'Second' },
//     ],
//   };
  constructor(props) {
    super(props);
  //  initState = 
     this.state = {
        search:'Discover',
        discover:'No',
        timeline:'No',
        timeline:'No', 
        whichpreference:'No',
        sliderValue: 15,
        sliderValue2:30  
    };
     //  this.handlerButtonOnClick = this.handlerButtonOnClick.bind(this);

  }

  handlerButtonOnClick(tmp1){
       

  this.setState({
    search: tmp1
 });
  
  }
 
 
  navigateToMessage = () =>
  {
   this.props.navigation.navigate('msglist');
  }
  navigateToEdit= () =>
  {
   this.props.navigation.navigate('Editprodile');
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
       </LinearGradient>):   
                    }
  </TouchableOpacity> */}
           <Text style={styles.straighttext}>Straight   </Text>
               <Text style={styles.straighttext}>Gay   </Text>  
                  <Text style={styles.straighttext}>Bisexual</Text> 
    </LinearGradient>

    </View>
<View style={{flexDirection:'row'}}>
  <Text style={styles.fontstyle}>Show People within </Text> 
    <Text style={{color:'white',marginTop:8,left:8,fontSize:15,fontFamily:'FontAwesome'}}>79 km </Text> 
   </View>
    <View style={{justifyContent:'center', flexDirection:'row', padding:15}}>
     {/* <LinearGradient style={{flexDirection:'row',width:'80%',justifyContent:'center',height:10,borderRadius:50}}
       
       colors={['#dcc642', '#896100', '#f2eb80']}  >
    </LinearGradient> */}
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

    </View>
    
  <View style={{flexDirection:'row'}}>
  <Text style={styles.fontstyle}>Age limit</Text> 
    <Text style={{color:'white',marginTop:8,left:8,fontSize:15,fontFamily:'FontAwesome'}}>28 years </Text> 
   </View>
    <View style={{justifyContent:'center', flexDirection:'row', padding:15}}>
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
     {/* <LinearGradient style={{flexDirection:'row',width:'80%',justifyContent:'center',height:10,borderRadius:50}}
       
       colors={['#dcc642', '#896100', '#f2eb80']}  >
    </LinearGradient> */}
    </View>
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
  <Text style={{fontFamily:'FontAwesome',fontSize:15,color:'white',fontSize:15,fontFamily:'FontAwesome'}}>Term of use</Text> 
                      
  <Text style={{fontFamily:'FontAwesome',fontSize:15,color:'white',marginTop:10,fontSize:15,fontFamily:'FontAwesome'}}>Privacy policy</Text> 
    <Text style={{fontFamily:'FontAwesome',fontSize:15,color:'white',marginTop:10,fontSize:15,fontFamily:'FontAwesome'}}> Get support</Text> 
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

<View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <View style={{flex:1,flexDirection:'row',marginLeft:50}}>
          <Image source={ic_reswipemin}style={{width:30,height:30} } />
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
            <Image source={msgmin} style={{width:30,height:30} } />
            </View>
            <View style={{flex:1,flexDirection:'row',}}>
            <Image source={flashmin} style={{width:30,height:30,} } />
          </View>
          </View>
  
      {/* <View style={styles.panelHeader}>
        
        <View style={styles.panelHandle} />


              </View> */}
    </View>
  )
  render(){
    const elements = ['one', 'two', 'three'];
  var  istimeline = false;
  var  isdiscover = false;
  var issearch = false;
  var ispreference= false;
  var gay= false;
  var bisexual= false;
    if(this.state.search == 'Timeline')
    {
      istimeline = true;
    }
    else if(this.state.search == 'Discover')
    {
      isdiscover = true;
    }
    if(this.state.search == 'search')
    {
      issearch = true;
    }
    if(this.state.whichpreference == 'Straight'){
         ispreference = true;
       }
       else if(this.state.whichpreference == 'Gay'){
         gay = true;
       }else if(this.state.whichpreference == 'Bisexual'){
         bisexual = true
       }
    return (

<View style={{ flex: 1 }}>
<View style={{flex:8,marginTop:70,zIndex:2}} >
{/* <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      /> */}
      <CardStack
        style={styles.content}
        
        renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>No more cards :(</Text>}
        ref={swiper => {
          this.swiper = swiper
        }}

        onSwiped={() => console.log('onSwiped')}
        onSwipedLeft={() => console.log('onSwipedLeft')}
        
      >
        <Card style={[styles.card, styles.card1]}>
       

        <ImageBackground
 source={william} style={styles.imgviewcontainercard} blurRadius={2}  />
<Image
 source={man1} style={{flex:1,height:150,width:150,borderWidth:1,borderRadius:100,position:'absolute',marginTop:60,marginLeft:90}}  />
        <View style={styles.imgviewcontainercard1}>
<Image
 source={marsmin} style={styles.searchimage1  } />
<View style={{borderLeftWidth:1,borderLeftColor:'white',height:25,marginTop:5}}/>
        <Text style={styles.Txtdiscoverstraight}>Straight </Text>
        <View style={{borderLeftWidth:1,borderLeftColor:'white',height:25,marginTop:5}}/>   
        <Text style={styles.Txtdiscoversingle}>Single</Text>
  <View style={{borderLeftWidth:1,borderLeftColor:'white',height:25,marginTop:5}}/>
        <Text style={styles.Txtdiscoverstraight}>85Km</Text>
</View>
<ScrollView style={styles.scrollviewcontainer}  showsVerticalScrollIndicator={false}>
        <Text style={{fontFamily:'FontAwesome',fontSize:15,textAlign:'center', color:'black',marginTop:10}}>Ritvik Sexsena</Text>
        <Text style={{fontFamily:'FontAwesome',fontSize:15,textAlign:'center', color:'black',marginTop:20,fontSize:20}}>CEO</Text>
        <View style={{flex:1,marginTop:10,alignItems:'center',justifyContent:'space-evenly'}}>
        
        <Progress.Bar progress={0.5} width={300} color="#ded776" height={20} borderRadius={50}	 />
        </View>

        <View style={styles.scrollviewcontainercard}>
<Text style={styles.Txtoctomber}>5 Oct</Text>
<View style={{borderLeftWidth:1,borderLeftColor:'black',height:30,marginTop:5}}/>
        <Text style={styles.Txtpune}>Pune </Text>
        <View style={{borderLeftWidth:1,borderLeftColor:'black',height:30,marginTop:5}}/>  
        <Text style={styles.Txtpune}>5.11</Text>
  {/*<Image source={directional} style={styles.compassimage  } />*/}
  <View style={{borderLeftWidth:1,borderLeftColor:'black',height:30,marginTop:5}}/>
        <Text style={styles.Txtpune}>50K+</Text>
</View>

<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',marginTop:-70,fontSize:15}}>Hindi,English,French</Text>
<Image source={soundmin} style={styles.soundimage  } />
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15}}>
"2 indivisual with same passion makes me happy "</Text>
<View style={{flexDirection:'row'}}>
<Image source={lovelymin} style={{height:20,width:20,marginLeft:60,marginTop:6}} />
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginTop:5,
borderBottomColor:'#dcc642',marginLeft:10}}>
Looking for serious relationship.</Text>
</View>
<Text style={{color:'black', 
borderBottomWidth:2,borderBottomColor:'#dcc642',
}}> </Text>
<View style={{flexDirection:'row'}}>
<Image source={coffeemin} style={{height:20,width:20,marginLeft:70,marginTop:6}} />
  <Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginTop:10,
  borderBottomColor:'#dcc642',marginLeft:15}}>Prefer to meet over coffee </Text>
</View>
<Text style={{color:'black', 
borderBottomWidth:2,borderBottomColor:'#dcc642',
}}> </Text>
<View style={{flexDirection:'row'}}>
<Image source={educationmin} style={{height:25,width:30,marginLeft:30,marginTop:6}} />

{/*<View style={{flexDirection:'row',borderBottomWidth:2,borderBottomColor:'#dcc642',marginTop:10}}>*/}
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginLeft:5,marginTop:8}}>

Bteck</Text>
<Image source={bodymin} style={{height:25,width:25,marginLeft:70,marginTop:5}} />

<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginLeft:5,marginTop:6}}>Average, Brown</Text>

</View>
<Text style={{color:'black', 
borderBottomWidth:2,borderBottomColor:'#dcc642',
}}> </Text>

<View style={{flexDirection:'row'}}>
<Image source={placemin} style={{height:25,width:25,marginLeft:30,marginTop:6}} />

{/*<View style={{flexDirection:'row',borderBottomWidth:2,borderBottomColor:'#dcc642',marginTop:10}}>*/}
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginLeft:5,marginTop:9}}>

Leaving with friends</Text>
<View style={{flex:1, flexDirection:'row'}}>
<Image source={glassmin} style={{height:25,width:25,marginTop:6}} />
<Image source={cigaretemin} style={{position:'absolute',height:20,width:20,marginTop:12,resizeMode:'contain',flexDirection:'row',marginLeft:5}} />
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginTop:6}}>Ocassionally</Text>
</View>
</View>
<View style={{flexDirection:'row'}}>
<Image source={ic_linked_inmin} style={{height:40,width:40,marginLeft:110,marginTop:6,justifyContent:'center'}} />
<Image source={ic_cameramin} style={{height:40,width:40,marginLeft:30,marginTop:6}} />
</View>
<Text style={{textAlign:'center', fontSize:13,marginTop:6}}> Report this User</Text>

    </ScrollView>
        </Card>
        <Card style={[styles.card, styles.card1]}>
        <View style={styles.imgviewcontainercard}>
<Image
 source={marsmin} style={styles.searchimage1  } />
<View style={{borderLeftWidth:1,borderLeftColor:'white',height:30,marginTop:25}}/>
        <Text style={styles.Txtdiscoverstraight}>Straight </Text>
        <View style={{borderLeftWidth:1,borderLeftColor:'white',height:30,marginTop:25}}/>   
        <Text style={styles.Txtdiscoversingle}>Single</Text>
  <View style={{borderLeftWidth:1,borderLeftColor:'white',height:30,marginTop:25}}/>
        <Text style={styles.Txtdiscoverstraight}>85Km</Text>
</View>

<ScrollView style={styles.scrollviewcontainer}>
        <Text style={{fontFamily:'FontAwesome',fontSize:15,textAlign:'center', color:'black',marginTop:10}}>Ritvik Sexsena</Text>
        <Text style={{fontFamily:'FontAwesome',fontSize:15,textAlign:'center', color:'black',marginTop:20,fontSize:20}}>CEO</Text>

        <View style={styles.scrollviewcontainercard}>
<Text style={styles.Txtoctomber}>5 Oct</Text>
<View style={{borderLeftWidth:1,borderLeftColor:'black',height:30,marginTop:25}}/>
        <Text style={styles.Txtpune}>Pune </Text>
        <View style={{borderLeftWidth:1,borderLeftColor:'black',height:30,marginTop:25}}/> 
        <Text style={styles.Txtpune}>5.11</Text>
  {/*<Image source={directional} style={styles.compassimage  } />*/}
  <View style={{borderLeftWidth:1,borderLeftColor:'black',height:30,marginTop:25}}/>
        <Text style={styles.Txtpune}>50K+</Text>
</View>
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',marginTop:-70,fontSize:15}}>Hindi,English,French</Text>
<Image source={soundmin} style={styles.soundimage  } />
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15}}>
"2 indivisual with same passion makes me happy "</Text>
<View style={{flexDirection:'row'}}>
<Image source={lovelymin} style={{height:20,width:20,marginLeft:60,marginTop:6}} />
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginTop:5,
borderBottomColor:'#dcc642',marginLeft:10}}>
Looking for serious relationship.</Text>
</View>
<Text style={{color:'black', 
borderBottomWidth:2,borderBottomColor:'#dcc642',
}}> </Text>

<View style={{flexDirection:'row'}}>
<Image source={coffeemin} style={{height:20,width:20,marginLeft:70,marginTop:6}} />
  <Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginTop:10,
  borderBottomColor:'#dcc642',marginLeft:15}}>Prefer to meet over coffee </Text>
</View>
<Text style={{color:'black', 
borderBottomWidth:2,borderBottomColor:'#dcc642',
}}> </Text>
<View style={{flexDirection:'row'}}>
<Image source={educationmin} style={{height:25,width:30,marginLeft:30,marginTop:6}} />
{/*<View style={{flexDirection:'row',borderBottomWidth:2,borderBottomColor:'#dcc642',marginTop:10}}>*/}
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginLeft:5,marginTop:8}}>

Bteck</Text>
<Image source={bodymin} style={{height:25,width:25,marginLeft:70,marginTop:5}} />

<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginLeft:5,marginTop:6}}>Average, Brown</Text>

</View>
<Text style={{color:'black', 
borderBottomWidth:2,borderBottomColor:'#dcc642',
}}> </Text>

<View style={{flexDirection:'row'}}>
<Image source={placemin} style={{height:25,width:25,marginLeft:30,marginTop:6}} />

{/*<View style={{flexDirection:'row',borderBottomWidth:2,borderBottomColor:'#dcc642',marginTop:10}}>*/}
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginLeft:5,marginTop:9}}>

Leaving with friends</Text>
<Image source={glassmin} style={{height:25,width:25,marginTop:6}} />
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginTop:6}}>Ocassionally</Text>
</View>
<View style={{flexDirection:'row'}}>
<Image source={ic_linked_inmin} style={{height:40,width:40,marginLeft:110,marginTop:6,justifyContent:'center'}} />
<Image source={ic_cameramin} style={{height:40,width:40,marginLeft:30,marginTop:6}} />
</View>
<Text style={{textAlign:'center', fontSize:13,marginTop:6}}> Report this User</Text>

    </ScrollView>
        </Card>
        <Card style={[styles.card, styles.card1]}>
      
        <View style={styles.imgviewcontainercard}>
<Image
 source={marsmin} style={styles.searchimage1  } />
<View style={{borderLeftWidth:1,borderLeftColor:'white',height:30,marginTop:25}}/>
        <Text style={styles.Txtdiscoverstraight}>Straight </Text>
        <View style={{borderLeftWidth:1,borderLeftColor:'white',height:30,marginTop:25}}/> 
        <Text style={styles.Txtdiscoversingle}>Single</Text>
  <View style={{borderLeftWidth:1,borderLeftColor:'white',height:30,marginTop:25}}/>
        <Text style={styles.Txtdiscoverstraight}>85Km</Text>
</View>

<ScrollView style={styles.scrollviewcontainer}>
        <Text style={{fontFamily:'FontAwesome',fontSize:15,textAlign:'center', color:'black',marginTop:10}}>Ritvik Sexsena</Text>
        <Text style={{fontFamily:'FontAwesome',fontSize:15,textAlign:'center', color:'black',marginTop:20,fontSize:20}}>CEO</Text>

        <View style={styles.scrollviewcontainercard}>
<Text style={styles.Txtoctomber}>5 Oct</Text>
<View style={{borderLeftWidth:1,borderLeftColor:'black',height:30,marginTop:25}}/>
        <Text style={styles.Txtpune}>Pune </Text>
        <View style={{borderLeftWidth:1,borderLeftColor:'black',height:30,marginTop:25}}/>
        <Text style={styles.Txtpune}>5.11</Text>
  {/*<Image source={directional} style={styles.compassimage  } />*/}
  <View style={{borderLeftWidth:1,borderLeftColor:'black',height:30,marginTop:25}}/>
        <Text style={styles.Txtpune}>50K+</Text>
</View>
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',marginTop:-70,fontSize:15}}>Hindi,English,French</Text>
<Image source={soundmin} style={styles.soundimage  } />
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15}}>
"2 indivisual with same passion makes me happy "</Text>
<View style={{flexDirection:'row'}}>
<Image source={lovelymin} style={{height:20,width:20,marginLeft:60,marginTop:6}} />
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginTop:5,
borderBottomColor:'#dcc642',marginLeft:10}}>

Looking for serious relationship.</Text>
</View>
<Text style={{color:'black', 
borderBottomWidth:2,borderBottomColor:'#dcc642',
}}> </Text>

<View style={{flexDirection:'row'}}>
<Image source={coffeemin} style={{height:20,width:20,marginLeft:70,marginTop:6}} />
  <Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginTop:10,
  borderBottomColor:'#dcc642',marginLeft:15}}>Prefer to meet over coffee </Text>
</View>
<Text style={{color:'black', 
borderBottomWidth:2,borderBottomColor:'#dcc642',
}}> </Text>
<View style={{flexDirection:'row'}}>
<Image source={educationmin} style={{height:25,width:30,marginLeft:30,marginTop:6}} />

{/*<View style={{flexDirection:'row',borderBottomWidth:2,borderBottomColor:'#dcc642',marginTop:10}}>*/}
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginLeft:5,marginTop:8}}>

Bteck</Text>
<Image source={bodymin} style={{height:25,width:25,marginLeft:70,marginTop:5}} />

<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginLeft:5,marginTop:6}}>Average, Brown</Text>

</View>
<Text style={{color:'black', 
borderBottomWidth:2,borderBottomColor:'#dcc642',
}}> </Text>

<View style={{flexDirection:'row'}}>
<Image source={placemin} style={{height:25,width:25,marginLeft:30,marginTop:6}} />

{/*<View style={{flexDirection:'row',borderBottomWidth:2,borderBottomColor:'#dcc642',marginTop:10}}>*/}
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginLeft:5,marginTop:9}}>

Leaving with friends</Text>
<Image source={glassmin} style={{height:25,width:25,marginTop:6}} />
<Image source={cigaretemin} style={{height:25,width:25,marginTop:6}} />
<Text style={{fontFamily:'FontAwesome',color:'black', textAlign:'center',fontSize:15,marginTop:6}}>Ocassionally</Text>
</View>
<View style={{flexDirection:'row'}}>
<Image source={ic_linked_inmin} style={{height:40,width:40,marginLeft:110,marginTop:6,justifyContent:'center'}} />
<Image source={ic_cameramin} style={{height:40,width:40,marginLeft:30,marginTop:6}} />
</View>
<Text style={{textAlign:'center', fontSize:13,marginTop:6}}> Report this User</Text>

    </ScrollView>
        </Card>
        </CardStack>
        </View>
      <View style={{ flex: 1,
    backgroundColor: '#F5FCFF',zIndex:50}}>
        <BottomSheet
          snapPoints = {[50, 300, 50]}
          renderContent = {this.renderInner}
          renderHeader = {this.renderHeader}
      styles = {{zIndex:50}}
       
        />
       </View>
    </View>
  );
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content:{
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: '100%',
    height: 500,
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
    
    position: 'absolute',
    transform: [{'translate': [0,0, 1]}]
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
  // rotatingimage:{
  //   //flex:1,
  //   height:40,
  //   width:40,
  // },
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
    //paddingLeft:20,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft:20,
    marginRight:20,
  },
  searchimage1:{
    height:20,
    width:'7%',
    marginTop:5,
    marginLeft:15,
    marginRight:15,
    
    
  },
  imgviewcontainer:{
    flexDirection:'row',
    paddingLeft:'5%',
   height:60,
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
    fontSize:15,
    fontFamily:'FontAwesome',
    flex:1,
    marginTop:5,
     marginLeft:10,
    marginRight:12,
  },
  Txtpune:{
    color:'black',
    fontSize:18,
    flex:1,
    marginTop:5,
     marginLeft:10,
    marginRight:12,
  },
  Txtdiscoversingle:{
    color:'white',
    fontSize:15,
    fontFamily:'FontAwesome',
    flex:1,
    marginTop:5,
     marginLeft:7,
    marginRight:2,
  },
  Txtoctomber:{
    color:'black',
    fontSize:18,
    flex:1,
    marginTop:5,
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

   imgviewcontainercard1:{
    flexDirection:'row',
    paddingLeft:'5%',
    marginBottom:80,
    flex:1,
    position:'absolute'
  },
  imgviewcontainercard:{
    height:300,
    width:340,
    flexDirection:'row',
    paddingLeft:'5%',
    marginBottom:80,
    flex:1,  },
  scrollviewcontainercard:{
    marginTop:5,
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
    shadowColor: '#000000',
    paddingTop: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 30,
    borderRadius: 4,
    backgroundColor: '#00000040',
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
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
  photo: {
    width: '100%',
    height: 225,
    marginTop: 30,
  },
  fontstyle:{
  fontFamily:'FontAwesome',color:'white',fontSize:18,marginTop:5
},
straighttext:{
    textAlign:'left',
    fontWeight:'bold',
    textAlign:'center',
    fontFamily:'FontAwesome',
    fontSize:15
  }
// scene: {
//     flex: 1,
//   },
});

