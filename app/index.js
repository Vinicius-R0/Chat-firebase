import { View, Text, ActivityIndicator } from 'react-native';

import React from 'react';

export default function StartPage() {
    return(

        <View style={{
        flex: 1, 
        justifyContent: 'center'
        }}>
            {/* Exibe um indicador de atividade circular, 
            mostrando ao usuario que algo está carregando*/}
            
            <ActivityIndicator 
            size="large" 
            color="gray" />

        </View>
    )
}

    