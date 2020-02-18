import React from 'react';
import { SafeAreaView} from 'react-native';
import EstilosGlobales from './styles/EstilosGlobales';
import Props from './components/Props';
import Estados from './components/Estados';
import Estilos from './components/Estilos';
import Flex from './components/Flex';

export default function App() {
  return (
    <SafeAreaView style={EstilosGlobales.contenedoresAndroid}>
      {/* <Props nombre='Eduardo' correo='ederiveroman@gmail.com'/>
      <Props nombre='Willy' correo='willy123@gmail.com'/>
      <Props nombre='Jose B' correo='joseb@gmail.com'/>
      <Props nombre='Teresa' correo='teresa@gmail.com'/>
      <Estados parrafo='Hola buenas noches!'/>
      <Estilos /> */}
      <Flex />
    </SafeAreaView>
  );
}
