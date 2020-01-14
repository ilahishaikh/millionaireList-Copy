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
    Button,
    TextInput,
    Image,
    TouchableOpacity
    
    
  } from 'react-native';
  


import LinearGradient from 'react-native-linear-gradient';


//import MapView from 'react-native-maps'
class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            whichsex:'No',
            whichrealationship:'No',
            lookingfor:'No',
         
        };
        
             this.selectSex = this.selectSex.bind(this);
                      this.selectRealationship = this.selectRealationship.bind(this);
    
                       this.selectLookingFor = this.selectLookingFor.bind(this);
    
    
    
      }
      
      
      selectSex(tmp1)
      {
               
                this.setState({
           whichsex: tmp1
        });
      }
    
       selectRealationship(tmp1)
      {
              // alert(tmp1)
                this.setState({
           whichrealationship: tmp1
        });
      }
    
       selectLookingFor(tmp1)
      {
               //alert(tmp1)
                this.setState({
           lookingfor: tmp1
        });
      }
      showAlert = () =>
      {
     if (this.state.TextInputName  == undefined){ alert('Please Enter your name')} else if(this.state.whichsex=='No'){
       alert('Please Enter sexual orentation')
     }
     else if(this.state.whichsex=='No'){
       alert('Please Enter sexual orentation')
     }
     else if(this.state.whichrealationship=='No'){
       alert('Please Enter Relationship status')
     }
     else if(this.state.lookingfor=='No'){
       alert('Please Enter Looking for field')
     }
     
     else {this.props.navigation.navigate('LinkedLoginContainer'); }
      
      }
