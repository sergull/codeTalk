
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import styles from "./Login.style"
import { Formik } from 'formik';
import * as Yup from 'yup';
import auth from "@react-native-firebase/auth";


const Login = ({ navigation }) => {

    const [loading, setLoading] = useState(false); 

    const validationSchema = Yup.object().shape({

        email: Yup
          .string()
          // .label("Email")
          .email("Lütfen geçerli bir e-mail adresi giriniz.")
          .required(),
        password: Yup
          .string()
          .required("Şifre boş bırakılamaz.")
          .min(8, "Şifrenizin en az 8 karakter olması gerekmektedir.")
      
      })
      
      const initialFormValues = {
        email: "",
        password: ""
      }


    const handlePress = () => {
        navigation.navigate("RegisterPage")
    }

    const handleFormSubmit = async ({email, password}) => {
        try{
            setLoading(true);
            await auth().signInWithEmailAndPassword(email, password);
            navigation.navigate("RoomsPage");
            setLoading(false);
        } catch (error){
            console.log(error.message);
            setLoading(false);
        }
        console.log(email, password)    }

    return (
        <View style={styles.container}>
            <View style={styles.textCont}>
                <Text style={styles.text}>codetalks</Text>
            </View>
            <View>
                <Formik initialValues={initialFormValues} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
                    {({ values, handleChange, handleSubmit, touched, errors, setFieldTouched }) => (
                        <>
                            <Input value={values.email} onType={handleChange("email")} placeholder="E-postanızı giriniz..." onBlur={() => setFieldTouched('email')}  />
                            {touched.email && errors.email && (
                                <Text style={{ fontSize: 13, color: '#D80032', fontStyle: 'italic', paddingLeft: 15, fontWeight: 'bold', paddingBottom: 5 }}>{errors.email}</Text>
                            )}
                            <Input value={values.password} onType={handleChange("password")} placeholder="Şifrenizi giriniz..." isSecure  onBlur={() => setFieldTouched('password')}  />
                            {touched.password && errors.password && (
                                <Text style={{ fontSize: 13, color: '#D80032', fontStyle: 'italic', paddingLeft: 15, fontWeight: 'bold', paddingBottom: 5 }}>{errors.password}</Text>
                            )}
                            <Button text="Giriş Yap" onPress={handleSubmit}/>
                        </>
                    )}
                </Formik>
                <Button text="Kayıt Ol" theme="secondary" onPress={() => handlePress()} loading={loading} />
            </View>
        </View>
    );
}


export default Login;
