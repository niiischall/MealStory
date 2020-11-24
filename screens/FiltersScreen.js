import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    Switch,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import { useDispatch } from 'react-redux';
import {
    HeaderButtons, 
    Item
} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors    from '../constant/colors';
import LogoTitle from '../component/LogoTitle';
import CustomHeaderButton from '../component/HeaderButton';
import * as actions from '../store/action/action';

const FiltersScreen = (props) => {
    const dispatch = useDispatch();

    const [isGlutenFree, setGlutenFree]   = useState(false);
    const [isLactoseFree, setLactoseFree] = useState(false);
    const [isVegan, setVegan]             = useState(false);
    const [isVegetarian, setVegetarian]   = useState(false);

    const setFilters = useCallback(() => {
        const filters = {
            isGlutenFree: isGlutenFree,
            isLactoseFree: isLactoseFree,
            isVegan: isVegan,
            isVegetarian: isVegetarian
        }
        dispatch(actions.setFilters(filters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

    useEffect(() => {
        props.navigation.setParams({
            setFilters: setFilters
        });
    }, [setFilters])

    return(
    <SafeAreaView style = {{flex: 1}}>  
    <View style = {styles.FiltersScreen}>
        <View style = {styles.FilterHeaderContainer}>
            <Text style = {styles.FilterText}>
                filter by category
            </Text>
        </View>
        <View style = {styles.SwitchContainer}>
            <View style = {styles.Switch}>
                <Text style = {styles.SwitchText}>
                    Gluten-Free
                </Text>
                <Switch
                    value = {isGlutenFree}
                    trackColor = {{
                        false: Colors.colorWhite,
                        true: Colors.colorYellow
                    }}
                    thumbColor = { 
                        Colors.colorItemSelectedSidebar
                    }
                    onValueChange = {
                        () => setGlutenFree(
                            (previousState) => !previousState
                        ) 
                    }
                />
            </View>
            <View style = {styles.Switch}>
                <Text style = {styles.SwitchText}>
                    Lactose-Free
                </Text>
                <Switch
                    value = {isLactoseFree}
                    trackColor = {{
                        false: Colors.colorWhite,
                        true: Colors.colorYellow
                    }}
                    thumbColor = {
                        Colors.colorItemSelectedSidebar
                    }
                    onValueChange = {
                        () => setLactoseFree(
                            (previousState) => !previousState
                        )    
                    }                
                />
            </View>
            <View style = {styles.Switch}>
                <Text style = {styles.SwitchText}>
                    Vegan
                </Text>
                <Switch
                    value = {isVegan}
                    trackColor = {{
                        false: Colors.colorWhite,
                        true: Colors.colorYellow
                    }}
                    thumbColor = {
                        Colors.colorItemSelectedSidebar
                    }
                    onValueChange = {
                        () => setVegan(
                            (previousState) => !previousState
                        )    
                    }                 
                />
            </View>
            <View style = {styles.Switch}>
                <Text style = {styles.SwitchText}>
                    Vegetarian
                </Text>
                <Switch
                    value = {isVegetarian}
                    trackColor = {{
                        false: Colors.colorWhite,
                        true: Colors.colorYellow
                    }}
                    thumbColor = {
                        Colors.colorItemSelectedSidebar
                    }
                    onValueChange = {
                        () => setVegetarian(
                            (previousState) => !previousState
                        )    
                    } 
                />
            </View>
        </View>
        <View style = {styles.Footer}>
            <Text style = {styles.FooterText}>
                Built with <Ionicons 
                    name  = "ios-heart"
                    color = "red"
                    size  = {18}
                /> for Elevate Labs.
            </Text>
        </View>
    </View>
    </SafeAreaView>
)}

FiltersScreen.navigationOptions = (navData) =>
    {
        const setFilters = navData.navigation.getParam('setFilters');

        return {
            headerTitleStyle: {
                alignSelf: 'center'
            },
            headerTitle: () => <LogoTitle 
                    style = {{marginLeft: 0}}
                />,
            headerLeft: () => (
                <HeaderButtons
                    HeaderButtonComponent = {CustomHeaderButton}
                >
                    <Item 
                        iconName = "ios-menu"
                        title = "DRAWER"
                        onPress = {
                          () => navData.navigation.toggleDrawer()
                        }
                    />
                </HeaderButtons>
            ),
            headerRight: () => (
                <HeaderButtons
                    HeaderButtonComponent = {CustomHeaderButton}
                >
                    <Item 
                        iconName = "md-cloud-upload"
                        title    = "Check"
                        onPress  = {setFilters}
                    />
                </HeaderButtons>
            )
        }
    }

const styles = StyleSheet.create({
    FiltersScreen: {
        flex: 1,
        paddingVertical: 20,
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor: Colors.colorBackgroundContent
    },
    Gradient: {
        flex: 1
    },
    FilterHeaderContainer: {
        backgroundColor: Colors.colorItemSelectedSidebar,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 20,
        borderRadius: 20,
        backgroundColor: Colors.colorItemSelectedSidebar,
        shadowColor: Colors.colorShadaow,
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 4.65,
        shadowOpacity: 0.29,
        elevation: 7 
    },
    FilterText: {
        fontSize: 18,
        color: Colors.colorWhite,
        textTransform: 'uppercase'
    },
    FooterText: {
        fontSize: 16,
        color: Colors.colorItemSelectedSidebar
    },
    SwitchContainer: {
        width: '75%',
        padding: 10,
        paddingVertical: 50,
        marginBottom: 'auto'
    },
    Switch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    SwitchText: {
        fontSize: 18,
        color: Colors.colorToggleButton
    }
})

export default FiltersScreen;