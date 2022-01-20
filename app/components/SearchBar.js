import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function SearchBar() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.searchInput} placeholder="Search Here"></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8
    },
    searchInput:{
        width:'100%',
        height:'100%',
        paddingLeft: 8,
        fontSize: 16
    }
})


