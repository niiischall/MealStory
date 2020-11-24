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
} from 'react-navigation-header-buttons'

import Colors             from '../constant/colors';
import LogoTitle          from '../component/LogoTitle';
import CustomHeaderButton from '../component/HeaderButton';
import DishTile           from '../component/DishTile';
import Placeholder        from "../component/Placeholder";

const FavDishesScreen = (props) => {
    const FavDishes = useSelector(store => store.reducer.favoriteDishes);

    const renderItems = (itemData) => {
        const isFavourite = FavDishes.some((dish) => dish.id === itemData.item.id);
        return <DishTile 
            theme    = {itemData.theme}
            itemData = {itemData}
            onClick  = {
                () => props.navigation.navigate('Recipe', {
                    dishId: itemData.item.id,
                    theme: itemData.item.theme,
                    isFavourite: isFavourite
                })
            } 
        />
    }
    
    return(
    <SafeAreaView style = {{flex: 1}}>
        <View style = {styles.DishesContainer}>
            {
                FavDishes.length > 0
                ?
                <FlatList 
                    data         = {FavDishes}
                    renderItem   = {renderItems}
                    keyExtractor = {(item) => item.id}
                    style        = {{width: '100%'}}
                />
                :
                <Placeholder 
                    title = "No dishes available."
                    subtitle = "Have a look at our menu to see more options." 
                />
            }
        </View>
    </SafeAreaView>
    )
}

FavDishesScreen.navigationOptions = (navData) => {
    return {
        headerStyle: {
            backgroundColor: Colors.colorItemSelectedSidebar
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
        )
    }
}

const styles = StyleSheet.create({
    DishesContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: Colors.colorBackgroundContent
    }
});

export default FavDishesScreen;