import React from 'react';
import { View } from 'react-native';
import AppButton from './application/components/AppButton';

export default function App() {
  return (
    <View>
     <AppButton 
     bgColor="rgba(111, 38, 74, 0.9)"
     title="Texto Cualquiera"
     action={()=>{console.log("hizo click")}}
     iconName="sign-in"
     iconColor="#ffff"
     />
    </View>
  );
}

