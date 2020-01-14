import { connect } from "react-redux";
import React, { Fragment, Component } from 'react';
import { Pages} from 'react-native-pages';
import MapView ,{PROVIDER_GOOGLE}from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid} from 'react-native';
import Geocoder from 'react-native-geocoding';
import ImagePicker from 'react-native-image-picker';
import CalendarPicker from 'react-native-calendar-picker';
import RNGooglePlaces from 'react-native-google-places';
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
  ImageBackground,
  Image,
} from 'react-native';
import { List, ListItem } from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import imgmin from '../assets/imgmin.png';
import add from '../assets/add.png';
import annual_incomemin from '../assets/annual_incomemin.png';
import poof_id_with_customer1min from '../assets/poof_id_with_customer1min.png';
import calendermin from '../assets/calendermin.png';
import locationmin from '../assets/locationmin.png';
import error from '../assets/error.png';
import currentlocationmin from '../assets/currentlocationmin.png';
import RBSheet from "react-native-raw-bottom-sheet";
import YourOwnComponent from './YourOwnComponent'
import { LinearTextGradient } from "react-native-text-gradient";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';
import LocationView from "react-native-location-view";


const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

var a=0;
class LinkedLoginContainer extends React.Component {
  // newarr=[];
  // imguri=[];
  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => {
        console.log(place);
        // place represents user's selection from the
        // suggestions and it is a simplified Google Place object.
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }
  // openSearchModal1() {
  //   RNGooglePlaces.openAutocompleteModal({
  //           initialQuery: 'vestar', 
  //           locationRestriction: {
  //               latitudeSW: 6.3670553, 
  //               longitudeSW: 2.7062895, 
  //               latitudeNE: 6.6967964, 
  //               longitudeNE: 4.351055
  //           },
  //           country: 'NG',
  //           type: 'establishment'
  //       }, ['placeID', 'location', 'name', 'address', 'types', 'openingHours', 'plusCode', 'rating', 'userRatingsTotal', 'viewport']
  //   )
  //   .then((place) => {
  //       console.log(place);
  //   })
  //   .catch(error => console.log(error.message));
  // }
state = {
 
  };
    
 
  constructor(props) {
     //var a=0;
     Geocoder.init("AIzaSyAm5VhZOcy9rnM96etlOjeAxrFsIz9RMCg");
    super(props);
    this.state = {
     
      filepath: {
        data: '',
        uri: ''
      },
      fileData: '',

     // myArray: [],
      fileUri: '',
            fileUri1: '',
            fileUri2:'',
            fileUri3:'',
            fileUri4:'',
            fileuri11:'',
            fileuri12:'',
            fileuri13:'',
            fileuri14:'',
            fileuri15:'',
            fileuri16:'',

           
    };
    this.state = {
      //latitude:0,
      //longitude:0,
      //error:null,
      
      isDateTimePickerVisible: false,
      selectedDate: "Select date",
      selectincome:'Select income',
      selectnext:'Next'
    };
    this.selectText = this.selectText.bind(this);
  }
  componentDidMount(){
   if(Platform.OS === 'android'){
      this.requestLocationPermission()
   }else{
      this._getCurrentLocation()
   }
}

async requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Location Permission',
          'message': 'MyMapApp needs access to your location'
        }
        )

       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
           this._getCurrentLocation()
           console.log("Location permission granted")
       } else {
           console.log("Location permission denied")
       }
    } catch (err) {
       console.warn(err)
    }
}
_getCurrentLocation = () =>{
        let geoOptions = {  
            enableHighAccuracy:false,  
            timeOut: 50000, 
            //20 second  
          //  maximumAge: 1000 //1 second  
        };  
        this.setState({ready:false, error: null });  
        Geolocation.getCurrentPosition( this.geoSuccess,  
            this.geoFailure,  
            geoOptions); 
}
    geoSuccess = (position) => {  
        console.log(position.coords.latitude);  
                console.log(position.coords.longitude);  

        latitude: position.coords.latitude
                    longitude: position.coords.longitude

                    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' +18.4679343 + ',' + 73.8583539 + '&key=' +'AIzaSyAm5VhZOcy9rnM96etlOjeAxrFsIz9RMCg')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
})
  Geocoder.from(18.4679343, 73.8583539)
        .then(json => {
            var addressComponent = json.results[0].address_components[0];
            console.log(addressComponent);
        })
        .catch(error => console.warn(error));
        this.setState({  
            ready:true,  
            where: {lat: position.coords.latitude,lng:position.coords.longitude }  ,
            region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0422,
                }
        })  
    }  
    geoFailure = (err) => {  
        this.setState({error: err.message});  
    }  
   selectText(tmp1)
      {
               
                this.setState({
           selectincome: tmp1
        });
      }
      
 
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };
 
  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
    
  };
 
  handleDatePicked = (date) => {
    //console.log("A date has been picked: ", date);
    this.setState({ selectedDate: date.toString() });
    selectedDate: moment(date).format('mm,dd,yy')
    this.hideDateTimePicker();
  };
  

 chooseImage = () => {
    let options = {
      title: 'Select from gallery and capture',
      customButtons: [
        { name: 'customOptionKey', title: 'Camera' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));s
        console.log('response', JSON.stringify(response.uri));
       
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
          
        });
      }
    });
  }

    chooseImage1 = () => {
    let options = {
      title: 'Select from gallery and capture',
      customButtons: [
        { name: 'customOptionKey', title: 'Camera' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri1: response.uri
        });
      }
    });
  }
  chooseImage2 = () => {
    let options = {
      title: 'Select from gallery and capture',
      customButtons: [
        { name: 'customOptionKey', title: 'Camera' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri2: response.uri
        });
      }
    });
  }

  chooseImage3 = () => {
    let options = {
      title: 'Select from gallery and capture',
      customButtons: [
        { name: 'customOptionKey', title: 'Camera' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri3: response.uri
        });
      }
    });
  }

