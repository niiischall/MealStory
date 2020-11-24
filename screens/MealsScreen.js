import React from 'react';
import {
    View,
    FlatList,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';
import {
    HeaderButtons,
    Item
} from 'react-navigation-header-buttons';

import MealTile           from '../component/MealTile';
import LogoTitle          from '../component/LogoTitle';
import Colors             from '../constant/colors';
import CustomHeaderButton from '../component/HeaderButton';

const MealsScreen = (props) => {
    const Meals = useSelector(store => store.reducer.meals);

    const MealItem = (itemData) => {
        return <MealTile 
            itemData = {itemData}
            onClick  = {
                () => props.navigation.navigate('Dishes', {
                    mealId: itemData.item.id,
                    theme: itemData.item.theme,
                    mealTitle: itemData.item.title
                })
            } 
        />;
    }

    return(
    <SafeAreaView style = {{flex: 1}}>
        <View style = {styles.MealsContainer}>
            <FlatList 
                data         = {Meals}
                numColumns   = {2}
                renderItem   = {MealItem}
                keyExtractor = {(item) => item.id}
                style        = {{width: '100%'}}
            />
        </View>
    </SafeAreaView>
    )
}

MealsScreen.navigationOptions = (navData) => {
    return {
        headerTitleStyle: {
            alignSelf: 'center'
        },
        headerTitle: () => <LogoTitle/>,
        headerLeft: () => (
            <HeaderButtons
                HeaderButtonComponent = {CustomHeaderButton}
            >
                <Item 
                    iconName = "ios-menu"
                    title    = "DRAWER"
                    onPress  = {
                        () => navData.navigation.toggleDrawer()
                    }    
                />
            </HeaderButtons>
        )} 
    }

const styles = StyleSheet.create({
    MealsContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.colorBackgroundContent
    }
})

export default MealsScreen;