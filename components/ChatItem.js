import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ChatItem from './ChatItem'
import { useRouter } from 'expo-router'

export default function ChatList({users, currentUser}) {
    const router = useRouter();
  return (
    <View className="flex-1">
      <FlatList
        data={users}
        contentContainerStyle={{flex: 1, paddingVertical: 25}}
        keyExtractor={item=> Math.random()}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index})=> <ChatItem 
            noBorder={index+1 == users.length} 
            router={router} 
            currentUser={currentUser}
            item={item} 
            index={index} 
        />}
       />
    </View>
  )
}

/*
  Funcionamento do código
      Exibe uma lista com os chats diponiveis pro usuario usando
      props para procurar os dados dos chats e renderizar os
      items
    
  Boas práticas
      O uso do Flatlist para mostrar as listar de forma eficiente
      Componente limpo e simples, recebendo dados via props
      Direto e fácil de entender

  Como refatorar
      Criar um hook chamado useChats que faz a busca dos chats direto do firebase
      Adicionar uma tela que apareça enquanto os dados estão carregando
      Mostrar uma mensagem se der erro
      Criar um componente separado para cada item da lista


      

*/