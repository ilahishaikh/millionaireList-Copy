
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Switch
  
} from 'react-native';

import ic_messagemin from '../assets/ic_messagemin.png'
import user_profilemin from '../assets/user_profilemin.png'
import LinearGradient from 'react-native-linear-gradient';
import searchgolden from '../assets/searchgolden.png'
import directional from '../assets/directional.png'
import msgmin from '../assets/msgmin.png'
import flashmin from '../assets/flashmin.png'
import ic_reswipemin from '../assets/ic_reswipemin.png'
import Discover from './Discover'
import Search from './Search'
import Timeline from './Timeline'



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
export default class Home extends React.Component{
 
 
  constructor(props) {
    super(props);
  //  initState = 
     this.state = {
        search:'Discover',
        discover:'No',
        timeline:'No',
        timeline:'No',  
        SwitchValue:false 
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
     
  renderInner = () => (
    <View style={styles.panel}>
      
<View style={{flex:1,justifyContent:'center'}}>
  <LinearGradient
       start={{ x: 0.1, y: 0.1 }} end={{ x: 0.5, y: 0.5 }}
       
       colors={['#dcc642', '#896100', '#f2eb80']}  >
<View style={{justifyContent:'center', padding:15}}>

          <Text style={styles.fontstyle}>Sexual Preferences </Text>  
    <View style={{justifyContent:'center', flexDirection:'row'}}>
     <LinearGradient style={{flexDirection:'row',width:'100%',justifyContent:'center',height:30,borderRadius:50}}
       
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
  <Text style={styles.fontstyle}>Show my </Text> 
                      <Switch style={{left:180}}
                    onValueChange={(value) => this.setState({SwitchValue: value})}
      value={this.state.SwitchValue} /> 

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
    return (

<View style={{ flex: 1 }}>
<LinearGradient 
       start={{ x: 0.1, y: 0.1 }} end={{ x: 0.5, y: 0.5 }}
       
       colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradient1}>

      <TouchableOpacity
                  
                   activeOpacity = { .5 }
                   onPress={ this.navigateToEdit }
                  > 
  <Image source={user_profilemin} style={styles.tickimage1  } />
  </TouchableOpacity>
  <Text style={styles.texaccount2}> 
  your profile</Text>
  <View style={styles.rightcontainer}>
  <TouchableOpacity
                  
                   activeOpacity = { .5 }
                   onPress={ this.navigateToEdit }
                  > 
  <Image source={ic_messagemin} style={styles.tickimage2  } />
  </TouchableOpacity>
</View>
</LinearGradient>
<View style={styles.imgviewcontainer}>
<TouchableOpacity
         
          activeOpacity = { .5 }
          onPress={this.handlerButtonOnClick.bind(this,'search')}
       >

<Image source={searchgolden} style={styles.searchimage  } />
{issearch ?(
           <Text style={{backgroundColor:'#dcc642',width:55,height:5,marginTop:8,marginLeft:7}}> </Text>) :null}
 

</TouchableOpacity>


<TouchableOpacity
         
          activeOpacity = { .5 }
          onPress={this.handlerButtonOnClick.bind(this,'Discover')}
       >
 
        <Text style={styles.Txtdiscover}>Discover </Text>

      {isdiscover ?(
           <Text style={{backgroundColor:'#dcc642',width:60,height:5,marginTop:3,marginLeft:32}}> </Text>) :null}
   
            
  </TouchableOpacity>
  <TouchableOpacity
         
         activeOpacity = { .5 }
         onPress={this.handlerButtonOnClick.bind(this,'Timeline')}
      >
 
        <Text style={styles.Txtdiscover}>Timline</Text>

        {istimeline ?(
           <Text style={{backgroundColor:'#dcc642',width:60,height:5,marginTop:8,marginLeft:30}}> </Text>) :null}
 
  </TouchableOpacity>
  <TouchableOpacity
         
         activeOpacity = { .5 }
         onPress={this.handlerButtonOnClick.bind(this,'Compass')}
      >
 
  <Image source={directional} style={styles.compassimage  } />
  </TouchableOpacity>
   {/* <Text style={{backgroundColor:'#dcc642',width:50,height:5}}> </Text>
{isdiscover ?(
           <Text style={{backgroundColor:'#dcc642',width:80,height:5,marginTop:8,}}> </Text>) :null}
  */}
</View>



    
{isdiscover ?(
           <Discover onChange={this.showAlert} />) :null}

{issearch ?(
           <Search  />) :null}

{istimeline ?(
           <Timeline  />) :null}
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
  rotatingimage:{
    //flex:1,
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
    //flex: 1,
    flexDirection:'row',
    height:60,
    
  },
  tickimage1:{
    height:40,
    width:40,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
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
    marginTop:20,
    fontFamily:'FontAwesome',
    fontSize:15,
    paddingRight: 15,
    marginRight:20,
    color:'white'
  },
  tickimage2:{
   height:30,
    width:40,
    marginTop:5,
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
    shadowColor: '#000000',
    paddingTop: 20,
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
  

});

