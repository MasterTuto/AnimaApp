import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

import { Text }  from '../themed/Text'

interface Props {
    length: string,
    weight: string,
    habitat: string,
    diet: string,
};

export function Data({length, weight, habitat, diet}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.rowItem}>
                    <Entypo
                        name="ruler"
                        color={Colors.secondaryText}
                        size={21}
                    />
                    <Text style={styles.dataText}>{length}</Text>
                </View>

                <View style={styles.rowItem}>
                    <MaterialCommunityIcons
                        name='weight-pound'
                        color={Colors.secondaryText}
                        size={21}
                    />
                    <Text style={styles.dataText}>{weight}</Text>
                </View>
            </View>

            <View style={styles.row}>
                <MaterialCommunityIcons name='home' size={21}/>
                <Text style={styles.dataText}>
                    {habitat}
                </Text>
            </View>

            <View style={styles.row}>
                <MaterialCommunityIcons name='food' size={21}/>
                <Text style={styles.dataText}>
                    {diet}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    content: {

    },
    row: {
        flexDirection: 'row',
        paddingTop: 20,
        alignItems: 'center',
    },
    rowItem: {
        flexDirection: 'row',
        marginRight: 40,
        alignItems: 'center'
    },
    dataText: {
        marginLeft: 5,
    }
});