
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import styles from "./Login.style"


const Login = ({navigation}) => {

    const handlePress = () => {
        navigation.navigate("RegisterPage")
    }


    return (
        <View style={styles.container}>
            <View style={styles.textCont}>
                <Text style={styles.text}>codetalks</Text>
            </View>
            <View>
                <Input placeholder="E-postanızı giriniz..." />
                <Input placeholder="Şifrenizi giriniz..." />
                <Button text="Giriş Yap"/>
                <Button text="Kayıt Ol" theme="secondary" onPress={()=>handlePress()}/>
            </View>
        </View>
    );
}


export default Login;
