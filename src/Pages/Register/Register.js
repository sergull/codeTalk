
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import styles from "./Register.style"
import { Formik } from 'formik';
import * as yup from 'yup';
import auth from "@react-native-firebase/auth";


const Register = ({ navigation }) => {

    const [loading, setLoading] = useState(false);

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            // .label("Email")
            .email("Lütfen geçerli bir e-mail adresi giriniz.")
            .required("Lütfen geçerli bir e-mail adresi giriniz."),
        password: yup
            .string()
            .required("Şifre boş bırakılamaz.")
            .min(8, "Şifrenizin en az 8 karakter olması gerekmektedir."),
        confirmPassword: yup
            .string()
            .required("Şifre boş bırakılamaz.")
            .label("Şifreyi Doğrula")
            .test("passwords-match", "Şifreler uyuşmalı", function (value) {
                return this.parent.password === value;
            })

    })


    const initialFormValues = {
        email: "",
        password: "",
        confirmPassword: ""

    }

    const handlePress = () => {
        navigation.navigate("LoginPage")
    }

    const handleFormSubmit = async ({email, password}) => {
        try{
            setLoading(true);
            await auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate("LoginPage");
            setLoading(false);

        } catch(error) {
            console.log(error.message);
            setLoading(false);
        }
        console.log(email, password)
    }

    return (
        <View style={styles.container}>
            <View style={styles.textCont}>
                <Text style={styles.text}>codetalks</Text>
            </View>
            <View>
                <Formik initialValues={initialFormValues} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
                    {({ values, handleChange, handleSubmit, touched, errors, setFieldTouched }) => (
                        <>
                            <Input value={values.email} onType={handleChange("email")} onBlur={() => setFieldTouched("email")} placeholder="E-postanızı giriniz..." />
                            {touched.email && errors.email &&
                                <Text style={{ fontSize: 13, color: '#D80032', fontStyle: 'italic', paddingLeft: 15, fontWeight: 'bold', paddingBottom: 5 }}>
                                    {errors.email}</Text>
                            }
                            <Input value={values.password} onType={handleChange("password")} isSecure onBlur={() => setFieldTouched("password")} placeholder="Şifrenizi giriniz..." />
                            {touched.password && errors.password &&
                                <Text style={{ fontSize: 13, color: '#D80032', fontStyle: 'italic', fontWeight: 'bold', paddingLeft: 15 }}>{errors.password}</Text>
                            }
                            <Input value={values.confirmPassword} onType={handleChange("confirmPassword")} isSecure onBlur={() => setFieldTouched("confirmPassword")} placeholder="Şifrenizi tekrar giriniz..." />
                            {touched.confirmPassword && errors.confirmPassword &&
                                <Text style={{ fontSize: 13, color: '#D80032', fontStyle: 'italic', fontWeight: 'bold', paddingLeft: 15 }}>{errors.confirmPassword}</Text>
                            }
                            <Button text="Kayıt Ol" onPress={handleSubmit} loading={loading} />
                        </>
                    )}
                </Formik>
                <Button text="Geri" theme="secondary" onPress={() => handlePress()} />
            </View>

        </View>
    );
}


export default Register;
