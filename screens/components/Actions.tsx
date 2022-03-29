import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';

interface Props {
    onNewAnimal: () => void;
    navigator: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export function Actions({onNewAnimal, navigator}: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, styles.bookmarkButton]}
                onPress={() =>  navigator.navigate("Favorites")
                }
            >
                <View>
                    <Icon name="bookmark-outline" size={24}/>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={onNewAnimal} style={[styles.button, styles.mainAction]}>
                <Icon style={styles.mainActionText} name="dice-multiple" size={24} />
                <Text style={styles.mainActionText}>Novo aleatório</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    button: {
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    bookmarkButton: {
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
    mainAction: {
        marginLeft: 10,
        flex: 8,
        backgroundColor: Colors.primaryInteraction
    },
    mainActionText: {
        color: 'white'
    }
})