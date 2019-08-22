import {StyleSheet} from 'react-native';
import {typography} from "../../config/styles";
const {fontMain, fontMainLight} = typography;

const styles = StyleSheet.create({
    title: {
        fontFamily: fontMain
    },
    image: {
        resizeMode: 'contain',
        height: '100',
        width: '100'
    }
})
