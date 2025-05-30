//importa componentes do React Native para estruturar a interface e interatividade
import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from "react-native";
 
//import React, hooks de estado e referência para gerenciar os inputs e estado de carregamento
import React, {useRef, useState} from "react";
 
//importa funções para criar layouts responsivos com base no tamanho da tela
import {widthPercentageToDP as wp, heightPercentage as hp} from
'react-native-responsive-screen';
 
//importa o componente StatusBar para controlar a barra de status
import { StatusBar } from "expo-status-bar";
 
//importa icones do pacote expo, como icone de email e cadeado para o input de senha
import {Octicons} from '@expo/vector-icons';
 
//importa o hook da navegação do expo-router para navegação entre telas
import {useRouter} from 'expo-router';
 
//importa componentes personalizados, como carregamneto e o gerenciamento de teclado customizado
import Loading from '../components/loading';
 
import CustomKeyboardView from '../components/CustomKeyboardView';
 
//importa o contexto de autenticacao para gerenciar login
import {useAuth} from '../context/authContext';
 
//Funcao de componente para a tela de login
export default function SignIn() {
    //hook de navegação para redirecionar o usuario apos o login
    const router = useRouter();
 
    //useState para gerenciar o estado de carregamento o login processado
    const [loading, setLoading] = useState(false);
 
    //hook do contexto de autenticação, que inclui a função login
    const {login} = useAuth();
 
    //useRef cria referências para os inputs de emails e senhas
    const emailRef = useRef("");
    const passwordRef = useRef("");
 
    //funcao que lida com o processo de login
    const handleLogin = async () => {
        //verifica se os campos de email e senha estao preenchidos
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert('Sign In', "Por Favor, preencha todos os campos");
            return;
        }
 
        //ativa o estado de carregamento e tanta fazer o login com os dados fornecidos
        setLoading(true);
        const response = await login(emailRef.current, passwordRef.current);
        setLoading(false);
 
        //se no login falhar, exibe uma mensagem de erro
        if (!response.success) {
            Alert.alert('Sign In', response.msg);
        }
    }
    return (
        //view customizada para ajustar o layout do teclado ao campo de entrada de texto
        <CustomKeyboardView>
            {/* Statusbar para configurar o estilo de barra de status */}
            <StatusBar style="dark"/>
            <View style={{paddingTop: hp(8), paddingHorizontal: wp(5)}} className="flex-1 gap-12">
                <View style="items-center">
                    <Image style={{height: hp(25)}} resizeMode="contain" source={require('../assets/images/login.png')}/>
                </View>
 
                {/* Container dos campos de entradad de botoes */}
                <View className="gap-10">
                    {/* Titulo da tela de login */}
                    <Text style={{fontSize: hp(4)}} className="font-bold-tracking-wider text-center text-neutral-800">
                        Sign In </Text>
 
                        {/* Campos de entraeda de email e senha */}
                        <View className="gap-4">
                            {/* Campo de entradad de email */}
                            <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-x1">
                                <Octicons name="email" size={hp(2.7)} color="gray" />
                                <TextInput    
                                onChangeText={value => emailRef.ref.current = value}
                                style={{fontSize: hp(2)}}
                                className="flex-1 font-semibold text-neutral-700"
                                placeholder='E-mail'
                                placeholderTextColor={'gray'}
                                />      
                            </View>
 
                            {/* Campo de senha */}
                            <View className="gap-4">
                            {/* Campo de entradad de senha */}
                            <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-x1">
                                <Octicons name="lock" size={hp(2.7)} color="gray" />
                                <TextInput    
                                onChangeText={value => emailRef.ref.current = value}
                                style={{fontSize: hp(2)}}
                                className="flex-1 font-semibold text-neutral-700"
                                placeholder='E-mail'
                                placeholderTextColor={'gray'}
                                />      
                            </View>
                                {/* Link para a funcionalidade de "esqueci minah senha" */}
                                <Text style={{fontSize: hp(1.8)}} className="font-semibold text-right text-neutral-500">
                                    Esqueceu a senha?
                                </Text>
                            </View>
                            {/* Botao de envio do formulario de login */}
                            <View>
                                {
                                    loading ? (
                                        <View className="flex-row justify-center">
                                            <Loading size={hp(6.5)}/>
                                        </View>
                                    ) : (
                                        <TouchableOpacity onPress={handleLogin} style={{height: hp(6.5)}}
                                        className="bg-indigo-500 rounded-x1 justify-center items-center">
                                            <Text style={{fontSize: hp(2.7)}} className="text-white font-bold
                                            tracking-wider">
                                                Sign In
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                            {/* Texto para redirecionar o usuario para a tela de registro/cadastro */}
                            <View className="flex-row justify-center">
                                <Text style={{fontSize: hp(1.8)}} className="font-semibold text-neutral-500">
                                    Não tem uma conta?
                                </Text>
                                <Pressable onPress={() => router.push('signUp')}>
                                    <Text style={{fontSize: hp(1.8)}} className="font-semibold text-neutral-500">
                                        Sign Up
                                    </Text>
                                </Pressable>
                            </View>
                        </View>        
                </View>
            </View>
        </CustomKeyboardView>
    )
}                          
 