import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Title({children, numberOfLines = 1, size = 18}) {
    return (
        
            <Text numberOfLines={numberOfLines} style={
                {fontWeight: 'bold', fontSize: size, color: 'red'}
            } >{children}</Text>
       
    )
}

const styles = StyleSheet.create({})
