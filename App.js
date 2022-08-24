import { Text, View } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'


import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import colors from "./app/config/colors";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  
  return (
    <MessagesScreen />
  );
}


