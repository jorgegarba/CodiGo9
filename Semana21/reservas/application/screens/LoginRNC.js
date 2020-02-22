import React, { useRef, useState } from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { View } from 'react-native';
import { Card } from 'react-native-elements';

import InputForm from '../components/InputForm';
import AppButton from '../components/AppButton';


export default function LoginRNC() {
    const [credenciales, modificarCredenciales]= useState({
        correo:'',
        password:''
    })
    let correo = (e)=>{
        modificarCredenciales({
            ...credenciales,
            correo: e.target.value,
        })
        console.log(e);
    }
    let password= (e)=>{
        modificarCredenciales({
            ...credenciales,
            password: e.target.value
        })
        console.log(e); 
    }
    let login=()=>{

    }
    return (
        <BackgroundImage source={require('../../assets/images/source_awa.gif')}>
            <View>
                <Card wrapperStyle={{ paddingLeft: 10 }} title="Iniciar Sesion">
                    <InputForm
                        placeHolder="Ingrese su correo"
                        iconName="at"
                        iconSize={15}
                        iconColor="#000"
                        errorMessage="Ingrese un correo valido"
                        evt={correo}
                    />
                    <InputForm
                        placeHolder="Ingrese su contraseña"
                        iconName="key"
                        iconSize={15}
                        iconColor="#000"
                        errorMessage="Ingrese una contraseña valida"
                        evt={password}
                    />
                    <AppButton
                        action={login}
                        iconName="sign-in"
                        iconColor="#ffff"
                        title="Iniciar Sesion"
                        bgColor="rgba(111,38,74,0.7)"
                        ancho={true}
                    />
                </Card>
            </View>
        </BackgroundImage>
    )
}
