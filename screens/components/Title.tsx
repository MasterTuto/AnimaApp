import React from 'react';
import {useFonts, BebasNeue_400Regular} from '@expo-google-fonts/bebas-neue';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Colors from '../../constants/Colors';

interface Props {
    title: string;
    subtitle: string;
};

export function Title({title, subtitle}: Props) {
    const [fontsLoaded] = useFonts({BebasNeue_400Regular});

    if (!fontsLoaded) {
        return <View style={styles.loadingView}></View>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title} selectable>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    loadingView: {

    },
    title: {
        fontFamily: 'BebasNeue_400Regular',
        
        fontSize: 24,
    },
    subtitle: {
        fontFamily: 'BebasNeue_400Regular',
        color: Colors.secondaryText,
        fontSize: 14,
    }
});