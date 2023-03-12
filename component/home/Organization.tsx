import { FC, useContext } from "react"
import { FlatList, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
import AppContext from "../../context/AppContext"
import { petorganization } from "../../interface/Data"
import CustomView from "../utils/custom/CustomView"
import Text from "../utils/custom/Text"
import Icon from "../utils/custom/Icon"
export interface organizatonprops {
    listHeaderComponent: JSX.Element,
    petorganizationdata: Pick<petorganization, "id" | "name" | "profileimage">[],
}
const Organizaton: FC<organizatonprops> = ({ listHeaderComponent, petorganizationdata }) => {
    const appState = useContext(AppContext);
    const styles = StyleSheet.create({
        flatListContainer: {
            display: "flex", paddingBottom: 10
        },
        itemRoot: {height: 250, width: "47%", margin: "1.5%", borderRadius: 10, overflow: 'hidden', elevation: 5},
        itemContainer: { flex: 1},
        textcontainer: { padding: 10 },
        organizationname: { fontWeight: "bold", fontSize: 20 },
        ratingbox: { flexDirection: "row", backgroundColor: "green", padding: 3, marginStart: "auto", alignItems: "center", borderRadius: 5 },
        ratingtext: { color: "white" },
        imagebackground: { flex: 1, padding: 10 },
    })
    const Organizatoncardrender: FC<Pick<petorganization, "id" | "name" | "profileimage">> = ({ id, name, profileimage }) => (
        <CustomView style={styles.itemRoot}>
            <TouchableOpacity style={{ elevation: 5, shadowColor: appState?.colorValue.shadowColor, flex: 1 }}>
            <View style={styles.itemContainer}>
                <ImageBackground source={{ uri: profileimage }} style={styles.imagebackground}>
                    <View style={styles.ratingbox}>
                        <Text style={styles.ratingtext}>5 |</Text>
                        <Icon style={styles.ratingtext} value='star' size={15} />
                    </View>
                </ImageBackground>
                <View style={styles.textcontainer}>
                    <Text style={styles.organizationname}>{name}</Text>
                </View>
            </View>
        </TouchableOpacity>
        </CustomView >
    )
return <FlatList
    ListHeaderComponent={listHeaderComponent}
    numColumns={2} data={petorganizationdata} renderItem={({ item }) => <Organizatoncardrender key={item.id} {...item} />} contentContainerStyle={styles.flatListContainer} />
}
export default Organizaton;