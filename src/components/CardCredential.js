import React, {useState} from 'react';
import{
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ToastAndroid,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';

import ButtonForm from './ButtonForm';

const CardCredential = (props) =>{
    //Variavel que controla a visibilidade da senha.
    const [isVisible, setIsVisible] = useState(true);
    //Variavel que armazena usuário.
    const [UserInfo, setUserInfo] = useState('');
    //Variavel que armazena senha.
    const [UserPassword, setUserPassword] = useState('');
    //Variavel que armazena titulo.
    const [TitleInfo, setTitleInfo] = useState('');
    
    const navigation = useNavigation(); 

    //Função que copia o usuário e senha, e mostra mensagem de sucesso ao copiar as informações.
    function informationcopy(id,informacao){
        if (id == 1) {
            Clipboard.setString(informacao)
            ToastAndroid.show("Usuário copiado", ToastAndroid.SHORT);
        } else {
            Clipboard.setString(informacao)
            ToastAndroid.show("Senha copiada", ToastAndroid.SHORT);
        }        
    }

    return(
        <View style={styles.centeredView}>
            <View style={styles.cardview}>                
                <View style={styles.descriptionText}>
                     <Text style={styles.TitleCard}>
                        {props.titlevalue}
                    </Text>        
                    <TouchableOpacity onPress={()=>{informationcopy(1,props.uservalue)}}>          
                        <View style={styles.ContainerPassword}>
                            <Text style={styles.TextCard}>
                                Usuário  :
                            </Text> 
                            <TextInput 
                                style={styles.TextInputStyle}   
                                onChangeText={(UserInfo)=>setUserInfo(props.uservalue)}                              
                                value={props.uservalue}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{informationcopy(2,props.passwordvalue)}}>
                        <View style={styles.ContainerPassword}>
                            <Text style={styles.TextCard}>
                                Senha    :
                            </Text> 
                            <TextInput 
                                style={styles.TextInputStyle}
                                secureTextEntry={isVisible} 
                                onChangeText={(UserPassword)=>setUserPassword(props.passwordvalue)}
                                value={props.passwordvalue} 
                            />
                            <TouchableOpacity
                                style={styles.buttonvisible}
                                onPress={()=>{setIsVisible(!isVisible)}}
                            >
                                <Icon style={styles.IconStyleVisible} name={isVisible?'eye-slash':'eye'} size={32} color="#000" />
                            </TouchableOpacity>
                        </View>                        
                    </TouchableOpacity>

                    <View style={styles.buttonview}>
                        <ButtonForm 
                            typebutton="erase"
                            icon="close"
                            title="Apagar"
                            customClick={()=>console.log("Clicou")}
                        />
                        <ButtonForm 
                            typebutton="edit"
                            icon="edit"                    
                            title="Editar"
                            customClick={
                                    () => navigation.navigate('Edit',
                                        {
                                            OpId: 1,
                                            user: props.uservalue,
                                            password: props.passwordvalue,
                                            title: props.titlevalue
                                        })
                                    }
                        />
                    </View>
                </View>                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView:{
        flex: 1,
        alignItems: "center",
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    cardview:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 1,
        backgroundColor: "white",
        borderRadius: 10,
        padding:15,
        shadowColor:"#000",
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '100%',
        minHeight: 200,
    },
    buttonview:{
        marginTop: 15,
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 5,
    },
    TitleCard:{
        fontSize: 28,
        color: "black",
        fontWeight: "bold",
        marginBottom: 10,
    },
    TextCard:{
        color: "black",
        fontWeight: "bold",
        fontSize: 22,
        margin: 5,
    },
    descriptionText:{
        flex: 1,
    },
    titleColor:{
        fontSize: 25,
    },
    TextButton:{
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 35,
        marginRight: 4,
        marginTop: -1,
        marginBottom: 1,
    },
    TextButtonEdit:{
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 41,
        marginRight: 4,
        marginTop: -1,
        marginBottom: 1,
    },
    StyleButtonErase:{
        marginRight: 10,
        marginLeft: 5,
        borderRadius: 10,
        paddingRight: 10,
        backgroundColor: '#ff6666',
        padding: 9,
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    StyleButtonEdit:{
        marginRight: 10,
        marginLeft: 5,
        borderRadius: 10,
        paddingRight: 10,
        backgroundColor: '#0099ff',
        padding: 9,
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    IconStyle:{
        marginTop: 2,
        marginLeft: 3,
        marginRight: 10,
        marginBottom: -30,
    },
    IconStyleVisible:{
        marginTop: 2,
        marginLeft: 3,
        marginRight: 10,
        marginBottom: -35,
    },
    TextInputStyle:{
        color: '#000',
        fontSize: 22,
        marginLeft: 3,
        height: 40,
        margin: 7,
        padding: 1,
        
    },
    ContainerPassword:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonvisible:{
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 10,
        paddingBottom: 35, 
    }
});

export default CardCredential;