import React, {useRef, useMemo, useCallback, useEffect} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
//import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import { Modalize } from 'react-native-modalize';

import CardCredential from '../components/CardCredential';
import NewButton from '../components/NewButton';



const MainPage = () => {

    const navigation = useNavigation(); 

    return(
        <SafeAreaView style={{flex:1}}>                           
            <ScrollView style={{flex:1}}> 
                <CardCredential />
                <CardCredential />
                <CardCredential />                
                <CardCredential />
                <CardCredential />
            </ScrollView>    
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