chooseImage4 = () => {
    let options = {
      title: 'Select from gallery and capture',
      customButtons: [
        { name: 'customOptionKey', title: 'Camera' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
       
        if(a==0){
          
          this.setState({

          filePath: response,
          fileData: response.data,
          fileuri11: response.uri,
          // myArray: [this.myArray, ''], 
                   
        });
        // let { myArray } = this.state;
        //       myArray = [...myArray, response.uri];

        //imguri= [response.uri];
       // console.log("myArray0="+myArray);
       // newarr=[...imguri]
       //console.log("fileurl="+newarr.length);
        console.log("count0="+a);
        a++;
        }
        else if(a==1){
         
       if(this.state.fileuri12==null)
       {
         this.setState({
          filePath: response,
          fileData: response.data,
          fileuri12: this.state.fileuri11,
          fileuri11: response.uri,
          //myArray: [this.myArray, response.uri], 
     
        });
       }
        
      a++;
        }
        else if(a==2){
           if(this.state.fileuri13==null)
       {
         this.setState({
          filePath: response,
          fileData: response.data,
          fileuri13: this.state.fileuri12,
          fileuri12: this.state.fileuri11,
          fileuri11:response.uri,
          
        });
       }
        a++;
       }
       else if(a==3){
           if(this.state.fileuri14==null)
       {
         this.setState({
          filePath: response,
          fileData: response.data,
          fileuri14:this.state.fileuri13,
          fileuri13: this.state.fileuri12,
          fileuri12: this.state.fileuri11,
          fileuri11:response.uri,
          
        });
       }
        a++;
       }
       else if(a==4){
           if(this.state.fileuri15==null)
       {
         this.setState({
          filePath: response,
          fileData: response.data,
          fileuri15:this.state.fileuri14,
          fileuri14:this.state.fileuri13,
          fileuri13: this.state.fileuri12,
          fileuri12: this.state.fileuri11,
          fileuri11:response.uri,
          
        });
       // a++;
       }
        a++;
        }
        else{
          this.setState({
          filePath: response,
          fileData: response.data,
          fileuri16:this.state.fileuri15,
          fileuri15:this.state.fileuri14,
          fileuri14:this.state.fileuri13,
          fileuri13: this.state.fileuri12,
          fileuri12: this.state.fileuri11,
          fileuri11:response.uri,
          
        });
        }
      }
    });
  }    


  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });

  }

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });

  }

  renderFileData() {
    if (this.state.fileData) {
      {/*return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
        style={styles.images}
      />
    } else {
      return <Image source={require('./assets/poof_id_with_customer1min.png')}
        style={styles.images}
      />*/}
    
  }
  }

 renderFileData1() {
    if (this.state.fileData) {
      {/*return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
        style={styles.images}
      />
    } else {
      return <Image source={require('./assets/poof_id_with_customer1min.png')}
        style={styles.images}
      />*/}
    
  }
  }
  renderFileData2() {
    if (this.state.fileData2) {
      {/*return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
        style={styles.images}
      />
    } else {
      return <Image source={require('./assets/poof_id_with_customer1min.png')}
        style={styles.images}
      />*/}
    
  }
  }

renderFileData3() {
    if (this.state.fileData) {
      {/*return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
        style={styles.images}
      />
    } else {
      return <Image source={require('./assets/poof_id_with_customer1min.png')}
        style={styles.images}
      />*/}
    
  }
  }

renderFileData4() {
    if (this.state.fileData) {
      {/*return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
        style={styles.images}
      />
    } else {
      return <Image source={require('./assets/poof_id_with_customer1min.png')}
        style={styles.images}
      />*/}
    
  }
  }


renderFileUri() {
    if (this.state.fileUri) {
      return <Image
        source={{ uri: this.state.fileUri }}
        style={styles.images}
      />
    } else {
      return <Image
        source={require('../assets/imgmin.png')}
        style={styles.images}
      />
    }
  }


