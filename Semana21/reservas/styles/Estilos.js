import {StyleSheet, Platform, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    start:{
        justifyContent: 'center',
        flex:1
    },
    imageBackground:{
        flex:1,
        width:null,
        height:null
    },
    preloader: {
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        height: height,
        backgroundColor: '#242935'
    }
})