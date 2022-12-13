import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, theme } from '../styles/Theme';
import Avatar from './Avatar';

// import { Container } from './styles';

const Header = ({ label, logout, avatar, onPress, nome, props, dados }) => {

    const [alert, setAlert] = useState();


    return (
        <View style={styles.header}>

            {/* 
            <View>
                {avatar}
            </View> */}


            <Text style={[theme.title, { flex: 1 }]}>{label}</Text>

            <Text style={[theme.title, { fontSize: 20 }]}>{nome}</Text>

            <View style={styles.logout}>

                <TouchableOpacity style={styles.logout}>
                    <Text
                        style={[theme.title, { color: 'black' }]}
                        onPress={onPress}
                    >Sair</Text>
                </TouchableOpacity>


            </View>

            {/* {logout ?
                <TouchableOpacity style={styles.logout}>
                    <Text style={[theme.title, { color: colors.red, color: 'black' }]}>Sair</Text>
                </TouchableOpacity>
                :
                <View style={styles.logout}>

                    <TouchableOpacity style={styles.logout}>
                        <Text
                            style={[theme.title, { color: colors.red, color: 'black' }]}
                            onPress={onPress}
                        >Sair</Text>
                    </TouchableOpacity>

                </View>
            } */}

        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingHorizontal: 8,
        backgroundColor: '#f1f1f1',
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        alignItems: 'center',
        borderBottomWidth: 1
    },
    logout: {
        flex: 1,
        width: 80,
        color: 'black',
        // backgroundColor: colors.purple,
        justifyContent: 'center',
        // justifyContent: 'space-evenly',
        alignItems: 'flex-end',

    }
})