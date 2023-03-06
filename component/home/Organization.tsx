import { FC } from "react"
import { FlatList, ImageBackground, View } from "react-native"
import { petorganization } from "../../interface/Data"
import { flatListContainer, imagebackground, itemContainer, organizationname, ratingbox, ratingtext, textcontainer } from "../../style/home/Organization"
import Text from "../utils/custom/Text"
import Icon from "../utils/Icon"
export interface organizatonprops {
    listHeaderComponent: JSX.Element,
    petorganizationdata: Pick<petorganization, "id" | "name" | "profileimage">[],
}
const Organizaton: FC<organizatonprops> = ({ listHeaderComponent, petorganizationdata }) => {
    const Organizatoncardrender: FC<Pick<petorganization, "id" | "name" | "profileimage">> = ({ id, name, profileimage }) => <View style={itemContainer}>
        <ImageBackground source={{ uri: profileimage }} style={imagebackground}>
            <View style={ratingbox}>
                <Text style={ratingtext}>5 |</Text>
                <Icon style={ratingtext} value='star' size={15} />
            </View>
        </ImageBackground>
        <View style={textcontainer}>
            <Text style={organizationname}>{name}</Text>
        </View>
    </View>
    return <FlatList
        ListHeaderComponent={listHeaderComponent}
        numColumns={2} data={petorganizationdata} renderItem={({ item }) => <Organizatoncardrender key={item.id} {...item} />} contentContainerStyle={flatListContainer} />
}
export default Organizaton;