import { TextInput, type TextInputProps, StyleSheet } from 'react-native';
import {useState} from "react";

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextInputProps = TextInputProps & {
    lightColor?: string;
    darkColor?: string;

};

export function ThemedTextInput({
                               style,
                               lightColor,
                               darkColor,
                               ...rest
                           }: ThemedTextInputProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    const [text, onChangeText] = useState('Useless Text');
    const [number, onChangeNumber] = useState('');
    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            {...rest}
        />

    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
