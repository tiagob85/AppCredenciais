import React, {useState} from 'react';
import{
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';


const CardCredential = () =>{
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
                    <Text style={styles.TitleCard}>Banco Santander</Text>        
                    <TouchableOpacity onPress={()=>{informationcopy(1,"usuario")}}>          
                        <Text style={styles.TextCard}>Usuario : Usuario</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{informationcopy(2,"123456")}}>
                        <Text style={styles.TextCard}>Senha    : *******</Text>
                    </TouchableOpacity>
                    <View style={styles.buttonview}>
                        <TouchableOpacity
                            style={styles.StyleButtonErase}
                        >
                            <Icon style={styles.IconStyle} name="close" size={32} color="#fff" />
                            <Text style={styles.TextButton}>Apagar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.StyleButtonEdit}
                            onPress={() => navigation.navigate('Edit')}
                        >
                            <Icon style={styles.IconStyle} name="edit" size={32} color="#fff" />
                            <Text style={styles.TextButtonEdit}>Editar</Text>
                        </TouchableOpacity>
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
    }
});

export default CardCredential;