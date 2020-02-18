// rfc snippet
import React from 'react';
import { View, Text } from 'react-native';

export default function Props({nombre, correo}) {
    console.log();
    return (
        <View style={{alignItems:'center'}}>
            <Text>Hola {nombre} {correo}</Text>
        </View>
    )
}


// Segundo metodo
// const Props=()=>{
// }
// export default Props;

// Tercer metodo
// function Props(){
// }
// export default Props;