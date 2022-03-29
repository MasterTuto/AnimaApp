import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { RootStackParamList } from "../../routes";

type Props = {
    navigator: NativeStackNavigationProp<RootStackParamList, 'Favorites'>;
    animal: Animal
}

export function AnimalItem({navigator, animal}: Props) {
    
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigator.push('Home', {animal}) }
        >
            <Image source={{uri: animal.image_link, width: 40, height: 40, cache: 'force-cache'}} style={styles.image} />
            <Text style={styles.text}>{animal.name} - {animal.latin_name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        borderRadius: 10,
        marginRight: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
    }
});