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

const DishTile = (props) => {
    let CustomButton = TouchableOpacity;

    if(Platform.OS === 'android'){
        CustomButton = TouchableNativeFeedback;
    }

    return(
        <View style = {styles.DishTile}>
            <CustomButton 
                activeOpacity = {0.8}
                onPress       = {props.onClick}
                style         = {{flex: 1}}
            >
                <ImageBackground
                    source = {{uri: props.itemData.item.imgURL}}
                    style  = {styles.DishImage}
                >
                    <View style = {{
                        backgroundColor: props.theme 
                            ? props.theme
                            : props.itemData.item.theme,
                        ...styles.TitleContainer
                    }}>
                        <Text style = {styles.TitleText} >
                            {props.itemData.item.title}
                        </Text>
                    </View>
                    <View style = {styles.SubtitleContainer}>
                        <Text style = {styles.SubTitleText}>
                            {props.itemData.item.duration} min
                        </Text>
                        <Text style = {styles.SubTitleText}>
                            {props.itemData.item.complexity}
                        </Text>  
                        <Text style = {styles.SubTitleText}>
                            {props.itemData.item.affordability}
                        </Text>  
                    </View>                
                </ImageBackground>
            </CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    DishTile: {
        width: '100%',
        overflow: 'hidden',
        height: 200,
        marginVertical: 20,
        borderRadius: 5,
        shadowOffset: {width: 3, height: 3},
        shadowRadius: 4.65,
        shadowOpacity: 0.29,
        shadowColor: Colors.shadowColor,
        elevation: 7 
    },
    DishImage: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        justifyContent: 'flex-end'
    },
    TitleContainer: {
        opacity: 0.9,
        alignItems: 'center',
        paddingVertical: 10
    },
    TitleText: {
        fontSize: 14,
        textAlign: 'center',
        color: Colors.colorWhite
    },
    SubtitleContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        backgroundColor: Colors.colorWhite,
        padding: 5
    },
    SubTitleText: {
        fontSize: 12,
        textTransform: 'uppercase',
        color: Colors.colorHeadingText
    }
});

export default DishTile;