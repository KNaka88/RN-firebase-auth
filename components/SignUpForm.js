import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import api from '../api.js';

const SignUpForm = () => {
    const [phone, setPhone] = useState('');

    const onSubmit = async () => {
        try {
            await api.post('/createUser', { phone });
            await api.post('/requestOneTimePassword', { phone });    
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

export default SignUpForm;
