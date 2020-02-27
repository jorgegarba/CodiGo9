import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import { View } from 'react-native';
import Estilos from '../../styles/Estilos';
import AppButton from '../components/AppButton';
import * as Facebook from 'expo-facebook';
import {APP_ID} from '../utils/facebook';
import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';
import FirebaseConfig from '../utils/firebase';

export default function Start({navigation}) {
    function login(){
        navigation.navigate('Login')
    }
    function register(){
        navigation.navigate('Register')
    }
    async function facebook(){
        // expo-facebook
        await Facebook.initializeAsync(APP_ID);
        const {type, token} = await Facebook.logInWithReadPermissionsAsync({
            permissions:['public_profile']
        })
        console.log('tipo:',type);
        console.log('token:',token);
        if (type==="success"){
            const credenciales = await firebase.auth.FacebookAuthProvider.credential(token);
            FirebaseConfig.auth().signInWithCredential(credenciales).then(()=>{
                Toast.showWithGravity("iniciaste sesion correctamente", Toast.LONG, Toast.BOTTOM);
            }).catch(error=>{
                let errorMessage = error.message;
                let errorCode = error.code;
                Toast.showWithGravity(errorCode + errorMessage, Toast.LONG,Toast.BOTTOM);
            })
        }else if (type==="cancel"){
            Toast.showWithGravity("Inicio de sesion cancelado", Toast.LONG, Toast.BOTTOM);
        }else{
            Toast.showWithGravity("Error desconocido", Toast.LONG, Toast.BOTTOM);
        }
    }
    function google(){

    }
    return (
        <BackgroundImage source={require('../../assets/images/source.gif')}>
            <View style={Estilos.start}>
                <AppButton
                bgColor="rgba(111,38,74,0.7)"
                title="Ingresar"
                action={login}
                iconName="sign-in"
                iconSize={25}
                iconColor="#fff"
                />
                <AppButton
                bgColor="rgba(200,200,58,0.7)"
                title="Registrar"
                action={register}
                iconName={"user-plus"}
                iconSize={25}
                iconColor="#fff"
                />
                <AppButton
                bgColor= "rgba(63,100,173,0.7)"
                title = "Facebook"
                action={facebook}
                iconName="facebook"
                iconSize={25}
                iconColor="#fff"
                />
                <AppButton
                bgColor="rgba(222,83,71,0.7)"
                title="Google"
                action={google}
                iconName="google"
                iconSize={25}
                iconColor="#fff"
                />
            </View>

        </BackgroundImage>
    )
}
