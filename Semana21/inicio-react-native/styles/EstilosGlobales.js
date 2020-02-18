import {StyleSheet, Platform} from 'react-native'

export default StyleSheet.create({
    contenedoresAndroid: {
        flex: 1,
        backgroundColor: 'pink',
        // Para excluir del notch unos 25px y no se malogre el diseño
        paddingTop: Platform.OS==='android' ? 25: 0
    },
    contenedoresAifon: {
        flex: 1,
        backgroundColor: 'peru',
        paddingTop: Platform.OS==='ios' ? 25: 0
    }
})