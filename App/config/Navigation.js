import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ContactsList from "../screens/ContactsList";
import ContactDetails from "../screens/ContactDetails";

const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => (
  <ContactsStack.Navigator>
    <ContactsStack.Screen name="ContactsList" component={ContactsList} />
    <ContactsStack.Screen name="ContactDetails" component={ContactDetails} />
  </ContactsStack.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <ContactsStackScreen />
  </NavigationContainer>
);

export default Navigation;