renderFileUri1() {
    if (this.state.fileUri1) {
      return <Image
        source={{ uri: this.state.fileUri1 }}
          style={styles.captures1}
      />
    } else {
      return <Image
        source={poof_id_with_customer1min}
         style={styles.captures1}
      />
    }
  }
  renderFileUri2() {
    if (this.state.fileUri2) {
      return <Image
        source={{ uri: this.state.fileUri2 }}
          style={styles.captures1}
      />
    } else {
      return <Image
        source={annual_incomemin}
         style={styles.captures1}
      />
    }
  }

renderFileUri3() {
    if (this.state.fileUri3) {
      return <Image
        source={{ uri: this.state.fileUri3 }}
          style={styles.captures1}
      />
    } else {
      return <Image
        source={poof_id_with_customer1min}
         style={styles.captures1}
      />
    }
  }

renderFileUri4() {
    if (this.state.fileuri ) {
      return <Image
        source={{ uri: this.state.fileuri }}
        
       style={{width: 100, height: 100,borderRadius:100 }}
         
      />
    } 
    else{
     return (<Image 
     source={imgmin}
     style={{width: 100, height: 100,borderWidth:1,borderRadius:100,borderColor:'#ded776' }}  
     />
            // <Image 
            // source={error} 
            // style={{height:30,width:30,justifyContent:'center',alignItems:'center',position:'absolute',bottom:65,borderWidth:1, borderColor:'#ded776',borderRadius:100}} 
            // />
  
                
     )
    }
}
renderFileUri11() {
    if (this.state.fileuri11 ) {
      return <Image
        source={{ uri: this.state.fileuri11 }}
        
       style={{width: 90, height: 90,borderRadius:100 }}
         
      />
      
    } 
    
    else{
     return (<Image 
     source={imgmin}
     style={{width: 90, height: 90,borderWidth:1,borderRadius:100,borderColor:'#ded776', justifyContent:'space-between'}}  
     />
            // <Image 
            // source={error} 
            // style={{height:30,width:30,justifyContent:'center',alignItems:'center',position:'absolute',bottom:65,borderWidth:1, borderColor:'#ded776',borderRadius:100}} 
            // />
  
                
     )
    }
}
renderFileUri12() {
    if (this.state.fileuri12 ) {
      return <Image
        source={{ uri: this.state.fileuri12 }}
        
       style={{width: 90, height: 90,borderRadius:100 }}
         
      />
    } 
    else{
     return (<Image 
     source={imgmin}
     style={{width: 90, height: 90,borderWidth:1,borderRadius:100,borderColor:'#ded776' }}  
     />
            // <Image 
            // source={error} 
            // style={{height:30,width:30,justifyContent:'center',alignItems:'center',position:'absolute',bottom:65,borderWidth:1, borderColor:'#ded776',borderRadius:100}} 
            // />
  
                
     )
    }
}
  ///   else if (this.state.fileuri12 ){
  //     return <Image
  //       source={{ uri: this.state.fileuri12 }}
        
  //      style={{width: 100, height: 100,borderRadius:100 }}
         
  //     />
  //   } 
  //   else {
  //     return  <Image 
  //           style={{width: 100, height: 100, }}
  //           source={img} />
          
  
  //   }
  // }

  renderFileUri13() {
    if (this.state.fileuri13 ) {
      return <Image
        source={{ uri: this.state.fileuri13 }}
        
       style={{width: 90, height: 90,borderRadius:100 }}
         
      />
    } 
    else{
     return (<Image 
     source={imgmin}
     style={{width: 90, height: 90,borderWidth:1,borderRadius:100,borderColor:'#ded776' }}  
     />
            // <Image 
            // source={error} 
            // style={{height:30,width:30,justifyContent:'center',alignItems:'center',position:'absolute',bottom:65,borderWidth:1, borderColor:'#ded776',borderRadius:100}} 
            // />
  
                
     )
    }
}

