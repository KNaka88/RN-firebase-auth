import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import api from '../api.js';
import firebase from 'firebase';

const SignInForm = () => {
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');

    const onSubmit = async () => {
        try {
            const { data } = await api.post('/verifyOneTimePassword', { phone, code });
            firebase.auth().signInWithCustomToken(data.token);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <View>
            <Input 
                style={styles.input}
                label='Enter Phone Number'
                onChangeText={setPhone}
            />
            <Input 
                style={styles.input}
                label='Enter Code'
                onChangeText={setCode}
            />

            <Button
                onPress={() => onSubmit()}
                title="Submit"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 10
    }
})

export default SignInForm;
