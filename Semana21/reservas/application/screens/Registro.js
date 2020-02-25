import React, { useState } from 'react'
import BackgroundImage from '../components/BackgroundImage'
import { View, Platform, Alert } from 'react-native'
import { Card } from 'react-native-elements'
import InputForm from '../components/InputForm';
import AppButton from '../components/AppButton';
import Firebase from '../utils/firebase';

export default function Registro() {
    let [usuario, setUsu]= useState({
        correo:'',
        password:'',
        confirmacion:''
    })
    let validarCorreo = (e)=>{
        setUsu({
            ...usuario,
            correo:e.nativeEvent.text
        })
    }
    let validarPassword= (e)=>{
        setUsu({
            ...usuario,
            password:e.nativeEvent.text
        })
    }
    let validarConfirmacionPassword= (e)=>{
        setUsu({
            ...usuario,
            confirmacion:e.nativeEvent.text
        })
        console.log(e.nativeEvent);
    }
    let registrar = ()=>{
        if(/@./.test(usuario.correo) && /.*[!@#.%\$\^&\*]/.test(usuario.password) && usuario.password===usuario.confirmacion){
            Firebase.auth().createUserWithEmailAndPassword(usuario.correo, usuario.password).then((usuario)=>{
                console.log(usuario);
                if (Platform.OS==='web'){
                    alert('Usuario creado exitosamente')
                }else{
                    Alert.alert(
                        'Ok',
                    'Usuario creado exitosamente',
                    [{text:'Ok',onPress:()=>{}}])
                }
            }).catch(error=>{
                let errorCode = error.code;
                let errorMessage= error.message;
                if(Platform.OS==='web'){
                    alert('codigo: ',errorCode,'mensaje: ',errorMessage)
                }else{
                    Alert.alert(
                        'Error',
                        errorMessage,[
                            {text:'Ok', onPress:()=>{}}
                        ]
                    )
                }
            })
        }else{
            console.log('Algo no concuerda');
        }
    }
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
                        password={true}
                        errorMessage="Ingrese una contraseña valida, de longitud no menor a 6 caracteres"
                        evt={validarPassword}
                    />
                    <InputForm
                        placeHolder="Reingrese su contraseña"
                        iconName="key"
                        iconSize={15}
                        iconColor="0000"
                        password={true}
                        errorMessage="Ingrese una contraseña valida, de longitud no menor a 6 caracteres"
                        evt={validarConfirmacionPassword}
                    />
                    <AppButton
                    action={registrar}
                    iconName="user-plus"
                    iconColor="#ffff"
                    title="Registrarse"
                    bgColor="rgba(32,110,232,0.7)"
                    ancho={true}
                    />
                </Card>
            </View>
        </BackgroundImage>
    )
}
