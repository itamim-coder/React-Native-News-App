import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Card from './Card'

const {width} = Dimensions.get('window')

export default function HalfCard({item}) {
    return (
      <Card item={item} style={styles.container} imageStyle={styles.image}></Card>
    )
}

const styles = StyleSheet.create({
    container:{
        width: width / 2,
        marginRight: 15,
        height: 200
       
    },
    image:{
        height: 100
    }

})
