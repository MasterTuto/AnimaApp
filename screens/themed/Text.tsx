import React from 'react';
import {
    Text as NativeText,
    StyleSheet,
    TextProps
} from 'react-native';
import Colors from '../../constants/Colors';

export function Text({children, style, ...remainingProps}: TextProps) {
    return (
        <NativeText style={[styles.text, style]} {...remainingProps}>
            {children}
        </NativeText>
    );
}

const styles = StyleSheet.create({
    text: {
        color: Colors.mainText,
        fontSize: 13,
        fontWeight: '800',
    }
});