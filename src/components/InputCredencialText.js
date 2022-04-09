import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputCredencialText = (props) => {
    return(
        <View style={styles.viewstyle}>
            <TextInput 
                underlineColorAndroid="transparent"
                placeholder={props.placeholder}
                placeholderTextColor="#999999"
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
                returnKeyType={props.returnKeyType}
                numberOfLines={props.numberOfLines}
                multiline={props.multiline}
                onSubmitEditing={props.onSubmitEditing}
                style={props.style}
                blurOnSubmit={false}
                secureTextEntry={props.secureTextEntry}
                value={props.value}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewstyle:{
        marginLeft: 5,
        marginRight: 5,
        marginTop: 2,
        marginBottom: 8,
        borderColor: '#8c8c8c',
        borderWidth: 2,
        color: '#000000',
        fontSize: 20,
        borderRadius: 10,
    },
})

export default InputCredencialText;