renderFileUri14() {
    if (this.state.fileuri14 ) {
      return <Image
        source={{ uri: this.state.fileuri14 }}
        
       style={{width: 90, height: 90,borderRadius:100 }}
         
      />
    } 
    else{
     return (<Image 
     source={imgmin}
     style={{width: 90, height: 90,borderWidth:1,borderRadius:100,borderColor:'#ded776' }}  
     />
            // <Image 
            // source={error} 
            // style={{height:30,width:30,justifyContent:'center',alignItems:'center',position:'absolute',bottom:65,borderWidth:1, borderColor:'#ded776',borderRadius:100}} 
            // />
  
                
     )
    }
}
renderFileUri15() {
    if (this.state.fileuri15 ) {
      return <Image
        source={{ uri: this.state.fileuri15 }}
        
       style={{width: 90, height: 90,borderRadius:100 }}
         
      />
    } 
    else{
     return (<Image 
     source={imgmin}
     style={{width: 90, height: 90,borderWidth:1,borderRadius:100,borderColor:'#ded776' }}  
     />
            // <Image 
            // source={error} 
            // style={{height:30,width:30,justifyContent:'center',alignItems:'center',position:'absolute',bottom:65,borderWidth:1, borderColor:'#ded776',borderRadius:100}} 
            // />
  
                
     )
    }
}
renderFileUri16() {
    if (this.state.fileuri16 ) {
      return <Image
        source={{ uri: this.state.fileuri16 }}
        
       style={{width: 90, height: 90,borderRadius:100 }}
         
      />
    } 
    else{
     return (<Image 
     source={imgmin}
     style={{width: 90, height: 90,borderWidth:1,borderRadius:100,borderColor:'#ded776' }}  
     />
            // <Image 
            // source={error} 
            // style={{height:30,width:30,justifyContent:'center',alignItems:'center',position:'absolute',bottom:65,borderWidth:1, borderColor:'#ded776',borderRadius:100}} 
            // />
  
                
     )
    }
}
      showAlert = () =>
      {
       
     
       this.props.navigation.navigate('Singupconfirm');
      }
      
      
      
      render() {
       var L10= false;
       var L20 = false;
       var L30 = false;
       var L40 = false;
       var Above40=false;
       if(this.state.selectincome=='10L - 20L'){
         L10=true
       }
       else if(this.state.selectincome=='20L - 30L'){
         L20=true
       }else if(this.state.selectincome=='30L - 40L'){
         L30=true
       }
       else if(this.state.selectincome=='Above 40L'){
         Above40=true
       }
       
        var markers = [{
          //latitude: 42.882004, 
          //longitude: 74.582748
          
    
        }];
        //const { selectedStartDate } = this.state;
        //const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        const { isDateTimePickerVisible, selectedDate } = this.state;

    
      return (
        
        <Pages  indicatorPosition={'top'} indicatorColor='#ded776'
        indicatorOpacity={0.3} Style = {{backgroundColo:'Black'}}
       
        >
          <View style={styles.container}>
          <View style={{width:'100%',height:'99%',marginTop:'1%'}}>
          <Text style={styles.TextStyle} >Add Your Profile Info </Text> 

          <View  style={{backgroundColor:'#ded776',height:2,width:'90%',marginTop:3,marginLeft:'5%'}}></View>
          <ScrollView  style={{ width: '100%',marginTop:30 }}  >
          <TextInput style={styles.tntxtstyle}  placeholder="When's your birthday?"
            placeholderTextColor = "white"/> 
             <TouchableOpacity style={{textAlign:'center',justifyContent:'center',color:'#ded776',borderWidth: 2, borderColor: '#ded776',
          width:'90%',
          marginLeft:'5%',
          marginTop:20,
          height:40,
          borderRadius:50,
          }} activeOpacity={0.8} onPress={this.showDateTimePicker}>
          <Text style={{fontFamily:'FontAwesome',fontSize:15,color:'#ded776',padding:10}} >{this.state.selectedDate}</Text>
     <Image  style={{ marginLeft:290,marginTop:30,position:'absolute',resizeMode: 'contain',height:20, width:25,backgroundColor:'#ded776'}} source={calendermin}
/> 
</TouchableOpacity> 
                 {/* <Button title="Show DatePicker" onPress={this.showDateTimePicker} /> */}
                 <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode={'date'}
          datePickerModeAndroid={'spinner'}
        />
                  <TextInput style={styles.tntxtstyle}  placeholder="Whats's your location?" 
                 placeholderTextColor = "white"
                 
                 /> 
                 
                  <View style={styles.container1}>
                 <TouchableOpacity style={styles.buttonContainer}
                   activeOpacity = { .5 }
                   onPress={() => this.openSearchModal()}
                  >
                  <Image style={{height:20, width:'15%'}}
                      
source={locationmin}
/> 
                 <Text style={styles.TextStylechadd}> Choose address </Text>
                 
                 </TouchableOpacity>
                 <TouchableOpacity
                  style={styles.buttonContainer}
                   activeOpacity = { .5 }
                   onPress={() => this.openSearchModal1()}
                  >
                  <Image style={{height:20, width:'17%'}}
                      
source={currentlocationmin}
/> 

                 <Text style={styles.TextStylechadd}> Current Location </Text>
                 </TouchableOpacity>
                  </View>
                  <View style={styles.mapviewstyle}>
                  <MapView  scrollEnabled={false}
          provider={PROVIDER_GOOGLE}

        style={styles.map}
          showsUserLocation={true}  
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          region={this.state.region}
         >  
  
          <MapView.Marker  
            coordinate={this.state.region}  
            //title={"JavaTpoint"}  
            //description={"Java Training Institute"}  
          />  
        </MapView>  


        {/* <MapView scrollEnabled={false}
            style={styles.map}
            region={{ 
                latitude: 50.0517273,
                longitude: 14.4286503,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}/ >
             */}
        
    </View>
           <TextInput style={styles.txtyourincome1}  
                 placeholderTextColor = "#ded776"
                 /> 
                  <TextInput style={styles.txtyourincome}  placeholder="What's your income?" 
                 placeholderTextColor = "white"
                 
                 /> 
                 <TextInput style={styles.tntxtstyle3}  placeholder="Select income" 
                 placeholderTextColor = "#ded776" 
                 value={this.state.selectincome}
                 
                 />
    <View style={{flexDirection:'row',marginTop:15}}>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
       {/* <List> */}
      {/* <ListItem> */}
  <TouchableOpacity 
          style={{ 
          
          backgroundColor:'#323232',
          width:90,
          height:40,
          marginTop:20,
          borderRadius:50,
          borderWidth:1}}
          activeOpacity = { .5 }
          onPress={this.selectText.bind(this,'10L - 20L')}
       >
       {
                      L10?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
       </LinearGradient>):null
                    }

           <Text style={{height:35,marginLeft:10,textAlign:'center', marginTop:8,color:'white'}}>10L- 20L   </Text>
  </TouchableOpacity>
   <TouchableOpacity 
          style={{ 
          backgroundColor:'#323232',
          width:90,
          height:40,
          marginTop:20,
          borderRadius:50,
          borderWidth:1}}
          activeOpacity = { .5 }
          onPress={this.selectText.bind(this,'20L - 30L')}
       >
       {
                      L20?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
       </LinearGradient>):null
                    }
           <Text style={{marginLeft:10,textAlign:'center', marginTop:8,color:'white'}}>20L- 30L   </Text>
  </TouchableOpacity>
   <TouchableOpacity 
          style={{ 
          backgroundColor:'#323232',
          width:90,
          height:40,
          marginTop:20,
          borderRadius:50,
          borderWidth:1}}
          activeOpacity = { .5 }
          onPress={this.selectText.bind(this,'30L - 40L')}
       >
       {
                      L30?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
       </LinearGradient>):null
                    }
           <Text style={{marginLeft:10,textAlign:'center', marginTop:8,color:'white'}}>30L- 40L   </Text>
  </TouchableOpacity>
   <TouchableOpacity 
          style={{ 
          backgroundColor:'#323232',
          width:90,
          height:40,
          marginTop:20,
          borderRadius:50,
          borderWidth:1}}
          activeOpacity = { .5 }
          onPress={this.selectText.bind(this,'Above 40L')}
       >
       {
                      Above40?(<LinearGradient 
              start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#dcc642', '#896100', '#f2eb80']} style={styles.txtlinearGradient}>
       </LinearGradient>):null
                    }
           <Text style={{marginLeft:10,textAlign:'center', marginTop:8,color:'white'}}>Above 40L  </Text>
           

  </TouchableOpacity>
  </ScrollView>
 
  {/* </ListItem> */}
{/* </List> */}

    </View>

          <LinearGradient 
           start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
           
           colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradients1}>
    <Text style={styles.buttonTexts1}>
      Next
      </Text>
    </LinearGradient>
       
                     </ScrollView>
            </View>

  {/* //page 1 code */}
               </View>

               <View style={styles.container}>

