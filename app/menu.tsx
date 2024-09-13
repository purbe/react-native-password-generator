
import {StyleSheet, ScrollView, SafeAreaView, TextInput, Button} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {useState,useCallback, useEffect} from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox/lib";
import Slider from "@react-native-community/slider";

export default function passwordGenerator() {
    const [password, setPassword] = useState('')
    const [passwordLength,setPasswordLength]=useState(8)
    const [isPassGenerated, setIsPassGenerated] = useState(false)

    const [lowerCase, setLowerCase] = useState(true)
    const [upperCase, setupperCase] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(false)

    const passwordGenerate = useCallback(() => {

        let pwd=''
        let str='zxcvbnmlkjhgfdsaqwertyuiop'
        if(upperCase) str+='QWERTYUIOPASDFGHJKLZXCVBNM'
        if(numbers) str += '1234567890';
        if(symbols) str +='~@#$*{}!^&';
        for(let i= 0; i<passwordLength ; i++){
            let char = Math.floor(Math.random() * str.length+1)
            pwd += str.charAt(char)
        }
        setPassword(pwd)
    },[passwordLength, numbers])


    useEffect(()=> {
        passwordGenerate();
    },[numbers,passwordLength,upperCase,lowerCase,symbols,passwordGenerate])

    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <SafeAreaView style={styles.appContainer}>
                <ThemedView style={styles.formContainer}>
                    <ThemedText style={styles.title}>Password Generator</ThemedText>
                </ThemedView>
                <ThemedView>
                    <ThemedText > Password Length</ThemedText>
                    <Slider
                        minimumValue={8}
                        maximumValue={20}
                        step={1}
                        value={passwordLength}
                        onSlidingComplete={(value)=>setPasswordLength(value)}
                    />
                    <ThemedText> {passwordLength}</ThemedText>
                    <ThemedText> include number only </ThemedText>
                   <BouncyCheckbox
                       isChecked={numbers}
                       disableText
                       fillColor="green"
                       size={30}
                       useBuiltInState={false}
                       onPress={() => setNumbers(!numbers)}
                   />
                    <ThemedText>include Upper Case</ThemedText>
                    <BouncyCheckbox
                        isChecked={upperCase}
                        disableText
                        fillColor="green"
                        size={30}
                        useBuiltInState={false}
                        onPress={() => setupperCase(!upperCase)}
                    />

                    <ThemedText>include Lower Case</ThemedText>
                    <BouncyCheckbox
                        isChecked={lowerCase}
                        disableText
                        fillColor="green"
                        size={30}
                        useBuiltInState={false}
                        onPress={() => setLowerCase(!lowerCase)}
                    />

                    <ThemedText>include symbol</ThemedText>
                    <BouncyCheckbox
                        isChecked={symbols}
                        disableText
                        fillColor="green"
                        size={30}
                        useBuiltInState={false}
                        onPress={() => setSymbols(!symbols)}
                    />

                </ThemedView>

                <ThemedView >
                    <TextInput
                        style={styles.inputStyle}
                        value={password}
                        placeholder='password'
                        readOnly
                    />
                   <Button title={'copy'}/>

                </ThemedView>

            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    appContainer: {
        flex: 1,
    },
    formContainer: {
        margin: 8,
        padding: 8,
    },
    title: {
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 15,
    },
    inputStyle: {
        padding: 8,
        width: '30%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#16213e',
    },
});
