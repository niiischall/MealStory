import React from 'react';
import { 
    HeaderButton 
} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../constant/colors';


const CustomHeaderButton = (props) => {
    return(
        <HeaderButton 
            {...props}
            IconComponent = {Ionicons}
            iconSize      = {24}
            color         = {Colors.colorWhite}
        />
    )
}

export default CustomHeaderButton;