<View style={{width:'100%',height:'99%',marginTop:'1%'}}>
<Text style={styles.TextStyle} >Add Your Profile Info </Text> 

<View style={{backgroundColor:'#ded776',height:2,width:'90%',marginTop:3,marginLeft:'5%'}}></View> 
<ScrollView  style={{ width: '100%',marginTop:30 }}  >
<Text style={styles.Textavtar}> Upload your AVTAR!</Text>
            <TextInput style={styles.tntxtstyle}  placeholder="Please upload your real porterait only"
            placeholderTextColor = "white" 
             /> 
             <View>
             
               <TouchableOpacity onPress={this.chooseImage}   >
                {this.renderFileUri()}
                <Image source={this.state.FileUri}  />

                 <Image source={add} style={{height:30,width:30,justifyContent:'center',alignItems:'center',position:'absolute',right:95,bottom:40,borderWidth:1, borderColor:'#ded776',borderRadius:100}} />

                  
                 </TouchableOpacity>
                 </View>
            {/*<Image source={img} style={styles.Image1} />*/}
            <LinearGradient 
       start={{ x: 0.7, y: 0.7 }} end={{ x: 0.0, y: 0.3 }}
       
       colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradient1}>
     <TouchableOpacity onPress={this.chooseImage4}   >

    <Text style={styles.buttonText1}>
      Add more pics
      </Text>
      </TouchableOpacity>
    </LinearGradient>
    
    <View style={styles.main}>
            <View style={{flexDirection:'row', marginTop:-40, justifyContent:"space-between"}}>
            {this.renderFileUri11()}  
             {this.renderFileUri12()}
             {this.renderFileUri13()}
              {/* <Image
                style={{width: 100, height: 100,borderWidth:1,borderRadius:100,borderColor:'#ded776' }}
                source={img} />
                <Image source={error} style={{height:30,width:30,justifyContent:'center',alignItems:'center',position:'absolute',bottom:65,borderWidth:1, borderColor:'#ded776',borderRadius:100}} />
               
              <Image
                style={{width: 100, height: 100}}
                source={img} />
                <Image source={error} style={{height:30,width:30,justifyContent:'center',alignItems:'center',position:'absolute',left:110,borderWidth:1, borderColor:'#ded776',borderRadius:100}} />
                 
                <Image
                style={{width: 100, height: 100}}
                source={img} />
                <Image source={error} style={{height:30,width:30,justifyContent:'center',alignItems:'center',position:'absolute',left:210,borderWidth:1, borderColor:'#ded776',borderRadius:100}} /> */}
            </View>

            <View style={{flexDirection:'row', marginTop:20, justifyContent:"space-between"}}>
            {this.renderFileUri14()}  
             {this.renderFileUri15()}
             {this.renderFileUri16()} 
              {/* <Image
                style={{width: 100, height: 100}}
                source={img} />
                <Image source={error} style={{height:30,width:30,justifyContent:'center',alignItems:'center',position:'absolute',borderWidth:1, borderColor:'#ded776',borderRadius:100}} />
              <Image 
              style={{width: 100, height: 100}}
              source={img} />
             <Image source={error} style={{height:30,width:30,justifyContent:'center',alignItems:'center',position:'absolute',borderWidth:1, borderColor:'#ded776',borderRadius:100}} />
              <Image
                style={{width: 100, height: 100}}
                source={img} />
                 <Image source={error} style={{height:30,width:30, borderWidth:1,borderColor:'#ded776',borderRadius:100,right:200}} />
              
              <Image source={error} style={{height:30,width:30, borderWidth:1,borderColor:'#ded776',borderRadius:100,right:120}} /> */}
                
            </View>
            <Text>
            {/* <Text>{ this.addPadding() }</Text> */}
              <Text>
                 <Text style={{fontWeight: "bold"}}></Text>{"\n"}
              </Text>      
            </Text>
          </View>
          <LinearGradient 
           start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
           
           colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradients2}>
    <Text style={styles.buttonTexts2}>
      Next
      </Text>
    </LinearGradient>
    
