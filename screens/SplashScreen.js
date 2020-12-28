import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Button from '../component/Button';
import Colors from '../constant/colors';

const SplashScreen = (props) => {
    return(
        <View style = {styles.SplashContainer}>
            <Ionicons 
                name  = "md-pizza"
                size  = {200}
                color = {Colors.colorBackgroundContent}
            />
            <Text style = {styles.Headline}>
                MealStory
            </Text>
            <Text style = {styles.Subtext}>
                Every meal has a story...
            </Text>
            <Button 
                color = "red"
                title = "SEE MORE"
                onPress = {props.removeScreen}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    SplashContainer: {
        flex: 1,
        backgroundColor: Colors.colorItemSelectedSidebar,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Headline: {
        color: Colors.colorBackgroundSelectedSidebar,
        fontSize: 40,
        fontFamily: 'Pacifico',
    },
    Subtext:{
        marginVertical: 10,
        color: Colors.colorBackgroundSelectedSidebar,
        fontSize: 20,
        fontFamily: 'OpenSans-Bold',
        letterSpacing: 1
    }
})

export default SplashScreen;