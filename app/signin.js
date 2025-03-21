import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';

import React, {useRef, useState} from 'react';

import { widthPercenteageToDP as wp, heigthPercenteage as hp } from 'reacct-native-responsive-screen';

import { StatusBar } from 'expo-status-bar';

import { Octicons } from '@expo/vector-icons';

import { useRouter} from 'expo-router';

import Loading from '../components/loading';

import CustomKeyboard from '../components/customKeyboard';

import { useAuth } from '../contexts/auth';


export default function SignIn() {
    const router = useRouter();
    const { Loading, setLoading } = useState(false);
    const { login } = useAuth();
    
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleLogin = async () => {
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert('SignIn', "Preencha todos os campos");
            return;
        }

        setLoading(true);
        const response = await login(emailRef.current, passwordRef.current);
        setLoading(false);
        if (!response.suceess) {
            Alert.alert('SignIn', response.msg);
        }
        
}
return(
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }}>
        <StatusBar style="auto" />
        <Image
            source={require('../assets/logo.png')}
            style={{
                width: wp('50%'),
                height: hp('10%'),
                marginBottom: hp('5%')
            }}
            resizeMode="contain"
        />
        <TextInput
            ref={emailRef}
            style={{
                width: wp('80%'),
                height: hp('7%'),
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                padding: 10,
                marginBottom: hp('2%')
            }}
            placeholder="Email"
            keyboardType="email-address"
        />
        <TextInput
            ref={passwordRef}
            style={{
                width: wp('80%'),
                height: hp('7%'),
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                padding: 10,
                marginBottom: hp('2%')
            }}
            placeholder="Senha"
            secureTextEntry={true}
        />
        <Pressable
            onPress={handleLogin}
            style={{
                width: wp('80%'),
                height: hp('7%'),
                backgroundColor: '#1E90FF',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                marginBottom: hp('2%')
            }}
        >
            <Text style={{
                color: '#fff',
                fontSize: 18
            }}>Entrar</Text>
        </Pressable>
        <Pressable
            onPress={() => router.push('SignUp')}
            style={{
                width: wp('80%'),
                height: hp('7%'),
                backgroundColor: '#1E90FF',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                marginBottom: hp('2%')
            }}
        >
            <Text style={{
                color: '#fff',
                fontSize: 18
            }}>Cadastrar-se</Text>
        </Pressable>
        <CustomKeyboard
            visible={Loading}
        />
    </View>
)

}