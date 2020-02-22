import React, { useRef, useState } from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { View, Alert, Platform } from 'react-native';
import { Card } from 'react-native-elements';

import InputForm from '../components/InputForm';
import AppButton from '../components/AppButton';
import Firebase from '../utils/firebase';
// import Toast from 'react-native-simple-toast';


export default function LoginRNC() {
    const [credenciales, modificarCredenciales]= useState({
        correo:'',
        password:''
    })
    let correo = (e)=>{
        modificarCredenciales({
            ...credenciales,
            correo: e.nativeEvent.text,
        })
        console.log(e.nativeEvent.text);
    }
    let password= (e)=>{
        modificarCredenciales({
            ...credenciales,
            password: e.nativeEvent.text
        })
        console.log(e.nativeEvent.text); 
    }
    let login=()=>{
        let validaciones = {
            validarCorreo: null,
            validarPassword: null
        }
        if(/@/.test(credenciales.correo)){
            validaciones.validarCorreo=true
        }
        if(credenciales.password.length>=6){
            validaciones.validarPassword=true
        }
        if(validaciones.validarCorreo && validaciones.validarPassword){
            if(Platform.OS==='web'){
                alert('Todo OK')
            }
            if(Platform.OS==='android' || Platform.OS==='ios')
            {
                Firebase.auth().signInWithEmailAndPassword(credenciales.correo, credenciales.password).then((rpta)=>{
                    console.log(rpta);
                    Alert.alert(
                        'Bievenido',
                        'Mensaje',[
                            {text:'Ok', onPress:()=>{}},
                            {text:'Cancelar', onPress:()=>{}}
                        ]
                    )
                }).catch((error)=>{
                    let errorCode = error.code;
                    let errorMessage= error.message;
                    if (errorCode==='auth/wrong-password'){
                        Alert.alert(
                            'Contraseña incorrecta',
                            errorMessage,[
                                {text:'Ok', onPress:()=>{}}
                            ]
                        )
                    }
                })
                // Toast.showWithGravity("Todo esta correcto",50, Toast.BOTTOM)
            }
        }
        else{
            if(Platform.OS==='web'){
                alert('No cumple la validacion')
            }
            else{
                Alert.alert(
                    'Error',
                    'No cumple la validacion',[
                        {text:'Ok', onPress:()=>{}},
                        {text:'Cancelar', onPress:()=>{}}
                    ]
                )
                // Toast.showWithGravity("Algo no esta correcto",50, Toast.BOTTOM)
            }
        }
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
