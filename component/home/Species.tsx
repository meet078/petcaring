import { FC } from "react";
import { FlatList, Image, StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { species } from "../../interface/Data";
import CustomView from "../utils/custom/CustomView";
import Text from "../utils/custom/Text";
interface speciesprops {
    species_data: species[],
}
const Species: FC<speciesprops> = ({ species_data }) => {
    const styles = StyleSheet.create({
        speciesstyle: {
            margin: 10,
            elevation: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        speciesImageContainer: {
            width: 100,
            borderRadius: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            elevation: 4,
            marginBottom: 5,
        },
        speciesImage: {
            height: 80,
            width: 80
        },
        speciestitle: {
            fontSize: 18,
        }
    });
    const SpeciesRender = ({ id, name, image, }: species) => {
        return (
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("orange", true, 65)}>
                <View style={styles.speciesstyle}>
                    <CustomView style={styles.speciesImageContainer}>
                        <Image source={{ uri: image }} style={styles.speciesImage} />
                    </CustomView>
                    <Text style={styles.speciestitle}>{name}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    };
    return <View style={{ paddingHorizontal: 8 }}>
        <FlatList data={species_data} renderItem={({ item }) => <SpeciesRender key={item.id} {...item} />} showsHorizontalScrollIndicator={false} horizontal={true} />
    </View>
}
export default Species;