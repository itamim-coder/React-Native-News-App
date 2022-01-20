import React from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'

export default function Screen({children}) {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
           {children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: '#f7f3f3',
        flex: 1
    }
})
