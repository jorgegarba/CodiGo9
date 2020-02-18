import React, {useEffect, useState} from 'react';
import { Text } from 'react-native';
export default function Estados({parrafo}) {
    const [texto, setTexto] = useState(true);
    // El useEffect se usa en vez del componentDidMount y componentDidUpdate
    useEffect(()=>{
        setInterval(()=>{
            setTexto(!texto)
        },500)
    });
    if(!texto){
        return(null)
    }
    else{
        return(
            <Text>{parrafo}</Text>
        )
    }
}
