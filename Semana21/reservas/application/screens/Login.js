import React, { useRef } from 'react';
import t from 'tcomb-form-native';
import { Card } from 'react-native-elements';
import BackgroundImage from '../components/BackgroundImage';
import { View } from 'react-native';
import AppButton from '../components/AppButton';
const Form = t.form.Form;
export default function Login() {
    const form = useRef(null);
    // VALIDACION PARA EL CORREO Y LA CONTRASEÑA
    let validador = {
        validarEmail: t.refinement(t.String,(valor)=>{
            if(/@/.test(valor)){
                return true;
            }else{
                return false;
            }
        }),
        validarPassword: t.refinement(t.String,(valor)=>{
            if(valor.length >=6){
                return true;
            }else{
                return false;
            }
        })
    }
    // DEFINIMOS LO QUE VA A ESTAR CONTENIDO EN EL FORMULARIO
    let user = t.struct({
        email: validador.validarEmail,
        password: validador.validarPassword
    })
    // DEFINIMOS LOS ELEMENTOS DEL FORMULARIO
    let options = {
        fields: {
            email: {
                help:'Introduce tu correo',
                error: 'Correo invalido',
                autoCapitalize: 'none'
            },
            password: {
                help: 'Introduce tu contraseña',
                error: 'Contraseña invalida, minimo 6 caracteres',
                secureTextEntry: true,
                password: true
            }
        }
    }
    let login = ()=>{
        const validacion= form.current.getValue();
        console.log(validacion);
        
    }
    return (
        <BackgroundImage source={require('../../assets/images/minino.gif')}>
            <View>
                <Card
                    wrapperStyle={{ paddingLeft: 10 }}
                    title="Iniciar Sesion">
                    <Form
                        ref={form}
                        type={user}
                        options={options}
                    />
                    <AppButton
                        action={login}
                        iconName="sign-in"
                        iconCOlor="#ffff"
                        title="Iniciar Sesion"
                        bgColor="rgba(111,38,74,0.7)"
                        ancho={true}
                    />
                </Card>
            </View>
        </BackgroundImage>
    )
}
