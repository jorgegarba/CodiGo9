import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Estilos() {
    return (
        <View>
            <Text style={styles.agrandadorAzul}>Letra Grande de color azul</Text>
            <Text style={styles.letraPurpura}>Letra purpura</Text>
            <Text style={[styles.agrandadorAzul, styles.letraPurpura]}>Otra Letra</Text>
        </View>
    )
}
const styles= StyleSheet.create({
    agrandadorAzul:{
        color:'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    letraPurpura:{
        color:'purple'
    }
})