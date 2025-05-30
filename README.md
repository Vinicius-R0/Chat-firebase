# Chat-Firebase

## Boas ráticas 

- Uso do Context API para controlar o login do usuário.
- Componentes organizados e fáceis de entender.
- Uso do `FlatList` para mostrar listas de forma rápida e eficiente.

## Pontos que podem melhorar

- Não tem carregamento (loading) quando busca dados.
- Falta de mensagens de erro para o usuário.
- Login não fica salvo quando fecha o app.
- Estilos feitos direto no código (inline), o que pode ficar bagunçado em projetos grandes.
- Faltam melhorias de acessibilidade.

## Como refatorar

- Usar NativeWind, StyleSheet para deixar os estilos mais organizados.
- Criar hooks, como `useChats` e `useAuth`, para separar melhor as regras de negócio.
- Adicionar loaders (indicadores de carregamento) e tratamento de erros.
- Usar AsyncStorage ou SecureStore para salvar o login do usuário.
- Implementar TypeScript para garantir que os dados estejam corretos.

components_firebasechat/
├── components/
│ ├── ChatList.js
│ ├── ChatRoomHeader.js
│ ├── CustomMenuItems.js
│ |── ChatListItem.js
├── context/
│ |── authContext.js
├── hooks/
│ ├── useChats.js
│ |── useAuth.js
├── services/
│ |── firebase.js
├── App.js
|── README.md