</ScrollView>
</View>

</View>

         <View style={styles.container}>
          <View style={{width:'100%',height:'99%',marginTop:'1%'}}>
          <Text style={styles.TextStyle} >Add Your Profile Info </Text> 

          <View style={{backgroundColor:'#ded776',height:2,width:'90%',marginTop:3,marginLeft:'5%'}}></View>     
         
          <ScrollView  style={{ width: '100%',marginTop:30 }}  >
          <Text style={styles.TexttellusStyle}> TELL US ABOUT YOURSELF </Text>
         
         <TextInput style={styles.txtdescribe}  placeholder="How can you describe yourself?" 
                 placeholderTextColor = "white"
                 
                 />       
                {/* <TextInput  style={styles.describebtnStyle} placeholder="How can you describe yourself?" placeholderTextColor = "white" underlineColorAndroid = "transparent" />   */}
    
    <View style={{backgroundColor:'#ded776',height:2,width:'90%',marginTop:15,marginLeft:'5%'}}></View>     
    <Text style={styles.occupationtext}> Occupation </Text>
    <TextInput style={styles.txtyourincome}  placeholder="Please enter your Occupation" 
                 placeholderTextColor = "white"
                 
                 />
          
                            {/* <TextInput  style={styles.uploadpotrtbtnStyle} placeholder="Please enter your Occupation" placeholderTextColor = "white" underlineColorAndroid = "transparent" />   */}
   
                {/* <Text style={styles.TxtpotrtStyle}>   </Text> */}
                
    
    <LinearGradient 
           start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
           
           colors={['#dcc642', '#896100', '#f2eb80']} style={styles.linearGradients3}>
    <Text style={styles.buttonTexts3}>
      Next
      </Text>
    </LinearGradient>
            </ScrollView>

          </View>

          </View>
          <View style={styles.container}>
<View style={{width:'100%',height:'99%',marginTop:'1%'}}>
<Text style={styles.TextStyle} >Add Your Profile Info </Text> 

<View style={{backgroundColor:'#ded776',height:2,width:'90%',marginTop:3,marginLeft:'5%'}}></View>     


<View style={{padding:20}} >
<ScrollView  style={{ width: '100%',marginTop:30 }}  >
<View style={{marginBottom:20}} >
{this.renderFileUri1()}
<Text style={{fontSize:14,fontFamily:'FontAwesome',marginLeft:10,color:'white',position:'absolute',marginTop:10 ,padding:10}}>1 -  Upload your valid government id which is true and clear</Text>

{/*<ImageBackground source={poof_id_with_customer1min} style={{height:200,opacity:.3}}>
</ImageBackground>*/}

<TouchableOpacity onPress={this.chooseImage1}
          style={styles.uploadpotrtbtnStyle4}
          activeOpacity = { .3 }
         
       >   
            <Text style={styles.TxtpotrtStyle}> Upload  </Text>
            
</TouchableOpacity>
</View>
{/*<ImageBackground  source={annual_incomemin} style={{height:200,marginTop:20,opacity:.3}}>
  
</ImageBackground>*/}
<View style={{marginBottom:20}}>
{this.renderFileUri2()}
<Text style={{fontSize:14,fontFamily:'FontAwesome',marginLeft:10,color:'white',marginTop:10,position:'absolute',padding:10 }}>2 -  Take a photo of you holding id you upload in the previous step make sure your face and info on photoid is visible</Text>
<TouchableOpacity onPress={this.chooseImage2}
          style={styles.uploadpotrtbtnStyle4}
          activeOpacity = { .5 }
          
       >
           
            <Text style={styles.TxtpotrtStyle}> Upload  </Text>
            
