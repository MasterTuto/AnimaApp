import React, { useState, useEffect } from 'react';
import {
    View,
    ActivityIndicator,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    TouchableOpacity,
    Share
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Title } from './components/Title';
import { Data } from './components/Data';
import { Actions } from './components/Actions';
import { useDatabase } from '../hooks/useDatabase';

import { HomeProps } from '../routes';

export function Home({navigation, route}: HomeProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [animal, setAnimal] = useState<Animal>(route.params.animal);
    const [favorite, setFavorite] = useState(false);

    const { width, height } = useWindowDimensions();

    const [db, favorites] = useDatabase();


    const loadAnimal = () => {
        
        fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
            .then(resp => resp.json())
            .then(
                jsonResp => setAnimal( jsonResp as Animal )
            )
    }

    useEffect(() => {
        if (!animal)
            (async () => {
                await loadAnimal();
                setIsLoading(false);
            })();
        else
            setIsLoading(false);
        
        return () => {};
    }, []);

    useEffect(() => {
        (async () => {
            if (animal) {
                favorites.has(animal.id, (fav) => setFavorite(fav) );
            }
        })();
    }, [animal])

    if (isLoading || !animal)
        return <ActivityIndicator  />

    
    return (
        <View style={styles.container} >
            <ScrollView
                style={styles.dataContainer}
            >

                <Image
                    source={{uri: animal.image_link, width: width*0.75, height: height*0.43}}
                    style={styles.imageTitle}
                    loadingIndicatorSource={require('../assets/placeholder-image.png')}
                />
                
                <View
                    style={styles.titleContainer}
                >
                    <Title title={animal.name} subtitle={animal.latin_name} />
                    <TouchableOpacity
                        onPress={() => {
                            if (favorite) {
                                favorites.remove(animal.id);
                                setFavorite(false);
                            } else {
                                favorites.add(animal);
                                setFavorite(true);
                            }
                        }}
                    >
                        <MaterialCommunityIcons
                            name={ favorite ? 'heart' : 'heart-outline' }
                            size={24}
                        />
                    </TouchableOpacity>
                </View>
                <Data
                    length={`${animal.length_min} - ${animal.length_max}ft`}
                    weight={`${animal.weight_min} - ${animal.weight_max}lb`}
                    habitat={animal.habitat}
                    diet={animal.diet}
                />
            </ScrollView>
            
            <Actions
                navigator={navigation}
                onNewAnimal={() => loadAnimal()}
                
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 40,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    dataContainer: {
        flex: 1,
    },
    imageTitle: {
        alignSelf: 'center',
        resizeMode: 'contain',
        borderRadius: 20,
    }
});