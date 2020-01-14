import React, { Component } from "react";
import { connect } from "react-redux";
import {TouchableOpacity, Text, View, Animated, Dimensions, Image, Vibration} from "react-native";
//import { Icon } from "react-native-material-ui";
import NavigationService from "../config/navigationServices";
import { StatusBarActions } from "../redux/actions";
import PropTypes from 'prop-types';
//import CacheImage from "../../components/CacheImage";

const WINDOW = Dimensions.get('window');
const HEIGHT = WINDOW.height;
const ANIMATE = HEIGHT + 70;
const ANIMATECLOSE = HEIGHT - 60;
const DURATION = 1000;

class StatusBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            message: '',
            title: '',
        };
        this.animatedValue = new Animated.Value(-ANIMATE);
    }

    static propTypes = {
        imageSrc: PropTypes.number,
        infoImageSrc:  PropTypes.number,
        warnImageSrc:  PropTypes.number,
        errorImageSrc: PropTypes.number,
        successImageSrc: PropTypes.number,
        cancelBtnImageSrc: PropTypes.number,
        infoColor: PropTypes.string,
        warnColor: PropTypes.string,
        errorColor: PropTypes.string,
        successColor: PropTypes.string,
    };
    static defaultProps = {
        imageSrc: null,
        infoImageSrc: require('../assets/icon/info.png'),
        warnImageSrc: require('../assets/icon/warn.png'),
        errorImageSrc: require('../assets/icon/error.png'),
        successImageSrc: require('../assets/icon/success.png'),
        cancelBtnImageSrc: require('../assets/icon/cancel.png'),
        infoColor: '#2B73B6',
        warnColor: '#cd853f',
        errorColor: '#cc3232',
        successColor: 'green',
    };

  // componentWillReceiveProps(nextProps) {
  //     this.callToast()
  //  /* if (nextProps.statusBar.status) {
  //     this.dropdown.alertWithType(
  //       nextProps.statusBar.type,
  //       nextProps.statusBar.title,
  //       nextProps.statusBar.message
  //     );
  //   }*/
  // }

    callToast() {
        if (this.props.statusBar.vibrate) {
            Vibration.vibrate(DURATION);
        }
        Animated.timing(
            this.animatedValue,
            {
                toValue: -ANIMATECLOSE,
                duration: 350
            }).start(this.closeToast(this.props.statusBar.duration))
    }

    closeToast(duration) {
        setTimeout(() => {
            Animated.timing(
                this.animatedValue,
                {
                    toValue: -ANIMATE,
                    duration: 350
                }).start()
        }, duration === undefined ? 1500 : duration)
    }

  onPressPopup = () => {
    if (this.props.statusBar.type === "info") {
      const chatDetails = this.props.statusBar.chatDetails;
      if (chatDetails) {
        const { item, chatType } = chatDetails;
        NavigationService.navigate("Chat", { item, chatType });
      }
    }
  };

  renderTitle = componentProps => (
    <TouchableOpacity onPress={this.onPressPopup}>
      <Text style={componentProps.titleStyle}>
        {this.props.statusBar.title}
      </Text>
    </TouchableOpacity>
  );

  renderMessage = componentProps => (
    <TouchableOpacity onPress={this.onPressPopup}>
      <Text style={componentProps.messageStyle}>
        {this.props.statusBar.message}
      </Text>
    </TouchableOpacity>
  );

  renderImage = componentProps => (
    <TouchableOpacity onPress={this.onPressPopup}>
      {/* <Icon
        name="chat"
        color="#fff"
        size={32}
        style={componentProps.imageStyle}
      /> */}
    </TouchableOpacity>
  );

  getSourceForType(type) {
        switch (type) {
            case 'info':
                return this.props.infoImageSrc;
            case 'warn':
                return this.props.warnImageSrc;
            case 'error':
                return this.props.errorImageSrc;
            case 'success':
                return this.props.successImageSrc;
            default:
                return this.props.imageSrc;
        }
    }
    getBackgroundColorForType(type) {
        switch (type) {
            case 'info':
                return this.props.infoColor;
            case 'warn':
                return this.props.warnColor;
            case 'error':
                return this.props.errorColor;
            case 'success':
                return this.props.successColor;
            default:
                return this.props.containerStyle.backgroundColor;
        }
    }

    render() {
        let source;
        let backgroundColor;
        if (this.props.statusBar.status){
            source = this.getSourceForType(this.props.statusBar.type);
            backgroundColor = this.getBackgroundColorForType(this.props.statusBar.type)
        }
        return (
            <View>
                { this.props.statusBar.status && <Animated.View  style={{ transform: [{ translateY: this.animatedValue }], zIndex: 2, height: 70, borderRadius: 8,
                    backgroundColor: backgroundColor, position: 'absolute',left:5, top:0, right:5, justifyContent:  'center', flexDirection: 'row'
                }}>
                    <View style={{flex: 1, padding: 7, paddingRight: 0, justifyContent: 'center'}}>
                        <Image style={{height: 30, width: 30}} source={source} />
                    </View>
                    <View style={{flex: 8, flexDirection: 'column', justifyContent: 'center'}}>
                        <Text style={{ marginLeft: 10,  color: 'white',  fontSize:16, fontWeight: 'bold', padding: 2 }}>
                            {this.props.statusBar.type}
                        </Text>
                        <Text style={{ marginLeft: 10,  color: 'white',  fontSize:14, fontWeight: 'normal',  padding: 2 }}>
                            {this.props.statusBar.message}
                        </Text>
                    </View>
                </Animated.View> }
            </View>
        );
    }

 /* render() {
    return (
      <DropdownAlert
        ref={ref => {
          this.dropdown = ref;
        }}
        panResponderEnabled
        renderTitle={this.renderTitle}
        renderImage={
          this.props.statusBar.type === "info" ? this.renderImage : null
        }
        onClose={
          this.props.statusBar.type === "info" ? this.props.hideStatusBar : null
        }
        renderMessage={
          this.props.statusBar.type === "info" ? this.renderMessage : null
        }
      />
    );
  }*/

}

const mapStateToProps = state => ({
  statusBar: state.statusBar
});

const mapDispatchToProps = dispatch => ({
  hideStatusBar: () => dispatch(StatusBarActions.hideStatusBar())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusBar);
