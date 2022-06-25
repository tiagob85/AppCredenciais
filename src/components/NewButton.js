import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Button
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const NewButton = (props) =>{
    return(
        <Button 
            title="Novo"
            onPress={props.customClick}
            style={styles.ButtonStyle}
            color= '#00b33c'
            Icon={
                <Icon 
                    style={styles.IconStyle} name="plus-circle" size={80} color="#009933" />
            }
        />  
    );
}

const styles = StyleSheet.create({
    TouchableOpacityStyle:{
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    floatingButtonStyle:{ 
        width: 70,
        height: 75,        
    },
    IconStyle:{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        right: 30,
        bottom: 30,
        marginLeft: 2,
        marginRight: -87,
    },
    ButtonStyle:{
        flex: 1,
        marginRight: 80,
        borderRadius: 100,
        padding: 25,
        flexDirection: 'row',
    }
});

export default NewButton;