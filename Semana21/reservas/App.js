import React from 'react';
import { View, Text } from 'react-native';
import AppButton from './application/components/AppButton';
import PreLoader from './application/components/PreLoader';
import BackgroundImage from './application/components/BackgroundImage';

export default function App() {
  return (
    // <View>
    //  <AppButton 
    //  bgColor="rgba(111, 38, 74, 0.9)"
    //  title="Texto Cualquiera"
    //  action={()=>{console.log("hizo click")}}
    //  iconName="sign-in"
    //  iconColor="#ffff"
    //  />
    // </View>

    // <PreLoader />

    // Bajarse imagen de fondo animada de giphy
    <BackgroundImage source={require('./assets/images/minino.gif')}>
      <Text>Hola</Text>
    </BackgroundImage>
  );
}

