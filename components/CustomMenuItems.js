import { Text, View } from 'react-native';
import {
    MenuOption,
  } from 'react-native-popup-menu';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const MenuItem = ({text, action, value, icon})=>{
    return (
        <MenuOption onSelect={()=> action(value)}>
            <View className="px-4 py-1 flex-row justify-between items-center">
                <Text style={{fontSize: hp(1.7)}} className="font-semibold text-neutral-600">
                    {text}
                </Text>
                {icon}
            </View>
        </MenuOption>
    )
}
/*
  Funcionamento
    Cria um menu personalizado é usado para colocar botões de opções como sair, perfil, configurações

  Boas práticas
    Estar separado como componente
    Da pra reaproveitar em outras paginas

  Como refatorar
    Criar uma lista de itens em array para n escrever manualmente
    Colocar tipagem de verificação para os dados recebidos
    Usar uma esilização mais organizada como nativewind, stylesheet
*/
