
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import styles from "./Register.style"


const Register = ({navigation}) => {

    const handlePress = () => {
        navigation.navigate("LoginPage")
    }


    return (
        <View style={styles.container}>
            <View style={styles.textCont}>
                <Text style={styles.text}>codetalks</Text>
            </View>
            <View>
                <Input placeholder="E-postanızı giriniz..." />
                <Input placeholder="Şifrenizi giriniz..." />
                <Input placeholder="Şifrenizi tekrar giriniz..." />
                <Button text="Kayıt Ol"/>
                <Button text="Geri" theme="secondary" onPress={()=>handlePress()}/>
            </View>
        </View>
    );
}


export default Register;
