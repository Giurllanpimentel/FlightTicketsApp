import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold
  
} from "@expo-google-fonts/poppins" 

import { StatusBar } from "react-native";

import { Home } from '@/app/home';


export default function App() {
  
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
  })

  if(!fontsLoaded){
    return null
  }

  return (
    <>
      <Home/>
      <StatusBar barStyle={"light-content"} backgroundColor={"transparent"}
      translucent/>
      
    </>
    
  );
}
