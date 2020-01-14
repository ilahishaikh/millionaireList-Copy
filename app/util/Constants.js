import { fromBottom, zoomOut, zoomIn } from "react-navigation-transitions";
import { Dimensions } from "react-native";
//var { EventEmitter } = require("fbemitter");
export const commonConstant = {
	userId: "",
	profileimage: "",
	emitter: '',

};

export const EVENT_PUSH_PREFIX = "Event_";
export const DEVICE_PUSH_PREFIX = "_Device_Group";

export const DEVICE = {
	WIDTH: Dimensions.get('window').width,
	HEIGHT: Dimensions.get('window').height
}

export const MESSAGE_ICON = require("../../app/assets/images/message.png")

export const handleCustomTransition = ({ scenes }) => {
	const prevScene = scenes[scenes.length - 2];
	const nextScene = scenes[scenes.length - 1];

	// Custom transitions go there
	if (prevScene
		&& prevScene.route.routeName === 'ChatList'
		&& nextScene.route.routeName === 'EventMembers') {
		return fromBottom(1000);
	} else if (prevScene
		&& prevScene.route.routeName === 'EventMembers'
		&& nextScene.route.routeName === 'ChatUserProfile') {
		return fromBottom(1000);
	}
	// return fromLeft();
}

export default commonConstant;
