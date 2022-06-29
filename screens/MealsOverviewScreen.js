import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverViewScreen = ({ route, navigation }) => {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => {
            return category.id === catId
        }).title;
    
        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);



    const renderMealItem = (itemData) => {
        return (
            <MealItem 
                id={itemData.item.id}
                title={itemData.item.title} 
                imageURL={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
            />
        )
    }
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem} 
            />
        </View>
    )
}



export default MealsOverViewScreen



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})




// import { useRoute } from "@react-navigation/native";
// const router = useRoute(); alternatiive
// router.params