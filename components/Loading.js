//importção de componentes básicos do react native
import {View, Text} from 'react-native';
 
//importação do react
import React from 'react';
 
//importação da biblioteca Lottie para animações
//Lottie permite usar animaões JSON criadas no After Effects/Figma
import LottieView from 'lottie-react-native';
 
/**
 * Componente Loading
 *
 * Este componente renderiza uma animação de carregamento usando Lottie
 *
 * @param {number} size - Tamanho do indicador de carregamento (altura em unidades de medida do React Native)
 * @returns {JSX.Element} - Componente de carregamento
 */
 
export default function Loading({size}) {
    return (
        //container que envolve a animação
        //Usa a propriedade size para definir altura
        //aspectRatio 1 garante que o componente seja quadrado perfeito (largura = altura)
        <View style={{height: size, aspectRatio: 1}}>
            {/*
            Componente LottieView que exibe a animação
            style={{flex: 1}} faz com que o componente ocupe todo o espaço disponível
            source carrega o arquivo JSON da animação da pasta assets/images
            autoPlay inicia a animação automaticamente
            loop faz a animação repetir indefinidamente
            */}
        <LottieView
            source={require('../assets/loading.json')}
            autoPlay
            loop
            style={{height: size}}
        />
        <Text style={{fontSize: 20}}>Carregando...</Text>
        </View>
    );
    }
 