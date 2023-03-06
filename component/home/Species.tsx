import { FC } from "react";
import { FlatList, Image, TouchableNativeFeedback, View } from "react-native";
import { species } from "../../interface/Data";
import { speciesImage, speciesImageContainer, speciesstyle, speciestitle } from "../../style/home/Species";
import Text from "../utils/custom/Text";
interface speciesprops {
    species_data: species[],
}
const Species: FC<speciesprops> = ({ species_data }) => {
    const SpeciesRender = ({ id, name, image, }: species) => {
        return (
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("orange", true, 65)}>
                <View style={speciesstyle}>
                    <View style={speciesImageContainer}>
                        <Image source={{ uri: image }} style={speciesImage} />
                    </View>
                    <Text style={speciestitle}>{name}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    };
    return <View style={{paddingHorizontal: 8}}>
        <FlatList data={species_data} renderItem={({ item }) => <SpeciesRender key={item.id} {...item} />} showsHorizontalScrollIndicator={false} horizontal={true} />
    </View>
}
export default Species;