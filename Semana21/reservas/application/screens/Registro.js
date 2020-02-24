import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import { View } from 'react-native'
import { Card } from 'react-native-elements'
import InputForm from '../components/InputForm';
import AppButton from '../components/AppButton';

export default function Registro() {
    let validarCorreo = ()=>{}
    let validarPassword= ()=>{}
    return (
        <BackgroundImage source={require('../../assets/images/source.gif')}>
            <View >
                <Card wrapperStyle={{paddingLeft:10}} title="Registrarse">
                    <InputForm 
                        placeHolder="Ingrese su correo"
                        iconName="at"
                        iconSize={15}
                        iconColor="0000"
                        errorMessage="Ingrese un correo valido"
                        evt={validarCorreo}
                    />
                    <InputForm
                        placeHolder="Ingrese su contraseña"
                        iconName="key"
                        iconSize={15}
                        iconColor="0000"
                        errorMessage="Ingrese una contraseña valida, de longitud no menor a 6 caracteres"
                        evt={validarPassword}
                    />
                    <AppButton />
                </Card>
            </View>
        </BackgroundImage>
    )
}