</TouchableOpacity>
</View>
<View style={{marginBottom:20}}>
{this.renderFileUri3()}
<Text style={{fontSize:14,fontFamily:'FontAwesome',marginLeft:10,color:'white',marginTop:10,position:'absolute',padding:10 }}>3 -  Upload a document to show your annual income or net assets which includes your full name</Text>

{/*<ImageBackground source={poof_id_with_customer1min} style={{height:200,marginTop:20,opacity:.3}}>
</ImageBackground>*/}
<TouchableOpacity onPress={this.chooseImage3}
          style={styles.uploadpotrtbtnStyle4}
          activeOpacity = { .5 }
          
       >   
            <Text style={styles.TxtpotrtStyle}> Upload  </Text>
            
</TouchableOpacity>
</View>

<TouchableOpacity
          style={styles.verifybtnStyle}
          activeOpacity = { .5 }
          onPress={
            this.showAlert
          }
       >   
            <Text style={styles.TxtverifyStyle}> Verify  </Text>
            
</TouchableOpacity>
<RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={350}
          duration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center",
              borderTopRightRadius:30,
              borderTopLeftRadius:30

            }
          }}
        >
          <YourOwnComponent onChange={this.showAlert} />
        </RBSheet>

</ScrollView>
</View>
</View>
</View>    
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
         
            flex: 1,
       
           backgroundColor:'black',
         
           flexDirection: "row",
            paddingTop: StatusBar.currentHeight,
            
        },
        TextStyle:{
          color:'#ded776',
          fontSize:20,
          width:'90%',
          marginLeft:'5%',
          fontFamily:'FontAwesome'
        },
        tntxtstyle3:{
          paddingLeft: 20,
          color:'#ded776',
          width:'90%',
          marginLeft:'5%',
          marginTop:20,
          borderRadius:50,
          borderWidth:2,
          borderColor:'#ded776',
          fontFamily:'FontAwesome',
          fontSize:15
        },
      tntxtstyle:{
       fontFamily:'FontAwesome',
          paddingLeft: 20,
          color:'white',
          backgroundColor:'#323232',
          width:'90%',
          marginLeft:'5%',
          marginTop:20,
          borderRadius:50,
          borderWidth:2,
          fontSize:15,
        },
        
        linearGradient:{
          flex:1,
          width:'30%',
          height: 40,
          marginLeft:'35%',
         marginTop:50,
         marginBottom:50,
         borderRadius:50
        },
        linearGradients3:{
          flex:1,
          width:'25%',
          height: 40, 
         marginLeft:'40%',
         marginTop:180,
         borderRadius:50
        
        },
        linearGradient2:{
          flex:1,
          width:'30%',
          height: 40,
         marginLeft:'35%',
         borderRadius:50
        },
        buttonText2:{
          textAlign:'center',
          marginTop:'10%'
        },
        buttonText:{
          textAlign:'center',          
          marginTop:'10%'
          
        },
        buttonTexts3:{
          fontSize:15,
          fontFamily:'FontAwesome',
          textAlign:'center',         
          marginTop:'12%'
          
        },
        Textavtar:{
          flex:1,
          fontSize:15,
          fontFamily:'FontAwesome',
          color:'#ded776',
          textAlign:'center',
          marginTop:10,
        },
        Image1:{
          flex:1,
          width: 170, 
          height: 170,
          marginTop:15,
          marginLeft:'25%',
          marginRight:'25%',
        },
        linearGradient1:{
          width:'35%',
          height:30,
         marginLeft:'30%',
         marginTop:20,
         marginBottom:40,
         borderRadius:50
        },
        buttonText1:{
          fontFamily:'FontAwesome',
          textAlign:'center',
          marginTop:'5%'
        },
        tntxtstyle1:{
          paddingLeft: 20,
          borderWidth: 1,
          borderColor: '#ded776',
          width:'90%',
          marginLeft:'5%',
          marginTop:20,
          borderRadius:50,
    
        },
        underline:{
          
          marginRight:20
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
            height:40,
            width:"90%",
            paddingTop:10,
            paddingBottom:10,
            marginLeft:10,
            marginRight:10,
            borderRadius:50,
            borderColor: '#ded776',
            borderWidth: 2,
            paddingLeft:"4%",
            paddingRight:"4%",
            marginTop:20,
    
        },
        mapstyl:{
          height:350,
          width:300,
          marginLeft:"5%",
          marginTop:"-15%",
          paddingRight:30,
          resizeMode: 'contain',
          left: 20,
           right:-20 
        },
        TxtpotrtStyle:{
          fontFamily:'FontAwesome',
        color:'#fff',
        textAlign:'left',
        paddingLeft:'5%'
      },
      TexttellusStyle:{
        fontFamily:'FontAwesome',
        flex: 1,
        fontSize: 20,
        marginTop:10,
        fontFamily: 'FontAwesome',
        backgroundColor:'black',
        color:'#ded776',
        textAlign:'center',
      },
    describebtnStyle:{
      fontFamily:'FontAwesome',
      height:90,
      textAlign:'center',
        flex:1,
        marginTop:20,
        paddingTop:10,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#323232',
        borderRadius:25,
      },
      TextStyle4:{
        flex: 1,
     backgroundColor:'black',
     color:'#ded776',
    fontSize: 22,
    flexDirection: 'row',
    textDecorationStyle: "solid",
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
       backgroundColor:'black'
      }, 
      uploadpotrtbtnStyle:{
      
        fontFamily:'FontAwesome',
        height:40,
        textAlign:'center',
        //marginTop:2,
        paddingTop:10,
        paddingBottom:10,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#323232',
        borderRadius:50,
      },
      main: {
        flex: 1,
        margin: 30,
        resizeMode:'contain',
      },
    
      image: {
        position: 'absolute',
      },
      TextStylechadd:{
        fontFamily:'FontAwesome',
         justifyContent:"center",
         alignItems:"center",
        fontSize:12,
        marginTop:-15,
        marginLeft:25,
        color:'#ded776'
      },
      txtyourincome:{
          paddingLeft: 20,
          color:'white',
          backgroundColor:'#323232',
          width:'90%',
          marginLeft:'5%',
          marginTop:20,
          borderRadius:50,
          borderWidth:1
    
      },
      txtdescribe:{
          paddingLeft: 20,
          height:90,
          color:'white',
          backgroundColor:'#323232',
          width:'90%',
          marginLeft:'5%',
          marginTop:20,
          borderRadius:25,
          borderWidth:1
      },
      mapviewstyle:{
        
        top:0,
        left:0,
        bottom:0,
        marginTop:20,
        marginBottom:10,
        right:0,
        justifyContent:'flex-end',
        alignItems:'center',
        
      },
      map:{
        height:200,
        width:"90%",
        marginLeft:20,
        marginRight:20,
        flex:1,
        top:0,
        left:0,
        bottom:0,
        right:0
      },
      txtyourincome1:{
          borderWidth: 2,
          borderColor: '#ded776',
          width:'90%',
          marginLeft:'5%',
          marginTop:20,
          borderRadius:20,
      },
      txtvalidid:{
        flex:1,
        marginTop:-10,
        padding: 2,
        color:'white',
        fontSize:12
      },
      uploadpotrtbtnStyle4:{
        flex:1,
        width:'90%',
        marginLeft:'5%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-10,
        paddingTop:10,
        paddingBottom:10,
        margin:1,
        backgroundColor:'#696969',
        borderRadius:8,
        borderWidth: 2,
        borderColor: '#696969'
      },
      captures1:{
        flex:1,
        marginTop:10,
        flexWrap: "wrap",
        height:180,
        width:'90%',
        marginLeft:'5%',
        backgroundColor: 'rgba(0,0,0,.5)'
        
      },
      verifybtnStyle:{
        height:40,
        width:"40%",
        marginBottom:30,
        marginLeft:"30%",
        marginRight:"30%",
        backgroundColor:'#696969',
        borderRadius:12,
        borderWidth: 2,
        borderColor: '#696969'
      },
      txtvalidid2:{
        flex:1,
        flexDirection:'row',
        marginTop:20,
        color:'white',
        fontSize:12
      },touachableButton: {
        position: 'absolute',
        right: 3,
        height: 40,
        width: 55,
        padding: 2
      },
      TxtverifyStyle:{
        fontFamily:'FontAwesome',
      fontSize:15,
        marginTop:8,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
      },
      images: {
        alignItems:'center',
        justifyContent:'center',
    width: 180,
    height: 180,
    marginTop:30,
    borderColor: '#dcc642',
    borderWidth: 1,
    marginHorizontal: 3,
    marginLeft:80,
    borderRadius:100
  },
  datepickercontainer:{
    flex: 1,
    fontFamily:'FontAwesome',
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  text: {
    marginVertical: 10
  },
  btnstyle:{borderRadius:50,borderWidth:1,height:30,width:80,alignItems:'center',justifyContent:'center',marginRight:8}
  ,
  fontstyle:{color:'white',fontSize:18},
  txtlinearGradient:{
          
         flex: 1,
             position:'absolute',
               height:38,
               width:"100%",
               justifyContent: 'center',
               alignItems: 'center',
               borderRadius:50,
               alignItems:'center',
               
         },
         linearGradients1:{
           flex:1,
          width:'25%',
          height: 40,
         marginLeft:'40%',
         marginTop:20,
        marginBottom:20,
         borderRadius:50

         },
         buttonTexts1:{
          fontSize:15,
          fontFamily:'FontAwesome',
          textAlign:'center',
          marginTop:'12%'
          
        },
        linearGradients2:{
          flex:1,
          width:'25%',
          height: 40, 
         marginLeft:'40%',
         marginBottom:20,
         borderRadius:50
        },
        buttonTexts2:{
          fontSize:15,
          fontFamily:'FontAwesome',
          textAlign:'center',
          marginTop:'12%'
          
        },
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
