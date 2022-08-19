import { Text, View } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'


import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import colors from "./app/config/colors";
import WelcomeScreen from "./app/screens/WelcomeScreen";
export default function App() {
  
  return (
    <WelcomeScreen />
  );
}


