import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';

import React, {useRef, useState} from 'react';

import { widthPercenteageToDP as wp, heigthPercenteage as hp } from 'reacct-native-responsive-screen';

import { StatusBar } from 'expo-status-bar';

import { Octicons } from '@expo/vector-icons';

import { useRouter} from 'expo-router';

import Loading from '../components/loading';

import CustomKeyboardView from '../components/customKeyboard';

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
<CustomKeyboardView>
            {/*StatusBar para configurar o estilo de barra de status*/}
    <StatusBar style="dark"/>
    <View style={{paddingTop: hp(8),
                  paddingHorizontal: wp(5)
                }} className="flex-1 gap-12">
                    {/*Exibe uma imagem no topo da tela*/}
                    <View className="items-center">
                        <Image style={{height: hp(25)}} resizeMode='contain' source={require('../assets/logo.png')} />
                    </View>

                        {/*Container dos campos de entrada e botões*/}  
        <View className="gap-10">
                        {/*Titulo da tela de login */}
                        <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sign In</Text>

                        {/*Campo de entrada de email e senha*/}
            <View className="gap-4">
                            {/*Campo de entrada de email*/}
                <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-x1">
                                <Octicons onChangenText={value => emailRef.current = value}
                                style={{fontSize: hp(2)}}
                                className="flex-1 font-semibold text-neutral-700"
                                placeholder='E-mail'
                                placeholderTextColor={'gray'} 
                                />

                                {/*Campo de entrada de senha*/}
                    <View className="gap-3">
                                <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-x1">
                                        <Octicons name="lock" size={hp(2.7)} color="gray" />
                                        <TextInput onChangeText={value => passwordRef.current = value}
                                        style={{fontSize: hp(2)}}
                                        className="flex-1 font-semibold text-neutral-700"
                                        plaveholder='Senha'
                                        secureTextEntry={true}
                                        placeholderTextColor={'gray'}
                                        />
                                </View>
                                {/*Link para a funcionalidade de "Esqueceu a senha?"*/}
                                <Text style={{fontSize: hp(2)}} className="font-semibold text-right text-neutral-500">Esqueceu a senha?</Text>
                                </View>

                                {/*'Botão de login'*/}
                                <View>
                                    {
                                    loading ? (
                                        <View className="flex-row justif'y-center">
                                            <Loading size={hp(6.5)}/>
                                        </View> ) :(
                                            <TouchableOpacity onPress={handleLogin} style={{height: hp(6.5)}} className="bg-indigo-500 rounded-x1 justify-center items-center">
                                                <Text style={{fontSize: hp(2)}} className="text-white font-bold tracking-wider">Sign In</Text>
                                            </TouchableOpacity>
                                        )
            }   
                                </View>

                                {/*Link para a funcionalidade de "Criar conta"*/}
                                    <View className="flex-row justify-center">
                                    <Text style={{fontSize: hp(2)}} className="font-semibold text-neutral-500">Não tem uma conta?</Text>
                                    <Pressable onPress={ () => router.push('signup')}>

                                    </Pressable>
                                    </View>
                </View>
            </View>
        </View>
    </View>
</CustomKeyboardView>    
    )

}