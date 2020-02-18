import React from 'react'
import { View } from 'react-native'

export default function Flex() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'blue',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'stretch',
        }}>
            <View style={{
                // flex: 1,
                backgroundColor: 'violet',
                position:'absolute',
                top:10,
                borderColor:'violet',
                height: 50,
                width: 50
            }} />
            <View style={{
                // flex: 2,
                backgroundColor: 'skyblue',
                position:'absolute',
                right:0,
                top:0,
                height: 50,
                width: 50,
                borderRadius: 50
            }} />
            <View style={{
                // flex: 3,
                backgroundColor: 'aquamarine',
                height: 50,
                width: 50
            }} />
            <View style={{
                // flex: 4,
                backgroundColor: '#ccff33',
                height: 50,
                width: 50
            }} />
        </View>
    )
}
