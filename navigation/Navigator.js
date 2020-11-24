import React from 'react';
import {
    Text,
    Platform
} from 'react-native';
import {
    createAppContainer
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack';
import {
    createBottomTabNavigator
} from 'react-navigation-tabs';
import {
    createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs';
import {
    createDrawerNavigator
} from 'react-navigation-drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';


import MealsScreen     from '../screens/MealsScreen';
import FavDishesScreen from '../screens/FavDishesScreen';
import DishesScreen    from '../screens/DishesScreen';
import RecipeScreen    from '../screens/RecipeScreen'; 
import FiltersScreen   from '../screens/FiltersScreen';
import Drawer          from '../component/Drawer';

import Colors from '../constant/colors'; 

/*Default Navigation Styling for Stack Screens*/
const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Colors.colorItemSelectedSidebar,
        shadowColor: Colors.colorShadaow,
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 4.65,
        shadowOpacity: 0.29,
        elevation: 7    
    },
    headerTitleStyle: {
        fontSize: 20,
        color: Colors.colorWhite
    }
}

/*Meal Stack Navigator*/
const MealsStackNavigator = createStackNavigator(
    {
        Meals:  MealsScreen,
        Dishes: DishesScreen,
        Recipe: RecipeScreen 
    },
    {
        defaultNavigationOptions: defaultNavigationOptions
    }
);

/*Favorites Stack Navigator*/
const FavoritesStackNavigator = createStackNavigator(
    {
        FavDishes: FavDishesScreen,
        Recipe: RecipeScreen
    },
    {
        defaultNavigationOptions: defaultNavigationOptions
    }
)

/*Tab Navigator Default Screens*/
const tabScreenMenus = {
    Meals: {
        screen: MealsStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabBarInfo) => 
                <Ionicons 
                    name  = 'md-pizza'
                    size  = {26} 
                    color = {tabBarInfo.tintColor}
                />,
            tabBarLabel: 
                <Text>&nbsp;</Text>
        }
    },
    Favorites: {
        screen: FavoritesStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabBarInfo) => 
                <Ionicons 
                    name  = 'ios-heart'
                    size  = {26} 
                    color = {tabBarInfo.tintColor}
                />,
            tabBarLabel: 
                <Text>&nbsp;</Text>
        }
    }
}

/*Tab Styling for Andriod*/
const tabStylingAndroid = {
    barStyle: {
        backgroundColor: Colors.colorItemSelectedSidebar,
        shadowColor: Colors.colorShadaow,
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 4.65,
        shadowOpacity: 0.29,
        elevation: 7
    },
    activeColor: Colors.colorYellow,
    inactiveColor: Colors.colorWhite
}

/*Tab Styling for iOS*/
const tabStylingIOS = {
    activTintColor: Colors.colorYellow,
    activeBackgroundColor: Colors.colorItemSelectedSidebar,
    inactiveTintColor: Colors.colorWhite,
    inactiveBackgroundColor: Colors.colorItemSelectedSidebar,
    labelStyle: {
        fontSize: 18
    }
}

/*Tab Navigator*/
const TabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(
        tabScreenMenus,
        tabStylingAndroid
    )
    : createBottomTabNavigator(
        tabScreenMenus,
        {
            tabBarOptions: tabStylingIOS
        }      
    )

const FiltersStackNavigator = createStackNavigator(
    {
        Filters: FiltersScreen      
    }, 
    {
        defaultNavigationOptions: defaultNavigationOptions
    }
);


/*Drawer Navigator*/
const DrawerNavigator = createDrawerNavigator({
        Meals: {
            screen: TabNavigator
        },
        Filters: {
            screen: FiltersStackNavigator 
        }
    },
    {
        contentComponent: Drawer,
        width: 150
    }   
)

export default createAppContainer(DrawerNavigator);