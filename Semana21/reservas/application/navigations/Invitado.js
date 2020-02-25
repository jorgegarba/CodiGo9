import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../screens/Start';
import LoginScreen from '../screens/LoginRNC';
import { Dimensions } from 'react-native';
import RegisterScreen from '../screens/Registro';
const Stack = createStackNavigator()

export default function Invitado() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Inicio"
            component={StartScreen}
            options={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor:'#f4511a'
                },
                headerTitleStyle: {
                    flex:1,
                    textAlign:'center',
                    width:Dimensions.get('screen').width-25,
                    fontSize:30,
                    paddingLeft:0,
                    color:'#000',
                    fontWeight:'bold',
                }
            }}
            />
            <Stack.Screen 
            name ="Login"
            component={LoginScreen}
            options={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor:'#f4511a'
                },
                headerTitleStyle: {
                    flex:1,
                    textAlign:'center',
                    width:Dimensions.get('screen').width-25,
                    fontSize:30,
                    paddingLeft:0,
                    color:'#000',
                    fontWeight:'bold',
                }
            }}
            />
            <Stack.Screen 
            name="Register"
            component={RegisterScreen}
            />
        </Stack.Navigator>
    )
}
