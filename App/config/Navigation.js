import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ContactsList from "../screens/ContactsList";
import ContactDetails from "../screens/ContactDetails";

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

const Navigation = () => (
  <NavigationContainer>
    <ContactsStackScreen />
  </NavigationContainer>
);

export default Navigation;
