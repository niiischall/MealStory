import React from 'react';
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Platform
} from 'react-native';

import Colors from '../constant/colors';

const MealTile = (props) => {
    let CustomButton = TouchableOpacity;

    if(Platform.OS === 'android'){
        CustomButton = TouchableNativeFeedback;
    }

    return(
        <View style = {styles.MealTile}>
            <CustomButton 
                activeOpacity = {0.8}
                onPress       = {props.onClick}
                style         = {{flex: 1}}
            >
                <ImageBackground
                    source = {{uri: props.itemData.item.img}}
                    style  = {styles.Image}
                >
                    <View style = {{
                        backgroundColor: props.itemData.item.theme,
                        opacity: 0.9,
                        ...styles.MealContent
                    }}>
                        <Text style = {{
                            shadowColor: props.itemData.item.theme,
                            ...styles.MealTitle
                        }}>
                            {props.itemData.item.title}
                        </Text>
                    </View>
                </ImageBackground>
            </CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    MealTile: {
        width: '45%',
        padding: 0,
        flex: 1,    
        height: 200,
        margin: 10,
        borderRadius: 5,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        overflow: 'hidden',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 4.65,
        shadowOpacity: 0.29,
        elevation: 7 
    },
    Image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    MealContent: {
        width: '100%',
        padding: 7.5,
        justifyContent: 'flex-end'
    },
    MealTitle: {
        color: Colors.colorWhite,
        fontSize: 14,
        fontFamily: 'Roboto-Bold'
    }
});

export default MealTile;