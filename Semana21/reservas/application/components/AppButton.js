import React from 'react'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';

export default function AppButton(propiedades) {
    const {action, iconName, iconColor, title, bgColor, iconSize} = propiedades;
    let width = Dimensions.get('window').width;
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
            <Icon
            style={{marginLeft:10}}
            name={iconName}
            size={iconSize}
            color={iconColor}
            />
        }
        iconRight={true}
         >

        </Button>
    )
}
