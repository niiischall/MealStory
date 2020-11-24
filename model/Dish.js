class Dish {
    constructor(
        id, 
        mealIds, 
        title, 
        affordability, 
        complexity, 
        imgURL, 
        duration, 
        ingredients, 
        steps, 
        isGlutenFree, 
        isVegan,
        isVegetarian, 
        isLactoseFree,
        theme
    ){
        this.id = id,
        this.mealIds = mealIds, 
        this.title = title, 
        this.affordability = affordability, 
        this.complexity = complexity, 
        this.imgURL = imgURL, 
        this.duration = duration, 
        this.ingredients = ingredients, 
        this.steps = steps, 
        this.isGlutenFree = isGlutenFree, 
        this.isVegan = isVegan,
        this.isVegetarian = isVegetarian, 
        this.isLactoseFree = isLactoseFree,
        this.theme = theme
    }
}

export default Dish;