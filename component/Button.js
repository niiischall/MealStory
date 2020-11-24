import React from 'react';
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native';

import Colors from '../constant/colors';

const Button = (props) => {

    let CustomButton = TouchableOpacity;

    if(Platform.OS === 'android'){
        CustomButton = TouchableNativeFeedback;
    }

    return(
        <View style = {styles.ButtonContainer}>
            <CustomButton 
                activeOpacity = {0.8}
                onPress       = {props.onPress}
            >
                <View style = {styles.Button}>
                    <Text style = {styles.ButtonText}>
                        {props.title}
                    </Text>
                </View>
            </CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonContainer: {
        marginVertical: 15,
        borderRadius: 30,
        shadowColor: Colors.colorShadaow,
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 4.65,
        shadowOpacity: 0.29,
        elevation: 7,
        overflow: 'hidden'
    },
    Button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.colorBackgroundSidebar
    },
    ButtonText: {
        fontSize: 16,
        color: Colors.colorItemSelectedSidebar
    }
});

export default Button;