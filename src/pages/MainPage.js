import React, {useRef, useMemo, useCallback, useEffect, useState} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    FlatList
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
//import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import { Modalize } from 'react-native-modalize';

import CardCredential from '../components/CardCredential';
import NewButton from '../components/NewButton';

const DadosArray = [
    {id: '1', user: 'usuario 1', password: '123456'},
    {id: '2', user: 'usuario 2', password: '789101'},
    {id: '3', user: 'usuario 3', password: 'abc123456'},
    {id: '4', user: 'usuario 4', password: 'def78901'},
];

const MainPage = () => {
    const navigation = useNavigation(); 
    const [listData, setListData] = useState(DadosArray);

    const ItemView = ({item}) =>{
        return(
            <CardCredential uservalue={item.user}  passwordvalue={item.password}/>
        );

    }

    return(
        <SafeAreaView style={{flex:1}}>                           
             <View style={{flex:1}}> 
                {/* <CardCredential uservalue="Usuario1" passwordvalue="123456"/>
                <CardCredential uservalue="Usuario"  passwordvalue="123456teste"/>
                <CardCredential uservalue="Usuario2" passwordvalue="123456"/>                
                <CardCredential uservalue="Usuario"  passwordvalue="123456"/>
                <CardCredential uservalue="Usuario"  passwordvalue="123456"/> */}
                <FlatList 
                    data={listData}
                    renderItem={ItemView}
                    keyExtractor={(item,index) => index.toString()}
                />
           </View>    
            <NewButton 
                customClick={() => navigation.navigate('Edit')}
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