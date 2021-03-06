import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Button  } from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/List";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ route, navigation }) => {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const headerButtonPressHandler = () => {

    }


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton 
                        icon ="star"
                        color="white"
                        onPress={headerButtonPressHandler}
                    />
                );
            }
        });
    }, [navigation, headerButtonPressHandler]);

    return(
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <View>
                <MealDetails 
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                    textStyle={styles.detailText}
                />
                <View style={styles.listOuter}>
                    <View style={styles.listContainer}>
                        <Subtitle>Ingredients</Subtitle>
                        <List data={selectedMeal.ingredients}/>
                        <Subtitle>Steps</Subtitle>
                        <List data={selectedMeal.steps} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}



export default MealDetailsScreen;



const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: "100%",
        height: 350
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white"
    },
    detailText: {
        color: "white"
    },
    listContainer: {
        width: "80%"
    },
    listOuter: {
        alignItems: "center"
    }
});