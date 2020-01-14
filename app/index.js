import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import NavigationService from "./config/navigationServices";
import RootNavigator from "./config/navigator";
import configureStore from "./redux/store";
import StatusBar from "./StatusBar";
import * as Constants from "./util/Constants";
import Loading from "./Loading";
import AsyncStorage from '@react-native-community/async-storage';


const { store, persistor } = configureStore;
 persistor.purge()
class App extends React.Component {
  componentDidMount = async () => {
    await AsyncStorage.getItem("userId").then(value => {
      Constants.commonConstant.userId = value;
    });
  };
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <RootNavigator
           
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
          <StatusBar />
        </PersistGate>
      </Provider>
    );
  }
}

export default () => <App />;
