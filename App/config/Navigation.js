import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ContactsList from "../screens/ContactsList";
import ContactDetails from "../screens/ContactDetails";
import ActionsList from "../screens/ActionsList";
import ActionDetails from "../screens/ActionDetails";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Settings from "../screens/Settings";
const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => (
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
);

const ActionsStack = createStackNavigator();
const ActionsStackScreen = () => (
  <ActionsStack.Navigator>
    <ActionsStack.Screen name="ActionsList" component={ActionsList} />
    <ActionsStack.Screen name="ActionDetails" component={ActionDetails} />
  </ActionsStack.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator
    screenOptions={
      {
        // tabBarLabel: "test",
        // tabBarActiveTintColor: "red",
        // tabBarActiveBackgroundColor: "green",
      }
    }
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
    screenOptions={
      {
        // drawerType: "slide",
        // drawerPosition: "right",
      }
    }
  >
    <AppDrawer.Screen
      name="Tabs"
      component={AppTabsScreen}
      options={{ drawerLabel: "Home" }}
    />
    <AppDrawer.Screen name="Settings" component={Settings} />
  </AppDrawer.Navigator>
);
const Navigation = () => (
  <NavigationContainer>
    <AppDrawerScreen />
  </NavigationContainer>
);

export default Navigation;
