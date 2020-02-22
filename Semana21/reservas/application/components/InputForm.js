import React from 'react'
import { Input} from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';

let InputForm = ({placeHolder, iconName, iconSize, iconColor, errorMessage, evt})=> (
        <Input
        placeholder={placeHolder}
        leftIcon={
            <Icon
            name={iconName}
            size= {iconSize}
            color={iconColor}
            />
        }
        errorMessage={errorMessage}
        errorStyle={{color:'red'}}
        onChange={evt}
        
        />
    )

export default InputForm;