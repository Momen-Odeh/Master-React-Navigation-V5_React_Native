import { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ContactsList from "../screens/ContactsList";
import ContactDetails from "../screens/ContactDetails";
import ActionsList from "../screens/ActionsList";
import ActionDetails from "../screens/ActionDetails";
import Settings from "../screens/Settings";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Loading from "../screens/Loading";
import Modal from "../screens/Modal";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const SafeAreaStackScreen = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: insets.top, backgroundColor: "white" }}
    >
      {children}
    </SafeAreaView>
  );
};

const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => (
  <SafeAreaStackScreen>
    <ContactsStack.Navigator
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: "red",
    //   },
    // }}
    >
      <ContactsStack.Screen
        name="ContactsList"
        component={ContactsList}
        options={{ headerTitle: "Contacts" }}
      />
      <ContactsStack.Screen
        name="ContactDetails"
        component={ContactDetails}
        options={({ route }) => {
          return {
            headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last}`,
          };
        }}
      />
    </ContactsStack.Navigator>
  </SafeAreaStackScreen>
);

const ActionsStack = createStackNavigator();
const ActionsStackScreen = () => (
  <SafeAreaStackScreen>
    <ActionsStack.Navigator>
      <ActionsStack.Screen name="ActionsList" component={ActionsList} />
      <ActionsStack.Screen name="ActionDetails" component={ActionDetails} />
    </ActionsStack.Navigator>
  </SafeAreaStackScreen>
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator
    screenOptions={{
      // tabBarLabel: "test",
      // tabBarActiveTintColor: "red",
      // tabBarActiveBackgroundColor: "green",
      headerShown: false, //************************************ */
    }}
  >
    <AppTabs.Screen
      name="Contacts"
      component={ContactsStackScreen}
      options={{
        tabBarIcon: ({ size, color, focused }) => (
          <AntDesign name="contacts" size={size} color={color} />
        ),
        // tabBarLabel: "Contacts",
      }}
    />
    <AppTabs.Screen
      name="Actions"
      component={ActionsStackScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="checkmark-circle-outline" size={size} color={color} />
        ),
      }}
    />
  </AppTabs.Navigator>
);
const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
  <AppDrawer.Navigator
    screenOptions={{
      // drawerType: "slide",
      // drawerPosition: "right",
      headerShown: false,
    }}
  >
    <AppDrawer.Screen
      name="Tabs"
      component={AppTabsScreen}
      options={{ drawerLabel: "Home" }}
    />
    <AppDrawer.Screen name="Settings" component={Settings} />
  </AppDrawer.Navigator>
);
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name={"SignIn"} component={SignIn}></AuthStack.Screen>
    <AuthStack.Screen name={"SignUp"} component={SignUp}></AuthStack.Screen>
  </AuthStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      setUser({});
    }, 500);
  }, []);
  return (
    <RootStack.Navigator
      screenOptions={{
        animationEnabled: false,
        presentation: "modal",
        headerMode: "none",
      }}
    >
      {isLoading ? (
        <RootStack.Screen name="Loading" component={Loading} />
      ) : user ? (
        <RootStack.Screen name="AppDrawerScreen" component={AppDrawerScreen} />
      ) : (
        <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
      )}
      <RootStack.Screen
        name="Modal"
        component={Modal}
        options={{ animationEnabled: true }}
      />
      <RootStack.Screen
        name="Alert"
        component={Modal}
        options={{
          animationEnabled: true,
          cardStyle: { backgroundColor: "rgba(0, 0, 0, 0.15)" },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.25, 0.7, 1],
                }),
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                  extrapolate: "clamp",
                }),
              },
            };
          },
        }}
      />
    </RootStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
