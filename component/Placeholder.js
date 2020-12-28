import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import Colors from '../constant/colors';


const Placeholder = (props) => {
    return(
    <View style = {styles.PlaceholderContainer}>
        <Text style = {styles.PlaceholderText}>
            {props.title}
        </Text>
        <Text style = {styles.PlaceholderSubtitleText}>
            {props.subtitle}
        </Text>
    </View>
)}

const styles = StyleSheet.create({
    PlaceholderContainer: {
        justifyContent:'center',
        alignItems: 'center'
    },
    PlaceholderText: {
        marginBottom: 5,
        textAlign: 'center',
        color: Colors.colorToggleButton,
        fontSize: 26,
        fontFamily: 'OpenSans-Regular'
    },
    PlaceholderSubtitleText: {
        marginBottom: 10,
        textAlign: 'center',
        color: Colors.colorToggleButton,
        fontSize: 15,
        fontFamily: 'Roboto-Bold'
    }
})

export default Placeholder;