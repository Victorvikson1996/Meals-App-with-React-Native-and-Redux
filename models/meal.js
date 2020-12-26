class Meal {
    constructor(
        id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.imageUrl = imageUrl;
        this.title = title;
        this.ingredients = ingredients;
        this.steps = steps;
        this.duration = duration;
        this.complexity = complexity;
        this.affordability = affordability;
        this.isVegan = isVegan;
        this.isGlutenFree = isGlutenFree;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;

    }
}


export default Meal;