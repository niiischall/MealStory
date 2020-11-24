import React, { 
    useState, 
    useEffect, 
    useCallback 
} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
    HeaderButtons, 
    Item 
} from 'react-navigation-header-buttons';

import HeaderButton from '../component/HeaderButton';
import  Colors      from '../constant/colors';
import * as actions from '../store/action/action';


const RecipeScreen = (props) => {
    const [ Dish,  setDish  ] = useState(null);
    const [ theme, setTheme ] = useState('');
    const [ Stars, setStars ] = useState([]);

    const dishId     = props.navigation.getParam('dishId');
    const propTheme  = props.navigation.getParam('theme');

    const dispatch = useDispatch();
    const Dishes   = useSelector(store => store.reducer.dishes);
    const favDishes = useSelector(store => store.reducer.favoriteDishes);

    const isFavourite = favDishes.some(dish => dish.id === dishId);


    useEffect(() => {
        handleDish();
    }, [handleDish]);

    useEffect(() => {
        handleStars();
    }, [handleStars]);

    useEffect(() => {
        props.navigation.setParams({
            isFavourite: isFavourite
        })
    }, [isFavourite])

    useEffect(() => {
        props.navigation.setParams({
            setFavourite: setFavourite
        })
    }, [setFavourite])

    const handleDish = useCallback(() => {
        const fetchedDish = Dishes.find((dish) => {
            return dish.id === dishId;
        });

        setDish(fetchedDish);
        setTheme(propTheme);
    });

    const setFavourite = useCallback(() => {
        dispatch(actions.setFavorite(dishId));
    }) 

    const handleStars = useCallback(() => {
        if(Dish){
            const complexity = Dish.complexity;
            if(complexity === 'simple'){
                setStars(['star-1', 'star-2']);
            }else if(complexity === 'hard'){
                setStars(['star-1', 'star-2', 'star-3']);
            }else if(complexity === 'challenging'){
                setStars(
                    ['star-1', 'star-2', 'star-3', 'star-4 ', 'star-5']
                );
            }else{
                setStars([' ']);
            }
        }
    });

    return(
    <SafeAreaView style = {{flex: 1}}>
        <ScrollView>
            {
                Dish && 
                <Image 
                    style  = {styles.RecipeImage}
                    source = {{uri: Dish.imgURL}}
                />
            }
            {
                Stars && 
                <View 
                    style = {styles.StarContainer}>
                    {
                        Stars.map((star) => {
                            return(
                            <Ionicons 
                                key   = {star}
                                name  = "md-star"
                                color = {Colors.colorYellow}
                                size  = {24}
                                style = {{marginHorizontal: 5}}
                            />
                            )
                        })
                    }
                </View>
            }
            {
                Dish &&
                <View style = {styles.RecipeDetail}>
                    <View style = {styles.RecipeHeadline}>
                        <Text style = {{
                            color: theme,
                            ...styles.Headline
                        }}>
                            {Dish.title}
                        </Text>
                    </View>
                    <View style = {styles.RecipeSubHeadline}>
                        <View style = {styles.SubTextContainer}>
                            <Ionicons 
                                name  = "md-star"
                                color = {theme}
                                size  = {24} 
                                style = {{marginHorizontal: 7}}
                            />
                            <Text style = {styles.SubText}>
                                {Dish.complexity}
                            </Text>
                        </View>
                        <View style = {styles.SubTextContainer}>
                            <Ionicons 
                                name  = "md-stopwatch"
                                color = {theme}
                                size  = {24} 
                                style = {{marginHorizontal: 7}}
                            />
                            <Text style = {styles.SubText}>
                                {Dish.duration} minutes
                            </Text>
                        </View>
                        <View style = {styles.SubTextContainer}>
                            <Ionicons 
                                name  = "logo-usd"
                                color = {theme}
                                size  = {24} 
                                style = {{marginHorizontal: 7}}
                            />
                            <Text style = {styles.SubText}>
                                {Dish.affordability}
                            </Text>
                        </View>
                    </View>
                </View> 
            }
            {
                Dish &&
                <View style = {styles.IngredientContainer}>
                    <View style = {{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Ionicons 
                            name  = "md-cart"
                            size  = {40}
                            color = {theme} 
                        />
                        <Text style = {{
                            color: theme,
                            ...styles.title
                        }}>
                            Shopping List
                        </Text>
                    </View>
                    <View style = {styles.ingredients}>
                        {
                            Dish.ingredients.map((ing) => {
                                return(
                                    <Text
                                        key   = {ing} 
                                        style = {styles.ing}
                                    >
                                        {ing}.
                                    </Text>
                                )
                            })
                        }
                    </View>
                </View>
            }
            {
                Dish &&
                <View style = {styles.StepsContainer}>
                    <View style = {{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Ionicons 
                            name  = "md-chatbubbles"
                            size  = {40}
                            color = {theme} 
                        />
                        <Text style = {{
                            color: theme,
                            ...styles.title
                        }}>
                            Preparation
                        </Text>
                    </View>
                    <View style = {styles.Steps}>
                        {
                            Dish.steps.map((step) => {
                                return( 
                                    <View 
                                        key={step}
                                        style={styles.Step}
                                    >
                                    <Ionicons 
                                        name = "md-checkmark-circle"
                                        size  = {24}
                                        color = {theme}
                                        style = {{marginHorizontal: 7}}
                                    />
                                    <View style = {
                                        styles.stepView
                                    }>
                                        <Text
                                            key   = {step} 
                                            style = {styles.stepText}
                                        >
                                            {step}.
                                        </Text>
                                    </View>
                                </View>
                                )
                            })
                        }
                    </View>
                </View>
            }
            </ScrollView>
        </SafeAreaView>
    )
}

RecipeScreen.navigationOptions = (navData) => {
    const theme   = navData.navigation.getParam('theme');
    const title   = navData.navigation.getParam('dishTitle');
    const isFav   = navData.navigation.getParam('isFavourite');
    const setFav  = navData.navigation.getParam('setFavourite');

    return {
        title: title,
        headerStyle: {
            backgroundColor: theme
        },
        headerRight: () => 
        <HeaderButtons
            HeaderButtonComponent = {HeaderButton}
        >
            <Item 
                iconName = {
                    isFav 
                    ? "ios-heart"
                    : "heart-outline"
                }
                title    = "FAV"
                onPress  = {setFav}
            />
        </HeaderButtons>,
    }
}

const styles = StyleSheet.create({
    RecipeImage: {
        width: '100%',
        height: 225,
    },
    StarContainer: {
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    RecipeDetail: {
        width: '100%'
    },
    RecipeHeadline: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
    },
    Headline: {
        fontSize: 18
    },
    RecipeSubHeadline: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-around'
    },
    SubTextContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }, 
    SubText: {
        fontSize: 14,
        color: Colors.colorHeadingText,
        textTransform: 'capitalize'
    },
    IngredientContainer: {
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        textTransform: 'uppercase',
        marginLeft: 10
    }, 
    ingredients: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 10,
    },
    ing: {
        fontSize: 16,
        color: Colors.colorHeadingText 
    },
    StepsContainer: {
        width: '100%',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Steps: {
        paddingVertical: 15,
        paddingHorizontal: 30
    },
    Step: {
        flexDirection: 'row',
        marginVertical: 5
    },
    stepView: {
        width: '90%'
    },
    stepText: {
        flexWrap: 'wrap',
        fontSize: 16,
        color: Colors.colorHeadingText 
    }
})

export default RecipeScreen;