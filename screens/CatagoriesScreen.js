import { FlatList } from "react-native";
import CatagoryGridTile from "../components/CatagoryGridTile";
import { CATEGORIES } from "../data/dummy-data";


const CatagoriesScreen = ({ navigation }) => {

    const renderCatagoryItem = (itemData) => {
        const onPressHandler = () => {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id,
            });
        }
    
        return (
            <CatagoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onPress={onPressHandler}
            />
        );
    }
    
    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}
            renderItem={renderCatagoryItem}
            numColumns={2}
        />
    )
}



export default CatagoriesScreen;