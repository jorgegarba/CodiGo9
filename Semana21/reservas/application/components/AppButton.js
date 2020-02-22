import React from 'react'
import { Button } from 'react-native'

export default function AppButton(propiedades) {
    const {action, iconName, iconColor, title, bgColor, width} = propiedades;
    return (
        <Button 
        onPress={action}
        buttonStyle={{
            backgroundColor: bgColor,
            height: 45,
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 0,
            marginBottom: 5,
            width: width
        }}
        title={title}
        icon={
            <Icon />
        }
         >

        </Button>
    )
}
