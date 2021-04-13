import React from 'react';
import {FormattedProvider} from 'react-native-globalize';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChooseAuthorizeScreen from './app/screens/ChooseAuthorizeScreen';
import ManualAuthorizeScreen from './app/screens/ManualAuthorizeScreen';
import CheckoutScreen from './app/screens/CheckoutScreen';
import SettingScreen from './app/screens/SettingScreen';
import SplashScreen from './app/screens/SplashScreen';
import PermissionScreenIOS from './app/screens/PermissionScreenIOS';
import QRAuthorizationScreen from './app/screens/QRAuthorizationScreen';
import AuthorizingScreen from './app/screens/AuthorizingScreen';
import DeauthorizingScreen from './app/screens/DeauthorizingScreen';

const Stack = createStackNavigator();

// const AuthStack = createStackNavigator(
//   {
//     Authorize: {
//       screen: ChooseAuthorizeScreen,
//     },
//     QRAuthorize: QRAuthorizationScreen,
//     ManualAuthorize: ManualAuthorizeScreen,
//     Authorizing: AuthorizingScreen,
//   },
//   {
//     headerMode: 'none',
//   },
// );

// const PaymentStack = createStackNavigator(
//   {
//     Checkout: CheckoutScreen,
//     Setting: SettingScreen,
//     Deauthorizing: DeauthorizingScreen,
//   },
//   {
//     headerMode: 'none',
//   },
// );

// const RootStack = createSwitchNavigator(
//   {
//     Splash: SplashScreen,
//     PermissionSettings: PermissionScreenIOS,
//     Auth: AuthStack,
//     Checkout: PaymentStack,
//   },
//   {
//     initialRouteName: 'Splash',
//   },
// );

// const ContainedRootStack = createAppContainer(RootStack);

const App = () => (
  <FormattedProvider locale="en">
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* <Stack.Screen name="ManualAuthorize" component={ManualAuthorizeScreen} /> */}
        <Stack.Screen name="Authorize" component={ChooseAuthorizeScreen} />
        <Stack.Screen
          name="QRAuthorization"
          component={QRAuthorizationScreen}
        />
        <Stack.Screen
          name="ManualAuthorize"
          component={ManualAuthorizeScreen}
        />
        <Stack.Screen name="Authorizing" component={AuthorizingScreen} />
        {/* <Stack.Screen name="Authorizing" component={AuthorizingScreen} /> */}
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </FormattedProvider>
);

export default App;

// const AuthStack = createStackNavigator(
//   {
//     Authorize: {
//       screen: ChooseAuthorizeScreen,
//     },
//     QRAuthorize: QRAuthorizationScreen,
//     ManualAuthorize: ManualAuthorizeScreen,
//     Authorizing: AuthorizingScreen,
//   },
//   {
//     headerMode: 'none',
//   },
// );
