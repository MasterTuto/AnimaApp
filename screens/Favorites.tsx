import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';
import { useDatabase } from "../hooks/useDatabase";
import { RootStackParamList } from "../routes";

import { AnimalItem } from './components/AnimalItem';

export function Favorites({navigation}: NativeStackScreenProps<RootStackParamList, 'Favorites'>) {
    const [favoritesList, setFavoritesList] = useState<Animal[]>([]);

    const [db, favoriteDb] = useDatabase();

    useEffect( ( ) =>{
        const unsubscriber = navigation.addListener('focus', (_) => {
            favoriteDb.all(animals => setFavoritesList(animals));
        });

        return unsubscriber
    }, [])
    
    const Separator = () => <View style={styles.separator}></View>;

    return (
        <FlatList
            data={favoritesList}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({item}) => <AnimalItem animal={item} navigator={navigation} />}
            ItemSeparatorComponent={() => <Separator />}
        />
    )
}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        width: '60%',
        alignSelf: 'center'
    }
})