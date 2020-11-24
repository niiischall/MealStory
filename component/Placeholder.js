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
        <Image 
            source = {
                require('../assets/undraw-treasure.png')
            }
            style  = {styles.Image}
        />
    </View>
)}

const styles = StyleSheet.create({
    PlaceholderContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    PlaceholderText: {
        marginBottom: 5,
        textAlign: 'center',
        color: Colors.colorToggleButton,
        fontSize: 26
    },
    PlaceholderSubtitleText: {
        marginBottom: 10,
        textAlign: 'center',
        color: Colors.colorToggleButton,
        fontSize: 15
    },
    Image: {
        width: 150,
        height: 150
    }
})

export default Placeholder;