CheckTextInput = () => {
    //Handler for the Submit onPress
    if (this.state.TextInputName!= '') {
      //Check for the Name TextInput
      alert(this.state.TextInputName)
    } else {
      alert('Please Enter Name');
    }
  };
  
      render(){
     
       var isgay= false;
       var straight = false;
       var bisexual = false;
       var single = false;
       var inrealation=false;
       var Married=false;
       var seroiusrelationship=false;
       var casualhangout=false;
       var longterm=false;
       var inythingintresting=false;
       var Hookups=false;
       var Dating=false;
       var Friends=false;
       var Marriage=false;
       if(this.state.whichsex=='Gay'){
         isgay=true
       }
       else if(this.state.whichsex=='Straight'){
         straight=true
       }else if(this.state.whichsex=='Bisexual'){
         bisexual=true
       }
       
       
       
       
       
       if(this.state.whichrealationship=='Single'){
         single=true
       }else if(this.state.whichrealationship=='inrealation'){
         inrealation=true
       }else if(this.state.whichrealationship=='Married'){
         Married=true
       }
       
       
       
       if(this.state.lookingfor=='seroiusrelationship'){
         seroiusrelationship=true
       }else if(this.state.lookingfor=='casualhangout'){
         casualhangout=true
       }else if(this.state.lookingfor=='longterm'){
         longterm=true
       }else if(this.state.lookingfor=='inythingintresting'){
         inythingintresting=true
       }else if(this.state.lookingfor=='Hookups'){
         Hookups=true
       }else if(this.state.lookingfor=='Dating'){
         Dating=true
       }else if(this.state.lookingfor=='Friends'){
         Friends=true
       }else if(this.state.lookingfor=='Marriage'){
         Marriage=true
       }
       
       
       
       
       
         return(
       
            <View style={styles.container}>
               <ScrollView  style={{ width: '100%'}}  >
                     
                  <Text style={styles.TextStyle} >Select some Info to see who are </Text> 
                  <Text style={{color:'#ded776',fontSize: 18,fontFamily: 'FontAwesome',textAlign:"left",paddingLeft:"4%",
}} > there for you </Text>
                  <View style={styles.underlineview}></View>
                  <Text style={styles.Textwhatsname} >What's your name? </Text>

                  <TextInput  onChangeText={(TextInputName ) => this.setState({TextInputName })}
           style={styles.tntxtstyle}  placeholder="Enter your name"
               placeholderTextColor = "gray"  /> 



               
               <Text style={styles.Textwhatsname} >What's your sexual orentation? </Text>
       
               <View style={styles.container1} >
                       <TouchableOpacity   style={styles.buttonContainer} onPress={this.selectSex.bind(this,'Straight')} >
                      
                    {
                      straight?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>

              <Text style={styles.TextStyleorientSelect} > Straight </Text>
       </LinearGradient>
       ) :   <Text style={styles.TextStyleorient1} > Straight </Text>

                    }
                     
                    </TouchableOpacity>
                   {
                     isgay ?(<TouchableOpacity
                     style={styles.buttonContainer}
                      activeOpacity = { .5 }
                    
                       onPress={this.selectSex.bind(this,'Gay')}
                     >
       
                       <LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
              <Text style={styles.TextStyleorientSelect} > Gay </Text>
       </LinearGradient>
                    
                    </TouchableOpacity>):(<TouchableOpacity
                     style={styles.buttonContainer}
                      activeOpacity = { .5 }
                    
                       onPress={this.selectSex.bind(this,'Gay')}
                     >
       
                     
                    
                    <Text style={styles.TextStyleorient1}> Gay </Text>
                    </TouchableOpacity>)
                   }
                    
                    <TouchableOpacity
                     style={styles.buttonContainer}
                      activeOpacity = { .5 }
                      onPress={this.selectSex.bind(this,'Bisexual')}
                     >
                       {
                      bisexual?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
               <Text style={styles.TextStyleorientSelect}> Bisexual </Text>
       </LinearGradient>): <Text style={styles.TextStyleorient1}> Bisexual </Text>
                    }
       
                   
                    </TouchableOpacity>
                     </View>
                     <Text style={styles.Textwhatsname} >What's your relationship status?</Text>
                     <View style={styles.container1}>
                   
                       <TouchableOpacity   style={styles.buttonContainer} onPress={this.selectRealationship.bind(this,'Single')} >
                         {
                      single?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
              <Text style={styles.TextStyleorientSelect}> Single </Text>
       </LinearGradient>):<Text style={styles.TextStyleorient1}> Single </Text>
                    }
       
                    
                    </TouchableOpacity>
                 
       
                   
                      <TouchableOpacity   style={styles.buttonrelation} onPress={this.selectRealationship.bind(this,'inrealation')} >
                         {
                      inrealation?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
              <Text style={styles.TextStyleorientSelect}> In relationship </Text>
       </LinearGradient>):<Text style={styles.TextStyleorient1}> In relationship </Text>
                    }
                    
                    </TouchableOpacity>
       
       
                    <TouchableOpacity   style={styles.buttonContainer} onPress={this.selectRealationship.bind(this,'Married')} >
                         {
                      Married?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
              <Text style={styles.TextStyleorientSelect}> Married </Text>
       </LinearGradient>):<Text style={styles.TextStyleorient1}> Married </Text>
                    }
                    
                    </TouchableOpacity>
                     </View>
                     <Text style={styles.Textwhatsname} >Looking for?</Text>
       
                     <View style={styles.container1}>
                     <TouchableOpacity   style={styles.buttonContainer} onPress={this.selectLookingFor.bind(this,'seroiusrelationship')} >
                         {
                      seroiusrelationship?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
              <Text style={styles.TextStyleorientSelect}> Seroius relationship </Text>
       </LinearGradient>):<Text style={styles.TextStyleorient1}> Seroius relationship </Text>
                    }
                    
                    </TouchableOpacity>
                 
       
                   
                    <TouchableOpacity   style={styles.buttonContainer} onPress={this.selectLookingFor.bind(this,'casualhangout')} >
                         {
                      casualhangout?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
              <Text style={styles.TextStyleorientSelect}> Casual hangout </Text>
       </LinearGradient>):<Text style={styles.TextStyleorient1}> Casual hangout </Text>
                    }
                    
                    </TouchableOpacity>
                    
                     </View>
       
                     <View style={styles.container1}>
                    <TouchableOpacity   style={styles.buttonContainer} onPress={this.selectLookingFor.bind(this,'longterm')} >
                         {
                      longterm?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
              <Text style={styles.TextStyleorientSelect}> Long term relationship </Text>
       </LinearGradient>):<Text style={styles.TextStyleorient1}> Long term relationship </Text>
                    }
                    
                    </TouchableOpacity>
                 
       
       
                   
                  <TouchableOpacity   style={styles.buttonContainer} onPress={this.selectLookingFor.bind(this,'inythingintresting')} >
                         {
                      inythingintresting?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
              <Text style={styles.TextStyleorientSelect}> Anything Intresting </Text>
       </LinearGradient>):<Text style={styles.TextStyleorient1}> Anything Intresting </Text>
                    }
                    
                    </TouchableOpacity>
                    
                     </View>
       
                     <View style={styles.container1}>
                    <TouchableOpacity   style={styles.buttonContainer} onPress={this.selectLookingFor.bind(this,'Hookups')} >
                         {
                      Hookups?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
              <Text style={styles.TextStyleorientSelect}> Hookups </Text>
       </LinearGradient>):<Text style={styles.TextStyleorient1}> Hookups </Text>
                    }
                    
                    </TouchableOpacity>
                 
       
                   
                    <TouchableOpacity   style={styles.buttonContainer} onPress={this.selectLookingFor.bind(this,'Dating')} >
                         {
                      Dating?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
              <Text style={styles.TextStyleorientSelect}> Dating </Text>
       </LinearGradient>):<Text style={styles.TextStyleorient1}> Dating </Text>
                    }
                    
                    </TouchableOpacity>
                    
                     </View>
                     <View style={styles.container1}>
                    <TouchableOpacity   style={styles.buttonContainer} onPress={this.selectLookingFor.bind(this,'Friends')} >
                         {
                      Friends?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
              <Text style={styles.TextStyleorientSelect}> Friends </Text>
       </LinearGradient>):<Text style={styles.TextStyleorient1}> Friends </Text>
                    }
                    
                    </TouchableOpacity>
                 
       
                   
                  <TouchableOpacity   style={styles.buttonContainer} onPress={this.selectLookingFor.bind(this,'Marriage')} >
                         {
                      Marriage?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
              <Text style={styles.TextStyleorientSelect}> Marriage </Text>
       </LinearGradient>):<Text style={styles.TextStyleorient1}> Marriage </Text>
                    }
                    
                    </TouchableOpacity>
                    
                     </View>
                     <TouchableOpacity    onPress={this.showAlert} >

                     <LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradient1}>
             <Text style={{fontFamily:'FontAwesome',fontSize:15,margin:'15%',marginLeft:'3%'}}> Next </Text>
       
       </LinearGradient>
       
       </TouchableOpacity>
       
             </ScrollView>    
             </View>
           );
       
       };
       }
       
       const styles = StyleSheet.create({
         container:{
         flex: 1,
        
         backgroundColor: "black",
       
         },
           
       TextStyle:{
        color:'#ded776',
        marginTop:'10%',
        paddingLeft:"5%",
       
        fontSize: 18,
        fontFamily: 'FontAwesome',
        textAlign:"left",
             
           },
           Textwhatsname:{
             marginTop:10,
             padding:'1%',
             paddingLeft:'5%',
              color:'#ded776',
             fontSize:15,
           },
           tntxtstyle:{
             flex:1,
             alignItems: 'center',
             height:35,
             paddingLeft: 20,
             color:'gray',
             backgroundColor:'white',
             width:'90%',
             marginLeft:'5%',
             //marginRight:'10%',
             marginTop:20,
             borderRadius:50,
             //textAlign: 'center',
            
           },
           container1: {
               flex: 1,
              
               width:"100%",
               paddingLeft:"2%",
               paddingRight:"2%",
       
               flexDirection: 'row',
               
           },
           buttonContainer: {
               flex: 1,
               height:30,
               width:"30%",
               marginTop:10,
               justifyContent: 'center',
               alignItems: 'center',
              
              // padding:10,
               //paddingBottom:10,
               marginLeft:5,
               marginRight:5,
             
               borderRadius:50,
               backgroundColor:'white',
               alignItems:'center',
               //borderColor: '#ded776',
               borderWidth: 1,
              
               
       
           },
           TextStyleorient1:{
           textAlign:'center',
           alignItems:'center',
           justifyContent:'center',
           fontFamily:'FontAwesome',
           fontSize:12,
           //marginTop:4,
           color:'#A9A9A9',
         },

 TextStyleorientSelect:{
           textAlign:'center',
           alignItems:'center',
           justifyContent:'center',
           fontFamily:'FontAwesome',
           fontSize:12,
           //marginTop:4,
           color:'black',
         },

         TextStyleorient:{
           textAlign:'center',
           fontSize:12,
           //marginTop:1,
          
           color:'gray',
         },
        buttonrelation:{
               flex: 2,
               height:30,
               
               width:"30%",
               marginTop:10,
               paddingTop:10,
               paddingBottom:10,
               marginLeft:10,
               borderRadius:50,
               backgroundColor:'white',
               borderWidth: 1,
               justifyContent:'center',
               alignItems:'center',
        },
        linearGradient1:{
           flex:1,
           width:"30%",
           //alignItems:'center',
           //justifyContent:'center',

            height: 40,
           marginLeft:'35%',
            paddingLeft: 30,
            paddingRight: 5,
           borderRadius: 50,
         marginTop: "5%"
         },
         buttonText:{
          //textAlign:'center',
          padding:'8%'
         },
         txtlinearGradient:{
          /* flex:1,
           position:'absolute',
           height:30,
           width:"30%",
           marginLeft:13,
           alignItems:'center',
            //height: 40,
           //marginLeft:'35%',
            //paddingLeft: 30,
            //paddingRight: 0,
           borderRadius: 50,
         marginTop: 10,
         //backgroundColor:'#ded776'
       */
       
         flex: 1,
             position:'absolute',
              color:'black',
               height:30,
               width:"100%",
               marginTop:10,
               justifyContent: 'center',
               alignItems: 'center',
               borderRadius:50,
               alignItems:'center',
              backgroundColor:'black'
               
         },
         buttonText:{
          //textAlign:'center',
          padding:'10%'
         },
         underlineview:{
       
            height:2,
            marginLeft:20,
            marginRight:10,
            marginTop:10,
            backgroundColor:'#ded776',
            
         
          },
          buttonrelation:{
              flex: 1,
               height:30,
               width:"40%",
               marginTop:10,
               justifyContent: 'center',
               alignItems: 'center',
              
              // padding:10,
               //paddingBottom:10,
               marginLeft:5,
               marginRight:5,
             
               borderRadius:50,
               backgroundColor:'white',
               
              
               borderWidth: 1,

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
)(Step2);
