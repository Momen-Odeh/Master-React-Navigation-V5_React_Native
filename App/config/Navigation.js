import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import ContactsList from "../screens/ContactsList";
// import ContactDetails from "../screens/ContactDetails";

const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => <ContactsStack.Screen></ContactsStack.Screen>;

const Navigation = () => <NavigationContainer></NavigationContainer>;

export default Navigation;
