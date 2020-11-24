import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../constant/colors';

const LogoTitle = (props) => {
    return(
    <View style = {{
        ...styles.LogoContainer,
        ...props.style
    }}>
        <Ionicons 
            name  = "md-pizza"
            size  = {25}
            color = {Colors.colorBackgroundContent}
        />
        <Text style = {styles.LogoText}>
            MealStory
        </Text>
    </View>
)}

const styles = StyleSheet.create({
    LogoContainer: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginLeft: -50
    },
    LogoText: {
        marginLeft: 5,
        color: Colors.colorBackgroundSelectedSidebar,
        fontSize: 20
    }
})

export default LogoTitle;