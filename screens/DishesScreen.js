import React, {useState, useEffect } from 'react';
import {
    View,
    FlatList,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';

import Colors   from '../constant/colors';
import DishTile from '../component/DishTile';
import Placeholder        from "../component/Placeholder";

const DishesScreen = (props) => {
    const Dishes = useSelector(store => store.reducer.filteredDishes);
    const favoriteDishes = useSelector(store => store.reducer.favoriteDishes);

    const [ dishes, setDishes ] = useState([]);
    const theme  = props.navigation.getParam('theme');

    useEffect(() => {
        let mealId = props.navigation.getParam('mealId');
        let selectedDishes = Dishes.filter((dish) => dish.mealIds.indexOf(mealId) > -1);

        setDishes(selectedDishes);
    }, [Dishes]);

    const renderItems = (itemData) => {
        const isFavourite = favoriteDishes.some((dish) => dish.id === itemData.item.id);

        return <DishTile 
            theme    = {theme}
            itemData = {itemData}
            onClick  = {
                () => props.navigation.navigate('Recipe', {
                    dishId: itemData.item.id,
                    DishTitle: itemData.item.title,
                    theme: theme,
                    isFavourite: isFavourite
                })
            } 
        />
    }

    let content = null;

    if(dishes.length > 0){
        content = (
            <View style = {styles.DishesContainer}>
                <FlatList 
                    data         = {dishes}
                    renderItem   = {renderItems}
                    keyExtractor = {(item) => item.id}
                    style        = {{width: '100%'}}
                />
            </View>
        )
    }else{
        content = (
            <Placeholder 
                title = "No dishes available." 
                subtitle = "Please check your filters."
            />
        )
    }

    return(
        <SafeAreaView style = {{flex: 1}}>
            {content}
        </SafeAreaView>
    )
}

DishesScreen.navigationOptions = (navData) => {
    const theme  = navData.navigation.getParam('theme');
    const mealTitle = navData.navigation.getParam('mealTitle');

    return {
        headerStyle: {
            backgroundColor: theme
        },
        title: mealTitle
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

export default DishesScreen;