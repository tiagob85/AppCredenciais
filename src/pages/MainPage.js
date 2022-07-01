import React, {useState} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import CardCredential from '../components/CardCredential';
import NewButton from '../components/NewButton';

const DadosArray = [
    {id: '1', user: 'usuario 1', password: '123456', title: 'Santander'},
    {id: '2', user: 'usuario 2', password: '789101', title: 'Caixa Economica'},
    {id: '3', user: 'usuario 3', password: 'abc123456', title: 'Senha do Gmail'},
    {id: '4', user: 'usuario 4', password: 'def78901', title: 'Conta Pix'},
];

const MainPage = () => {
    const navigation = useNavigation(); 
    const [listData, setListData] = useState(DadosArray);

    const ItemView = ({item}) =>{
        return(
            <CardCredential 
                uservalue={item.user}  
                passwordvalue={item.password}
                titlevalue={item.title}
            />
        );

    }

    return(
        <SafeAreaView style={{flex:1}}>                           
             <View style={{flex:1}}> 
                <FlatList 
                    data={listData}
                    renderItem={ItemView}
                    keyExtractor={(item,index) => index.toString()}
                />
           </View>    
            <NewButton 
                customClick={
                    () => navigation.navigate('Edit',{
                    OpId: 2,
                    user: '',
                    password: '',
                    titulo: ''
                })}
            />   
        </SafeAreaView>        
    );
};

const styles = StyleSheet.create({
    ViewCard:{
        backgroundColor: '#002e4d',
    },
    contentContainer:{
        flex: 1,
        alignItems: 'center',
    }
});

export default MainPage;