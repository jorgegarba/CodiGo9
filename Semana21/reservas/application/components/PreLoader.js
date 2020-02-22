import React from 'react'
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'
const {height } = Dimensions.get('window');
export default function PreLoader() {
    return (
        <View style={[styles.preloader]}>
            <ActivityIndicator style={{height:80}} size={200} color="#0000ff"/>
        </View>
    )
}
const styles = StyleSheet.create({
    preloader: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        height: height,
        backgroundColor: '#242935'
    }
})
