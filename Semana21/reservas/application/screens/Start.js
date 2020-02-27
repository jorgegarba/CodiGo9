import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import { View } from 'react-native';
import Estilos from '../../styles/Estilos';
import AppButton from '../components/AppButton';
import * as Facebook from 'expo-facebook';
import {APP_ID} from '../utils/facebook';

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
