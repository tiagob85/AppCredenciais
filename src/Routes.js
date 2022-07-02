import 'react-native-gesture-handler';

import * as React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

import { NavigationContainer,useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

/*Importação das páginas*/
import LogonScreen from './pages/LogonPage';
import MainScreen from './pages/MainPage';
import RegisterScreen from './pages/RegisterPage';
import CreateAccount from './pages/CreateAccount';

const Stack = createStackNavigator();

const Routes = () => {
    const navigationRef = useNavigationContainerRef(); 
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Logon">
                <Stack.Screen 
                    name="Logon"
                    component={LogonScreen}
                    options={{
                        title: "Credentials Control",
                        headerStyle:{
                            backgroundColor: '#005ce6',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle:{
                            fontWeight: 'bold',
                        }
                    }}
                />
                <Stack.Screen 
                    name="Main"
                    component={MainScreen}
                    options={{
                        title: "Principal",
                        headerStyle:{
                            backgroundColor: '#005ce6',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle:{
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen 
                    name="Edit"
                    component={RegisterScreen}
                    options={{
                        title: "Editar/Criar Registro",
                        headerStyle:{
                            backgroundColor: '#005ce6',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle:{
                            fontWeight: 'bold',
                        }
                    }}
                />
                <Stack.Screen 
                    name="NewAccount"
                    component={CreateAccount}
                    options={{
                        title: "Criar conta",
                        headerStyle:{
                            backgroundColor: '#005ce6',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle:{
                            fontWeight: 'bold',
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    BtnStyle:{
        marginLeft: 20,
        fontSize: 20
    }
})

export default Routes;