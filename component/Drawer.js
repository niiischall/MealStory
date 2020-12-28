import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import { NavigationActions } from 'react-navigation'

import Colors from '../constant/colors';


const Drawer = (props) => {
    const navigate = (inputRoute) => {
        const navigateAction = NavigationActions.navigate({
            routeName: inputRoute
        });
        if(props.activeItemKey === inputRoute){
            props.navigation.toggleDrawer();
        }else{
            props.navigation.dispatch(navigateAction);
        }
    }


    return(
    <SafeAreaView style = {{flex: 1}}>
        <View style = {styles.DrawerContainer}>
            <ScrollView 
                style = {styles.DrawerList}
                contentContainerStyle = {{
                    flex: 1,
                    justifyContent: 'space-between'
                }}
            >
                <View style = {styles.DrawerListItem}>
                    <View 
                        style = {
                            props.activeItemKey === 'Meals'   
                            ? styles.SelectedDrawerItem
                            : styles.DrawerItem
                        } 
                            onTouchStart = {() => navigate('Meals')}   
                    >
                        <Text 
                            style = {
                                props.activeItemKey === 'Meals'   
                                ? styles.SelectedDrawerItemText
                                : styles.DrawerItemText
                            }
                        >Meals</Text>
                    </View>
                    <View 
                        style = {
                            props.activeItemKey === 'Filters'   
                            ? styles.SelectedDrawerItem
                            : styles.DrawerItem
                        }
                        onTouchStart = {
                            () => navigate('Filters')
                        }
                    >
                        <Text 
                            style = {
                                props.activeItemKey === 'Filters'   
                                ? styles.SelectedDrawerItemText
                                : styles.DrawerItemText
                            }
                        >Filters</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
)}

const styles = StyleSheet.create({
    DrawerContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: 83,
        backgroundColor: Colors.colorItemSelectedSidebar
    },
    DrawerList: {
        width: '100%'
    },
    DrawerListItem: {
        padding: 0
    },
    SelectedDrawerItem: {
        backgroundColor: Colors.colorWhite,
        padding: 15,
        paddingLeft: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    DrawerItem: {
        padding: 15,
        paddingLeft: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    SelectedDrawerItemText: {
        fontSize: 18,
        color: Colors.colorYellow,
        textTransform: 'capitalize'
    },
    DrawerItemText: {
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
        color: Colors.colorWhite,
        textTransform: 'capitalize'
    },
    User: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10
    }
})

export default Drawer;